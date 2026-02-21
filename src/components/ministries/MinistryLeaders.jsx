import React from "react";
import { useTranslation } from "react-i18next";
import { getLocalizedField } from "./ministryUtils";

const placeholderAvatar =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'><rect width='400' height='400' fill='%23e2e8f0'/><circle cx='200' cy='150' r='70' fill='%23cbd5e1'/><path d='M80 340c20-70 100-110 120-110s100 40 120 110' fill='%23cbd5e1'/></svg>";

export default function MinistryLeaders({ leaders, lang }) {
  const { t } = useTranslation();
  if (!Array.isArray(leaders) || leaders.length === 0) return null;

  return (
    <section className="px-4 pb-12 md:pb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-midnight-navy mb-8">
          {t("ministries.leadersTitle")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, idx) => {
            const name = getLocalizedField(leader?.name, lang);
            const role = getLocalizedField(leader?.role, lang);
            const photoUrl = leader?.photoUrl || placeholderAvatar;

            return (
              <div
                key={`${name}-${idx}`}
                className="group relative overflow-hidden rounded-2xl border border-midnight-navy/10 bg-off-white/95 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative mx-auto mb-4 h-36 w-36 rounded-full bg-linear-to-br from-sky-blue/60 via-off-white to-coral-red/40 p-1">
                  <div className="h-full w-full overflow-hidden rounded-full bg-off-white">
                    <img
                      src={photoUrl}
                      alt={name}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-black text-midnight-navy">
                  {name}
                </h3>
                {role && (
                  <p className="text-midnight-navy/60 text-sm">{role}</p>
                )}
                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-coral-red/70" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
