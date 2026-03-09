import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { sanityClient } from "../sanity";
import { useLanguage } from "../context/LanguageContext";
import {
  convertToEthiopianDate,
  toEthiopianTime,
  parseFullDateParts
} from "../utils/ethiopianDate";
import { getEthiopianTimeOfDay } from "../utils/ethiopianTimeOfDay";
import EventCard from "./EventCard";

export default function EventsSection({
  limit = 4,
  onlyFeatured = true
}) {
  const { t } = useTranslation();
  const { language: lang } = useLanguage();
  const [events, setEvents] = useState([]);
  const [isEventsLoading, setIsEventsLoading] = useState(true);
  const [now, setNow] = useState(() => new Date());
  const [ethiopianDates, setEthiopianDates] = useState({});
  const NEW_BADGE_DAYS = 7;

  useEffect(() => {
    setIsEventsLoading(true);
    sanityClient
      .fetch(`*[_type == "event"]{
        _id,
        _createdAt,
        "title": title.${lang},
        "description": description.${lang},
        "imageUrl": image.asset->url,
        startDate,
        endDate,
        type,
        featured
      }`)
      .then(setEvents)
      .finally(() => setIsEventsLoading(false));
  }, [lang]);

  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(intervalId);
  }, []);

  const parseDate = (value) => (value ? new Date(value) : null);

  const getNextWeeklyOccurrence = (startDateValue) => {
    const start = parseDate(startDateValue);
    if (!start) return null;
    const target = new Date(now);
    target.setHours(
      start.getHours(),
      start.getMinutes(),
      start.getSeconds(),
      start.getMilliseconds()
    );
    const dayDiff = (start.getDay() - target.getDay() + 7) % 7;
    target.setDate(target.getDate() + dayDiff);
    if (target <= now) {
      target.setDate(target.getDate() + 7);
    }
    return target;
  };

  const isEventVisible = (event) => {
    if (!event?.startDate) return false;
    const start = parseDate(event.startDate);
    const end = parseDate(event.endDate);
    if (event.type === "weekly") return true;
    if (now < start) return true;
    if (end && now <= end) return true;
    return false;
  };

  const getEventNextOccurrence = (event) => {
    if (!event?.startDate) return null;
    if (event.type === "weekly") return getNextWeeklyOccurrence(event.startDate);
    const start = parseDate(event.startDate);
    if (!start) return null;
    if (now < start) return start;
    if (event.endDate && now <= parseDate(event.endDate)) return now;
    return null;
  };

  const getCountdownText = (event) => {
    const nextTime = getEventNextOccurrence(event);
    if (!nextTime) return "Ended";
    if (event.type !== "weekly") {
      const start = parseDate(event.startDate);
      if (start && now >= start) {
        const end = parseDate(event.endDate);
        if (end && now <= end) return lang === "am" ? "በአሁኑ ጊዜ" : "Live now";
      }
    }
    const diffMs = Math.max(0, nextTime - now);
    const totalMinutes = Math.floor(diffMs / 60000);
    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const minutes = totalMinutes % 60;
    if (days > 0) {
      return lang === "am"
        ? `በ${days} ቀን ${hours} ሰዓት ይጀምራል`
        : `Starts in ${days} day${days === 1 ? "" : "s"} ${hours} hour${hours === 1 ? "" : "s"}`;
    }
    if (hours > 0) {
      return lang === "am"
        ? `በ${hours} ሰዓት ${minutes} ደቂቃ ይጀምራል`
        : `Starts in ${hours} hour${hours === 1 ? "" : "s"} ${minutes} min`;
    }
    return lang === "am"
      ? `በ${minutes} ደቂቃ ይጀምራል`
      : `Starts in ${minutes} min`;
  };

  const getBadges = (event) => {
    const badges = [];
    const createdAt = parseDate(event._createdAt);
    if (createdAt && now - createdAt <= NEW_BADGE_DAYS * 24 * 60 * 60 * 1000) {
      badges.push({
        label: lang === "am" ? "አዲስ" : "NEW",
        tone: "bg-[#ECFDF5] text-emerald-700 border-emerald-500/30"
      });
    }
    if (event.type === "weekly") {
      badges.push({
        label: lang === "am" ? "ሳምንታዊ" : "WEEKLY",
        tone: "bg-[#E0F2FE] text-deep-blue border-sky-blue/30"
      });
    }
    if (event.type === "special") {
      badges.push({
        label: lang === "am" ? "ልዩ መርሃ ግብር" : "SPECIAL",
        tone: "bg-[#D8F0FB] text-midnight-navy border-[#D8F0FB]/30"
      });
    }
    return badges;
  };

  const getCardClassName = (event) => {
    if (event.type === "special") {
      return "bg-[#AFE5FF] border border-coral-red/40 shadow-sm";
    }
    return "bg-white border border-midnight-navy/10";
  };

  useEffect(() => {
    if (lang !== "am" || isEventsLoading) return;
    const fetchDates = async () => {
      const toConvert = events
        .filter((event) => (onlyFeatured ? event.featured : true))
        .filter(isEventVisible)
        .flatMap((event) => [event.startDate, event.endDate].filter(Boolean));
      const uniqueDates = Array.from(new Set(toConvert));
      const results = {};
      await Promise.all(
        uniqueDates.map(async (iso) => {
          if (!iso) return;
          const d = new Date(iso);
          const eth = await convertToEthiopianDate(d);
          if (eth) results[iso] = eth;
        })
      );
      setEthiopianDates((prev) => ({ ...prev, ...results }));
    };
    fetchDates();
  }, [lang, isEventsLoading, events]);

  function getDateParts(dateStr) {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    if (lang === "am" && ethiopianDates[dateStr]) {
      return ethiopianDates[dateStr];
    }
    return parseFullDateParts(date, lang);
  }

  function formatEventDateOnly(dateStr) {
    const parts = getDateParts(dateStr);
    if (!parts) return "";
    return `${parts.weekday} ${parts.month} ${parts.day}, ${parts.year}`;
  }

  function formatEventTime(dateStr) {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (lang === "am") {
      const time = toEthiopianTime(date);
      const tod = getEthiopianTimeOfDay(date);
      return `${time} ${tod}`.trim();
    }
    return date.toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit" });
  }

  function formatEventDateTime(dateStr, showTime = true) {
    if (!dateStr) return "";
    const dateText = formatEventDateOnly(dateStr);
    if (!showTime) return dateText;
    const timeText = formatEventTime(dateStr);
    return `${dateText}${timeText ? " " + timeText : ""}`;
  }

  function isSameCalendarDay(startStr, endStr) {
    if (!startStr || !endStr) return false;
    const startParts = getDateParts(startStr);
    const endParts = getDateParts(endStr);
    if (startParts && endParts) {
      return (
        startParts.year === endParts.year &&
        startParts.month === endParts.month &&
        startParts.day === endParts.day
      );
    }
    const start = new Date(startStr);
    const end = new Date(endStr);
    return (
      start.getFullYear() === end.getFullYear() &&
      start.getMonth() === end.getMonth() &&
      start.getDate() === end.getDate()
    );
  }

  function shouldShowTime(dateStr) {
    if (!dateStr) return false;
    const d = new Date(dateStr);
    return d.getHours() !== 0 || d.getMinutes() !== 0;
  }

  const visibleEvents = events
    .filter((event) => (onlyFeatured ? event.featured : true))
    .filter(isEventVisible)
    .map((event) => ({
      ...event,
      nextOccurrence: getEventNextOccurrence(event)
    }))
    .filter((event) => event.nextOccurrence)
    .sort((a, b) => a.nextOccurrence - b.nextOccurrence)
    .slice(0, typeof limit === "number" ? limit : undefined);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {isEventsLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`event-skeleton-${index}`}
              className="p-8 bg-white border border-midnight-navy/10 animate-pulse"
            >
              <div className="h-48 w-full bg-off-white border-b border-midnight-navy/5 mb-6"></div>
              <div className="flex gap-2 mb-4">
                <div className="h-4 w-12 bg-off-white border border-midnight-navy/5"></div>
                <div className="h-4 w-16 bg-off-white border border-midnight-navy/5"></div>
              </div>
              <div className="h-8 w-2/3 bg-off-white border border-midnight-navy/5 mb-4"></div>
              <div className="space-y-2 mb-8">
                <div className="h-3 w-full bg-off-white border border-midnight-navy/5"></div>
                <div className="h-3 w-5/6 bg-off-white border border-midnight-navy/5"></div>
              </div>
              <div className="h-4 w-40 bg-off-white border border-midnight-navy/5"></div>
            </div>
          ))}
        {!isEventsLoading &&
          visibleEvents.map((event) => {
            const hasEnd = Boolean(event.endDate);
            const sameDay = hasEnd && isSameCalendarDay(event.startDate, event.endDate);
            const showEnd = hasEnd && !sameDay;
            const showStartTime = shouldShowTime(event.startDate);
            const showEndTime = hasEnd && shouldShowTime(event.endDate);
            const dateOnlyText = formatEventDateOnly(event.startDate);
            const startTimeText = showStartTime ? formatEventTime(event.startDate) : "";
            const endTimeText = showEndTime ? formatEventTime(event.endDate) : "";
            const timeRangeText =
              startTimeText && endTimeText
                ? `${startTimeText}–${endTimeText}`
                : startTimeText || endTimeText;
            const dateText = sameDay
              ? `${dateOnlyText}${timeRangeText ? " " + timeRangeText : ""}`
              : `${formatEventDateTime(event.startDate, showStartTime)}${
                  showEnd ? ` – ${formatEventDateTime(event.endDate, showEndTime)}` : ""
                }`;

            return (
              <EventCard
                key={event._id}
                event={event}
                badges={getBadges(event)}
                dateText={dateText}
                countdownText={getCountdownText(event)}
                cardClassName={getCardClassName(event)}
              />
            );
          })}
      </div>

      {!isEventsLoading && visibleEvents.length === 0 && (
        <p className={`text-center ${onlyFeatured ? 'text-white' : 'text-midnight-navy/70'} mt-6`}>
          {t("happenings.no_event")}
        </p>
      )}
    </>
  );
}
