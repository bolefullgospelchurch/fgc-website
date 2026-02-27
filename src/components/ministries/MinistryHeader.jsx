import React from "react";
import { getLocalizedField } from "./ministryUtils";

export default function MinistryHeader({ ministry, lang }) {
  const title = getLocalizedField(ministry?.title, lang);
  const meeting = getLocalizedField(ministry?.meetingDayAndTime, lang);
  const location = getLocalizedField(ministry?.location, lang);
  const heroImage = ministry?.heroImageUrl || ministry?.galleryUrls?.[0] || "";

  return (
    <section className="bg-midnight-navy text-off-white px-6 sm:px-10 lg:px-16 py-16 pt-32 md:py-24 md:pt-40 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div className="max-w-4xl">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-sky-blue mb-6">
            Ministry Detail
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-off-white leading-none tracking-tight">
            {title}
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-start md:items-end gap-10 md:mb-2">
          {meeting && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-off-white/30 mb-2">
                Meets
              </p>
              <p className="text-sm font-bold text-off-white">
                {meeting}
              </p>
            </div>
          )}
          {location && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-off-white/30 mb-2">
                Location
              </p>
              <p className="text-sm font-bold text-off-white">
                {location}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
