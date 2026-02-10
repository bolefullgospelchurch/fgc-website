import React from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Give() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const selectedType = searchParams.get("type");

  return (
    <main className="min-h-screen bg-sky-blue/20">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-4 py-16 pt-32 md:py-20 md:pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-bold text-sky-blue/80 mb-4">
            {t("give.label")}
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            {t("give.title")}
          </h1>
          <p className="text-off-white/80 text-lg max-w-3xl mx-auto">
            {t("give.description")}
          </p>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-midnight-navy/80 text-lg leading-relaxed text-center">
          {selectedType ? (
            <p>
              {t("give.selected", { type: selectedType })}
            </p>
          ) : (
            <p>{t("give.prompt")}</p>
          )}
        </div>
      </section>
    </main>
  );
}
