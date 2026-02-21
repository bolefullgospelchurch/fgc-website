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
    <section className="px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[2fr_1fr]">
        {paragraphs.length > 0 && (
          <div className="space-y-4 text-midnight-navy/80 text-base leading-relaxed">
            {paragraphs.map((text, idx) => (
              <p key={`ministry-desc-${idx}`}>{text}</p>
            ))}
          </div>
        )}
        {(meeting || location) && (
          <div className="rounded-3xl border border-midnight-navy/10 bg-off-white/95 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-midnight-navy mb-4">
              {t("ministries.meetingInfoTitle")}
            </h3>
            <div className="space-y-3 text-sm text-midnight-navy/70">
              {meeting && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-midnight-navy/50">
                    {t("ministries.meetingDayAndTime")}
                  </p>
                  <p className="font-semibold text-midnight-navy mt-1">
                    {meeting}
                  </p>
                </div>
              )}
              {location && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-midnight-navy/50">
                    {t("ministries.location")}
                  </p>
                  <p className="font-semibold text-midnight-navy mt-1">
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
