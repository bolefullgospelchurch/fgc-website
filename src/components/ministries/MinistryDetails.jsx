import React from "react";
import { useTranslation } from "react-i18next";
import { blocksToParagraphs, getLocalizedField } from "./ministryUtils";

export default function MinistryDetails({ ministry, lang }) {
  const { t } = useTranslation();
  const descriptionBlocks = getLocalizedField(ministry?.description, lang);
  const paragraphs = blocksToParagraphs(descriptionBlocks);
  const meeting = getLocalizedField(ministry?.meetingDayAndTime, lang);
  const location = getLocalizedField(ministry?.location, lang);

  if (!paragraphs.length && !meeting && !location) return null;

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[2fr_1fr]">
        {paragraphs.length > 0 && (
          <div className="space-y-8 text-midnight-navy/70 text-lg leading-relaxed font-medium">
            {paragraphs.map((text, idx) => (
              <p key={`ministry-desc-${idx}`}>{text}</p>
            ))}
          </div>
        )}
        {(meeting || location) && (
          <div className="border border-midnight-navy/10 bg-white p-10 h-fit">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-blue mb-10">
              {t("ministries.meetingInfoTitle")}
            </h3>
            <div className="space-y-10">
              {meeting && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-midnight-navy/30 mb-3">
                    {t("ministries.meetingDayAndTime")}
                  </p>
                  <p className="text-xl font-black text-midnight-navy leading-tight">
                    {meeting}
                  </p>
                </div>
              )}
              {location && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-midnight-navy/30 mb-3">
                    {t("ministries.location")}
                  </p>
                  <p className="text-xl font-black text-midnight-navy leading-tight">
                    {location}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
