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
      className="group relative overflow-hidden rounded-3xl border border-midnight-navy/10 bg-off-white/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {imageUrl ? (
        <div className="relative h-44 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/60 via-midnight-navy/10 to-transparent" />
        </div>
      ) : (
        <div className="h-44 w-full bg-linear-to-br from-sky-blue/30 via-off-white to-coral-red/20" />
      )}
      <div className="p-6 text-left">
        <h3 className="text-xl font-bold text-midnight-navy mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-midnight-navy/70 text-sm leading-relaxed">
            {description}
          </p>
        )}
        {(meeting || location) && (
          <div className="mt-4 space-y-1 text-xs text-midnight-navy/70">
            {meeting && (
              <p>
                <span className="font-semibold text-midnight-navy">
                  {t("ministries.meets")}
                </span>{" "}
                {meeting}
              </p>
            )}
            {location && (
              <p>
                <span className="font-semibold text-midnight-navy">
                  {t("ministries.location")}
                </span>{" "}
                {location}
              </p>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
