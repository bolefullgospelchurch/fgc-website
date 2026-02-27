import React from "react";
import { useTranslation } from "react-i18next";
import { getLocalizedField } from "./ministryUtils";

const placeholderAvatar =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'><rect width='400' height='400' fill='%23e2e8f0'/><circle cx='200' cy='150' r='70' fill='%23cbd5e1'/><path d='M80 340c20-70 100-110 120-110s100 40 120 110' fill='%23cbd5e1'/></svg>";

export default function MinistryLeaders({ leaders, lang }) {
  const { t } = useTranslation();
  if (!Array.isArray(leaders) || leaders.length === 0) return null;

  return (
    <section className="px-6 sm:px-10 lg:px-16 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-blue mb-4">
            People
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-midnight-navy leading-none tracking-tight">
            {t("ministries.leadersTitle")}
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, idx) => {
            const name = getLocalizedField(leader?.name, lang);
            const role = getLocalizedField(leader?.role, lang);
            const photoUrl = leader?.photoUrl || placeholderAvatar;

            return (
              <div
                key={`${name}-${idx}`}
                className="group flex flex-col border border-midnight-navy/10 bg-white transition-all duration-300 hover:border-sky-blue/50"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-midnight-navy/5">
                  <img
                    src={photoUrl}
                    alt={name}
                    className="h-full w-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-black text-midnight-navy group-hover:text-sky-blue transition-colors">
                    {name}
                  </h3>
                  {role && (
                    <p className="text-midnight-navy/60 text-sm mt-2">{role}</p>
                  )}
                  <div className="mx-auto mt-6 h-[2px] w-8 bg-coral-red/60 group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
