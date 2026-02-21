import React from "react";
import { useTranslation } from "react-i18next";

function MinistryGallery({ images = [], title }) {
  const { t } = useTranslation();
  if (!Array.isArray(images) || images.length === 0) return null;
  const resolvedTitle = title || t("ministries.gallery");

  return (
    <section className="px-4 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-midnight-navy mb-8">
          {resolvedTitle}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((url, idx) => (
            <div
              key={`${url}-${idx}`}
              className="relative overflow-hidden rounded-2xl border border-midnight-navy/10 bg-off-white/95 shadow-sm"
            >
              <img
                src={url}
                alt={`Gallery ${idx + 1}`}
                className="h-56 w-full object-cover"
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
