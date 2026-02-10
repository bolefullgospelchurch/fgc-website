import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import GoogleFormEmbed from "../components/GoogleFormEmbed";

export default function RegistrationChooseMinistry() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-sky-blue/20">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-4 py-16 pt-32 md:py-20 md:pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-bold text-sky-blue/80 mb-4">
            {t("registrations.label")}
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            {t("registrations.choose_ministry")}
          </h1>
          <p className="text-off-white/80 text-lg max-w-3xl mx-auto">
            {t("registrations.page_description")}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-16 ">
        <GoogleFormEmbed
          src="https://docs.google.com/forms/d/e/1FAIpQLSdYfk4LLBiOLzoXbIeBcF7u7uOQiBx6bDaCN3e-sVEzE_W1aw/viewform?embedded=true"
          height={900}
        />
      </div>
    </main>
  );
}
