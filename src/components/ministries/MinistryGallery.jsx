import React from "react";
import { useTranslation } from "react-i18next";

function MinistryGallery({ images = [], title }) {
  const { t } = useTranslation();
  if (!Array.isArray(images) || images.length === 0) return null;
  const resolvedTitle = title || t("ministries.gallery");

  return (
    <section className="px-6 sm:px-10 lg:px-16 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-blue mb-4">
            Moments
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-midnight-navy leading-none tracking-tight">
            {resolvedTitle}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((url, idx) => (
            <div
              key={`${url}-${idx}`}
              className="relative overflow-hidden border border-midnight-navy/10 group bg-white"
            >
              <img
                src={url}
                alt={`Gallery ${idx + 1}`}
                className="h-80 w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MinistryGallery;
export { MinistryGallery };
