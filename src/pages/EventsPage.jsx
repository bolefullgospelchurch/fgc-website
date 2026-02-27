import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventsSection from "../components/EventsSection";

export default function EventsPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar transparent/>
      <section className="bg-midnight-navy text-off-white px-6 sm:px-10 lg:px-16 py-16 pt-32 md:py-24 md:pt-40">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-sky-blue mb-6">
            {t("happenings.label")}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-off-white leading-none tracking-tight">
            {t("happenings.title")}
          </h1>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <EventsSection limit={null} onlyFeatured={false} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
