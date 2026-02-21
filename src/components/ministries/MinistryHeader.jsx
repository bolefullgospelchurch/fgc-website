import React from "react";
import { getLocalizedField } from "./ministryUtils";

export default function MinistryHeader({ ministry, lang }) {
  const title = getLocalizedField(ministry?.title, lang);
  const meeting = getLocalizedField(ministry?.meetingDayAndTime, lang);
  const location = getLocalizedField(ministry?.location, lang);
  const heroImage = ministry?.heroImageUrl || ministry?.galleryUrls?.[0] || "";

  return (
    <section className="relative px-4 py-16 pt-32 md:py-24 md:pt-36 text-off-white bg-midnight-navy">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={
          heroImage
            ? { backgroundImage: `url(${heroImage})` }
            : undefined
        }
      />
      <div className="absolute inset-0 bg-midnight-navy/70" />
      <div className="relative max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4">{title}</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-off-white/90">
          {meeting && (
            <span className="rounded-full border border-off-white/40 px-4 py-2">
              {meeting}
            </span>
          )}
          {location && (
            <span className="rounded-full border border-off-white/40 px-4 py-2">
              {location}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
