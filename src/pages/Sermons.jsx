import React from "react";
import { useTranslation } from "react-i18next";
import MediaSection from "../components/MediaSection";
import Navbar from "../components/Navbar";

export default function Sermons() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-sky-blue/20">
      <Navbar transparent />
      <section className="bg-linear-to-r from-deep-blue to-midnight-navy text-off-white px-4 py-16 pt-32 md:py-20 md:pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-bold text-sky-blue/80 mb-4">
            {t("sermons.label")}
          </p>
          <h1 className="text-4xl md:text-5xl font-black">
            {t("sermons.title")}
          </h1>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <MediaSection limit={null} category="sermon" />
        </div>
      </section>
    </main>
  );
}
