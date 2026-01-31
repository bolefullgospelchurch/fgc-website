import React, { useEffect, useRef, useState } from "react";
import { convertToEthiopianDate, toEthiopianTime, parseFullDateParts } from '../utils/ethiopianDate';
import { getEthiopianTimeOfDay } from '../utils/ethiopianTimeOfDay';
import { useTranslation } from 'react-i18next';
import {
  FaMobileAlt,
  FaPrayingHands,
  FaBookOpen,
  FaPlay,
} from "react-icons/fa";
import Navbar from "./Navbar";
import { sanityClient } from "../sanity";
import { useLanguage } from "../context/LanguageContext";
// import stage from "../assets/stage.jpeg";
import stage from "../assets/girl.jpg";
import ministriesBg from "../assets/bible.jpg";

export default function Home() {
  const { t } = useTranslation();
  const { language: lang } = useLanguage();
  const dayMap = {
    sunday: { en: 'Sunday', am: 'እሁድ' },
    monday: { en: 'Monday', am: 'ሰኞ' },
    tuesday: { en: 'Tuesday', am: 'ማክሰኞ' },
    wednesday: { en: 'Wednesday', am: 'ረቡዕ' },
    thursday: { en: 'Thursday', am: 'ሐሙስ' },
    friday: { en: 'Friday', am: 'አርብ' },
    saturday: { en: 'Saturday', am: 'ቅዳሜ' }
  };
  const dayOrder = {
    monday: 0,
    tuesday: 1,
    wednesday: 2,
    thursday: 3,
    friday: 4,
    saturday: 5,
    sunday: 6
  };
  const moreSectionRef = useRef(null);
  const moreBgRef = useRef(null);
  const [weeklyPrograms, setWeeklyPrograms] = useState([]);
  const [isWeeklyLoading, setIsWeeklyLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [isEventsLoading, setIsEventsLoading] = useState(true);
  const [now, setNow] = useState(() => new Date());
  const NEW_BADGE_DAYS = 7;
  const normalizeDay = (day) => String(day || '').toLowerCase();
  const getProgramDayIndex = (schedule = []) => {
    if (!schedule.length) return 99;
    return Math.min(
      ...schedule.map((slot) => dayOrder[normalizeDay(slot.day)] ?? 99)
    );
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const handleScroll = () => {
      if (!moreSectionRef.current || !moreBgRef.current) return;
      const rect = moreSectionRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const sectionTop = scrollY + rect.top;
      const offset = (scrollY - sectionTop) * 0.15;
      moreBgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsWeeklyLoading(true);
    sanityClient
      .fetch(`*[_type == "weeklyProgram"]{
        _id,
        "name": name.${lang},
        "ageGroup": ageGroup.${lang},
        schedule[]{
          day,
          "time": time.${lang}
        }
      }`)
      .then(setWeeklyPrograms)
      .finally(() => setIsWeeklyLoading(false));
  }, [lang]);

  useEffect(() => {
    setIsEventsLoading(true);
    sanityClient
      .fetch(`*[_type == "event"]{
        _id,
        _createdAt,
        "title": title.${lang},
        "description": description.${lang},
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
    if (event.type === 'weekly') return true;
    if (now < start) return true;
    if (end && now <= end) return true;
    return false;
  };
  const getEventNextOccurrence = (event) => {
    if (!event?.startDate) return null;
    if (event.type === 'weekly') return getNextWeeklyOccurrence(event.startDate);
    const start = parseDate(event.startDate);
    if (!start) return null;
    if (now < start) return start;
    if (event.endDate && now <= parseDate(event.endDate)) return now;
    return null;
  };
  const getCountdownText = (event) => {
    const nextTime = getEventNextOccurrence(event);
    if (!nextTime) return 'Ended';
    if (event.type !== 'weekly') {
      const start = parseDate(event.startDate);
      if (start && now >= start) {
        const end = parseDate(event.endDate);
        if (end && now <= end) return lang === 'am' ? 'በመካሄድ ላይ' : 'Live now';
      }
    }
    const diffMs = Math.max(0, nextTime - now);
    const totalMinutes = Math.floor(diffMs / 60000);
    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const minutes = totalMinutes % 60;
    if (days > 0) {
      return lang === 'am'
        ? `በ${days} ቀን ${hours} ሰዓት ይጀምራል`
        : `Starts in ${days} day${days === 1 ? '' : 's'} ${hours} hour${hours === 1 ? '' : 's'}`;
    }
    if (hours > 0) {
      return lang === 'am'
        ? `በ${hours} ሰዓት ${minutes} ደቂቃ ይጀምራል`
        : `Starts in ${hours} hour${hours === 1 ? '' : 's'} ${minutes} min`;
    }
    return lang === 'am'
      ? `በ${minutes} ደቂቃ ይጀምራል`
      : `Starts in ${minutes} min`;
  };
  const getBadges = (event) => {
    const badges = [];
    const createdAt = parseDate(event._createdAt);
    if (createdAt && now - createdAt <= NEW_BADGE_DAYS * 24 * 60 * 60 * 1000) {
      badges.push({
        label: lang === 'am' ? 'አዲስ' : 'NEW',
        tone: 'bg-emerald-500/15 text-emerald-700 border-emerald-500/30'
      });
    }
    if (event.type === 'weekly') {
      badges.push({
        label: lang === 'am' ? 'ሳምንታዊ' : 'WEEKLY',
        tone: 'bg-sky-blue/15 text-deep-blue border-sky-blue/30'
      });
    }
    if (event.type === 'special') {
      badges.push({
        label: lang === 'am' ? 'ልዩ መርሃ ግብር' : 'SPECIAL',
        tone: 'bg-coral-red/15 text-coral-red border-coral-red/30'
      });
    }
    return badges;
  };
  const getCardClassName = (event) => {
    if (event.type === 'special') {
      return 'bg-coral-red/10 border border-coral-red/30 shadow-sm';
    }
    return 'bg-off-white border border-midnight-navy/10';
  };

  // Helper to format event date/time for display
  const [ethiopianDates, setEthiopianDates] = useState({});
  // Fetch and cache Ethiopian dates for all visible events
  useEffect(() => {
    if (lang !== 'am' || isEventsLoading) return;
    const fetchDates = async () => {
      const toConvert = events
        .filter((event) => event.featured && isEventVisible(event))
        .flatMap((event) => [event.startDate, event.endDate].filter(Boolean));
      const uniqueDates = Array.from(new Set(toConvert));
      const results = {};
      await Promise.all(uniqueDates.map(async (iso) => {
        if (!iso) return;
        const d = new Date(iso);
        const eth = await convertToEthiopianDate(d);
        if (eth) results[iso] = eth;
      }));
      setEthiopianDates((prev) => ({ ...prev, ...results }));
    };
    fetchDates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, isEventsLoading, events]);

  function getDateParts(dateStr) {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    if (lang === 'am' && ethiopianDates[dateStr]) {
      return ethiopianDates[dateStr];
    }
    return parseFullDateParts(date, lang);
  }

  function formatEventDateOnly(dateStr) {
    const parts = getDateParts(dateStr);
    if (!parts) return '';
    return `${parts.weekday} ${parts.month} ${parts.day}, ${parts.year}`;
  }

  function formatEventTime(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (lang === 'am') {
      const time = toEthiopianTime(date);
      const tod = getEthiopianTimeOfDay(date);
      return `${time} ${tod}`.trim();
    }
    return date.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit' });
  }

  function formatEventDateTime(dateStr, showTime = true) {
    if (!dateStr) return '';
    const dateText = formatEventDateOnly(dateStr);
    if (!showTime) return dateText;
    const timeText = formatEventTime(dateStr);
    return `${dateText}${timeText ? ' ' + timeText : ''}`;
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
  const sortedWeeklyPrograms = weeklyPrograms
    .slice()
    .sort((a, b) => getProgramDayIndex(a.schedule) - getProgramDayIndex(b.schedule));

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar transparent />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pb-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={stage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80 z-10"></div>
          <div className="absolute inset-0 bg-linear-to-t from-midnight-navy via-transparent to-transparent z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-16">
            {/* Badge */}
            <div className="inline-block bg-off-white/10 backdrop-blur-sm border border-off-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in shadow-lg">
              <span className="text-sky-blue font-bold text-sm tracking-widest uppercase">
                  {t('hero.invited')}
                </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-off-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
                {t('hero.jesus_prefix')} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-blue to-coral-red">
                  {t('hero.jesus_suffix')}
                </span>
            </h1>

            {/* Subtext / Verse */}
             <p className="text-xl md:text-2xl text-off-white/85 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                "{t('hero.verse')}" <br />
               <span className="text-sky-blue font-semibold text-lg mt-3 block">{t('hero.verse_ref')}</span>
              </p>

            {/* Buttons */}
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-deep-blue hover:bg-deep-blue/90 text-off-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-deep-blue/30 hover:scale-105 flex items-center gap-2">
                  <FaPlay className="text-sm" /> {t('hero.watch_message')}
                </button>
                <button className="bg-off-white/10 hover:bg-off-white/20 backdrop-blur-md border border-off-white/30 text-off-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105">
                  {t('hero.new_here')}
                </button>
             </div>

             {/* Service Time Footer */}
             <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-off-white/80 border-t border-off-white/10 pt-8 max-w-2xl mx-auto">
                 <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-wider text-sky-blue mb-1">{t('hero.join_live')}</p>
                  <p className="text-lg text-off-white font-medium">{t('hero.service_time')}</p>
                 </div>
                <div className="hidden md:block w-px h-12 bg-off-white/20"></div>
                  <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-wider text-sky-blue mb-1">{t('hero.prayer_request')}</p>
                  <p className="text-lg text-off-white font-medium">{t('hero.here_for_you')}</p>
                 </div>
             </div>
        </div>

        {/* Three Card Preview Section */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="relative h-56 md:h-64 bg-linear-to-br from-coral-red to-sky-blue rounded-lg overflow-hidden group cursor-pointer transition-transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-midnight-navy/40 group-hover:bg-midnight-navy/50 transition-colors z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-3xl font-black text-off-white mb-2">
                    {t('cards.know_us')}
                  </h3>
                  <button className="text-off-white font-bold text-sm hover:underline flex items-center gap-1">
                    {t('cards.learn_more')} <span>→</span>
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative h-56 md:h-64 bg-linear-to-br from-deep-blue to-midnight-navy rounded-lg overflow-hidden group cursor-pointer transition-transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-midnight-navy/40 group-hover:bg-midnight-navy/50 transition-colors z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-3xl font-black text-off-white mb-2">
                    {t('cards.events')}
                  </h3>
                  <button className="text-off-white font-bold text-sm hover:underline flex items-center gap-1">
                    {t('cards.learn_more')} <span>→</span>
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative h-56 md:h-64 bg-linear-to-br from-sky-blue to-deep-blue rounded-lg overflow-hidden group cursor-pointer transition-transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-midnight-navy/40 group-hover:bg-midnight-navy/50 transition-colors z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-3xl font-black text-off-white mb-2">
                    {t('cards.next_steps')}
                  </h3>
                  <button className="text-off-white font-bold text-sm hover:underline flex items-center gap-1">
                    {t('cards.learn_more')} <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Welcome Home Section */}
      <section className="bg-off-white py-12 md:py-16">
        <div className="max-w-full mx-auto relative overflow-hidden">
          <div className="marquee-track flex items-center gap-x-28 py-2 uppercase font-black text-2xl md:text-4xl text-midnight-navy">
            {[...Array(13)].map((_, i) => (
              <span key={i}>
                {t('welcome.text')}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-linear-to-r from-deep-blue from-0% to-midnight-navy to-100% text-off-white px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            {t('mission.statement')}
          </h2>
          <p className="text-lg mb-8 text-off-white/80 leading-relaxed">
            {t('mission.description')}
          </p>
          <button className="bg-coral-red hover:bg-coral-red/90 text-off-white px-8 py-3 rounded-lg font-bold transition-colors">
            {t('mission.button')}
          </button>
        </div>
      </section>

      {/* Get Connected Section */}
      <section className="bg-sky-blue/10 px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-midnight-navy mb-4">
            {t('connect.title')}
          </h2>
          <p className="text-center text-midnight-navy/80 mb-12 max-w-2xl mx-auto text-lg">
            {t('connect.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kids Ministry */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-b from-sky-blue to-deep-blue z-0"></div>
              <div className="absolute inset-0 bg-midnight-navy/30 group-hover:bg-midnight-navy/40 transition-colors z-10"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-4xl font-black text-off-white mb-3">{t('connect.kids')}</h3>
                <button className="bg-deep-blue hover:bg-deep-blue/90 text-off-white px-6 py-2 rounded-lg font-bold transition-colors w-fit">
                  {t('cards.learn_more')}
                </button>
              </div>
            </div>

            {/* Youth Ministry */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-b from-deep-blue to-midnight-navy z-0"></div>
              <div className="absolute inset-0 bg-midnight-navy/30 group-hover:bg-midnight-navy/40 transition-colors z-10"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-4xl font-black text-off-white mb-3">{t('connect.youth')}</h3>
                <button className="bg-deep-blue hover:bg-deep-blue/90 text-off-white px-6 py-2 rounded-lg font-bold transition-colors w-fit">
                  {t('cards.learn_more')}
                </button>
              </div>
            </div>

            {/* Young Adults Ministry */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-b from-coral-red to-sky-blue z-0"></div>
              <div className="absolute inset-0 bg-midnight-navy/30 group-hover:bg-midnight-navy/40 transition-colors z-10"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-4xl font-black text-off-white mb-3">
                  {t('connect.young_adults')}
                </h3>
                <button className="bg-deep-blue hover:bg-deep-blue/90 text-off-white px-6 py-2 rounded-lg font-bold transition-colors w-fit">
                  {t('cards.learn_more')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wait, There's More Section */}
      <section
        ref={moreSectionRef}
        className="relative overflow-hidden bg-black text-off-white px-4 py-16 md:py-24"
      >
        <div className="absolute inset-0 z-0">
          <img
            ref={moreBgRef}
            src={ministriesBg}
            alt="Ministries background"
            className="w-full h-full object-cover opacity-80 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-center text-sm font-bold text-white/70 mb-4">
            {t('more.wait')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-6 text-white">
            {t('more.title')}
          </h2>
          <p className="text-center text-white/80 mb-8 max-w-2xl mx-auto text-lg">
            {t('more.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-lg p-6 text-center hover:bg-white/10 transition-colors cursor-pointer border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-black mb-2 text-white">{t('more.worship')}</h3>
              <p className="text-sm text-white/80 mb-4">
                {t('more.worship_desc')}
              </p>
              <button className="text-white font-bold text-sm hover:underline flex items-center justify-center gap-1 mx-auto">
                {t('cards.learn_more')} <span>→</span>
              </button>
            </div>
            <div className="bg-white/5 rounded-lg p-6 text-center hover:bg-white/10 transition-colors cursor-pointer border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-black mb-2 text-white">
                {t('more.diakon')}
              </h3>
              <p className="text-sm text-white/80 mb-4">
                {t('more.diakon_desc')}
              </p>
              <button className="text-white font-bold text-sm hover:underline flex items-center justify-center gap-1 mx-auto">
                {t('cards.learn_more')} <span>→</span>
              </button>
            </div>
            <div className="bg-white/5 rounded-lg p-6 text-center hover:bg-white/10 transition-colors cursor-pointer border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-black mb-2 text-white">{t('more.media')}</h3>
              <p className="text-sm text-white/80 mb-4">
                {t('more.media_desc')}
              </p>
              <button className="text-white font-bold text-sm hover:underline flex items-center justify-center gap-1 mx-auto">
                {t('cards.learn_more')} <span>→</span>
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-white hover:bg-white/90 text-black px-8 py-3 rounded-lg font-bold transition-colors">
              {t('more.view_all')}
            </button>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="bg-sky-blue/10 px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-6 text-midnight-navy">
            {t('schedule.title')}
          </h2>
          <p className="text-center text-midnight-navy/70 mb-12 max-w-3xl mx-auto text-lg">
            {t('schedule.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isWeeklyLoading &&
              Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`weekly-skeleton-${index}`}
                  className="rounded-lg p-6 border border-midnight-navy/10 bg-off-white animate-pulse"
                >
                  <div className="h-5 w-2/3 bg-midnight-navy/10 rounded mb-3"></div>
                  <div className="h-4 w-1/3 bg-midnight-navy/10 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-3/4 bg-midnight-navy/10 rounded"></div>
                    <div className="h-3 w-2/3 bg-midnight-navy/10 rounded"></div>
                  </div>
                </div>
              ))}
            {!isWeeklyLoading &&
              sortedWeeklyPrograms.map((program) => (
                <div
                  key={program._id}
                  className="bg-off-white rounded-lg p-6 border border-midnight-navy/10"
                >
                  <h3 className="text-2xl font-black mb-2 text-midnight-navy">
                    {program.name}{" "}
                    {program.ageGroup && (
                      <span className="text-sm text-midnight-navy/70 mb-3">
                        ({program.ageGroup})
                      </span>
                    )}
                  </h3>
                  <ul className="text-sm text-midnight-navy/80 space-y-1">
                    {(program.schedule || [])
                      .slice()
                      .sort((a, b) => (dayOrder[normalizeDay(a.day)] ?? 99) - (dayOrder[normalizeDay(b.day)] ?? 99))
                      .map((slot, index) => (
                        <li key={`${program._id}-${index}`}>
                          {lang == "am" ? dayMap[normalizeDay(slot.day)]?.am : dayMap[normalizeDay(slot.day)]?.en} - {slot.time}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
          {!isWeeklyLoading && sortedWeeklyPrograms.length === 0 && (
            <p className="text-center text-midnight-navy/70 mt-6">
              {t('schedules.no_schedule')}
            </p>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-sky-blue/10 px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-bold text-midnight-navy/60 mb-4">
            {t('happenings.label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            {t('happenings.title')}
          </h2>

          <div className="flex flex-col gap-6">
            {isEventsLoading &&
              Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={`event-skeleton-${index}`}
                  className="rounded-lg p-6 bg-off-white border border-midnight-navy/10 animate-pulse"
                >
                  <div className="flex gap-2 mb-3">
                    <div className="h-5 w-16 bg-midnight-navy/10 rounded-full"></div>
                    <div className="h-5 w-20 bg-midnight-navy/10 rounded-full"></div>
                  </div>
                  <div className="h-6 w-2/3 bg-midnight-navy/10 rounded mb-3"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-3 w-full bg-midnight-navy/10 rounded"></div>
                    <div className="h-3 w-5/6 bg-midnight-navy/10 rounded"></div>
                  </div>
                  <div className="h-4 w-40 bg-midnight-navy/10 rounded"></div>
                </div>
              ))}
            {!isEventsLoading &&
              events
                .filter((event) => event.featured)
                .filter(isEventVisible)
                .map((event) => ({
                  ...event,
                  nextOccurrence: getEventNextOccurrence(event)
                }))
                .filter((event) => event.nextOccurrence)
                .sort((a, b) => a.nextOccurrence - b.nextOccurrence)
                .map((event) => {
                  // Date display logic
                  const hasEnd = Boolean(event.endDate);
                  const sameDay = hasEnd && isSameCalendarDay(event.startDate, event.endDate);
                  const showEnd = hasEnd && !sameDay;
                  const showStartTime = shouldShowTime(event.startDate);
                  const showEndTime = hasEnd && shouldShowTime(event.endDate);
                  const dateOnlyText = formatEventDateOnly(event.startDate);
                  const startTimeText = showStartTime ? formatEventTime(event.startDate) : '';
                  const endTimeText = showEndTime ? formatEventTime(event.endDate) : '';
                  const timeRangeText =
                    startTimeText && endTimeText
                      ? `${startTimeText} – ${endTimeText}`
                      : startTimeText || endTimeText;
                  return (
                    <div
                      key={event._id}
                      className={`rounded-lg p-6 transition-shadow ${getCardClassName(event)}`}
                    >
                      <div className="flex flex-wrap gap-2 mb-3 items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {getBadges(event).map((badge, index) => (
                            <span
                              key={`${event._id}-badge-${index}`}
                              className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border ${badge.tone}`}
                            >
                              {badge.label}
                            </span>
                          ))}
                        </div>
                        <div className="text-xs font-semibold text-midnight-navy/80">
                          {sameDay ? (
                            <>
                              {dateOnlyText}
                              {timeRangeText && <span> {timeRangeText}</span>}
                            </>
                          ) : (
                            <>
                              {formatEventDateTime(event.startDate, showStartTime)}
                              {showEnd && (
                                <>
                                  <span className="mx-1">–</span>
                                  {formatEventDateTime(event.endDate, showEndTime)}
                                </>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      <h3 className="text-2xl font-black mb-2 text-midnight-navy">
                        {event.title}
                      </h3>
                      <p className="text-midnight-navy/70 text-sm mb-4">
                        {event.description}
                      </p>
                      <div className="text-sm font-semibold text-midnight-navy">
                        {getCountdownText(event)}
                      </div>
                    </div>
                  );
                })}
          </div>
          {!isEventsLoading &&
            events
              .filter((event) => event.featured)
              .filter(isEventVisible)
              .map((event) => ({
                ...event,
                nextOccurrence: getEventNextOccurrence(event)
              }))
              .filter((event) => event.nextOccurrence).length === 0 && (
              <p className="text-center text-midnight-navy/70 mt-6">
                {t('happenings.no_event')}
              </p>
            )}
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="bg-sky-blue/10 text-midnight-navy px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-bold text-sky-blue mb-4">
            {t('sermons.label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-midnight-navy">
            {t('sermons.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-off-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-midnight-navy/10">
              <div className="h-48 bg-deep-blue flex items-center justify-center">
                <FaPlay className="text-6xl text-off-white/90" />
              </div>
              <div className="p-6">
                <h3 className="font-black mb-2 text-midnight-navy">{t('sermons.recent')}</h3>
                <p className="text-midnight-navy/70 text-sm">{t('sermons.recent_desc')}</p>
              </div>
            </div>
            <div className="bg-off-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-midnight-navy/10">
              <div className="h-48 bg-deep-blue flex items-center justify-center">
                <FaPlay className="text-6xl text-off-white/90" />
              </div>
              <div className="p-6">
                <h3 className="font-black mb-2 text-midnight-navy">{t('sermons.series')}</h3>
                <p className="text-midnight-navy/70 text-sm">{t('sermons.series_desc')}</p>
              </div>
            </div>
            <div className="bg-off-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-midnight-navy/10">
              <div className="h-48 bg-deep-blue flex items-center justify-center">
                <FaPlay className="text-6xl text-off-white/90" />
              </div>
              <div className="p-6">
                <h3 className="font-black mb-2 text-midnight-navy">{t('sermons.podcast')}</h3>
                <p className="text-midnight-navy/70 text-sm">{t('sermons.podcast_desc')}</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="bg-coral-red hover:bg-coral-red/90 text-off-white px-8 py-3 rounded-lg font-bold transition-colors shadow-sm">
              {t('sermons.listen_now')}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-midnight-navy text-off-white px-4 py-16">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-black mb-4">{t('footer.about_title')}</h3>
              <p className="text-off-white/70 text-sm">
                {t('footer.about_desc')}
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('footer.email')}</h3>
              <p className="text-off-white/80 text-sm">info@gracechurch.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('footer.find_us')}</h3>
              <p className="text-off-white/80 text-sm">
                123 Faith Avenue
                <br />
                Blessed City, ST 12345
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('footer.call_us')}</h3>
              <p className="text-off-white/80 text-sm">(555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t border-off-white/10 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-off-white/60">
            <a href="#" className="hover:text-off-white">
              Home
            </a>
            <a href="#" className="hover:text-off-white">
              Get Involved
            </a>
            <a href="#" className="hover:text-off-white">
              Ministries
            </a>
            <a href="#" className="hover:text-off-white">
              Next Steps
            </a>
            <a href="#" className="hover:text-off-white">
              Media
            </a>
            <a href="#" className="hover:text-off-white">
              Events
            </a>
          </div>
          <p className="text-center text-off-white/50 text-xs">
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
    </main>
  );
}
