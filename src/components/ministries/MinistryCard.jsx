import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  blocksToPlainText,
  getLocalizedField,
  truncateText,
} from "./ministryUtils";

export default function MinistryCard({ ministry, lang }) {
  const { t } = useTranslation();
  const title = getLocalizedField(ministry?.title, lang);
  const descriptionBlocks = getLocalizedField(ministry?.description, lang);
  const description = truncateText(blocksToPlainText(descriptionBlocks), 170);
  const meeting = getLocalizedField(ministry?.meetingDayAndTime, lang);
  const location = getLocalizedField(ministry?.location, lang);
  const imageUrl =
    ministry?.heroImageUrl || ministry?.galleryUrls?.[0] || null;

  return (
    <Link
      to={`/ministries/${ministry?.slug}`}
      className="group relative overflow-hidden border border-midnight-navy/10 bg-white transition-all duration-300 hover:bg-off-white"
    >
      {imageUrl ? (
        <div className="relative h-64 w-full overflow-hidden border-b border-midnight-navy/10">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="h-64 w-full bg-midnight-navy flex items-center justify-center border-b border-white/5">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-off-white/20">FGC Ministries</span>
        </div>
      )}
      <div className="p-8 text-left">
        <h3 className="text-2xl md:text-3xl font-black text-midnight-navy leading-none tracking-tight mb-4 group-hover:text-sky-blue transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-midnight-navy/60 text-sm leading-relaxed mb-8">
            {description}
          </p>
        )}
        <div className="pt-6 border-t border-midnight-navy/5 space-y-4">
          {meeting && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-midnight-navy/30 mb-1">
                {t("ministries.meets")}
              </p>
              <p className="text-sm font-bold text-midnight-navy">
                {meeting}
              </p>
            </div>
          )}
          {location && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-midnight-navy/30 mb-1">
                {t("ministries.location")}
              </p>
              <p className="text-sm font-bold text-midnight-navy">
                {location}
              </p>
            </div>
          )}
        </div>
        <div className="mt-8 pt-6 border-t border-midnight-navy/5 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-midnight-navy/40">Read More</span>
          <span className="text-xs font-bold text-midnight-navy/20 group-hover:text-sky-blue group-hover:translate-x-2 transition-all">→</span>
        </div>
      </div>
    </Link>
  );
}
