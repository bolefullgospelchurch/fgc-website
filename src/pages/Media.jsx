import React from "react";
import { useTranslation } from "react-i18next";
import MediaSection from "../components/MediaSection";
import Navbar from "../components/Navbar";
import { FaPlay } from "react-icons/fa";

export default function Media() {
  const { t } = useTranslation();
  const watchLiveUrl = "https://www.youtube.com/@yourchannel";

  return (
    <main className="min-h-screen bg-sky-blue/20">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-4 py-16 pt-32 md:py-20 md:pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-bold text-sky-blue/80 mb-4">
            {t("media.label")}
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            {t("media.title")}
          </h1>
          {/* <p className="text-off-white/80 text-lg max-w-3xl mx-auto">
            {t("media.description")}
          </p> */}
          <div className="mt-8">
            <a
              href={watchLiveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-coral-red/90 hover:bg-coral-red/80 text-off-white px-8 py-3 rounded-lg font-bold transition-colors shadow-sm"
            >
              <FaPlay size={14} />{t("media.watch_live")}
            </a>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <MediaSection limit={null} />
        </div>
      </section>
    </main>
  );
}
