import React from "react";
import { useTranslation } from "react-i18next";
import MediaSection from "../components/MediaSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPlay } from "react-icons/fa";

export default function Media() {
  const { t } = useTranslation();
  const watchLiveUrl = "https://youtube.com/@bolefullgospelchurch?si=NvUVKChHtdYp5aMT";

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-6 sm:px-10 lg:px-16 py-16 pt-32 md:py-24 md:pt-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-sky-blue mb-6">
              {t("media.label")}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-off-white leading-none tracking-tight">
              {t("media.title")}
            </h1>
          </div>
          <div className="md:mb-2">
            <a
              href={watchLiveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white hover:bg-off-white text-black px-8 py-4 font-bold text-sm tracking-wide transition-colors"
            >
              <FaPlay size={14} className="inline mr-2" />{t("media.watch_live")}
            </a>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <MediaSection limit={null} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
