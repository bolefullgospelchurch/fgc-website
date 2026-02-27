import React from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Give() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const selectedType = searchParams.get("type");

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-6 sm:px-10 lg:px-16 py-16 pt-32 md:py-24 md:pt-40">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-sky-blue mb-6">
            {t("give.label")}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-off-white leading-none tracking-tight mb-10">
            {t("give.title")}
          </h1>
          <p className="text-off-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
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
      <Footer />
    </main>
  );
}
