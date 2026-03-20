import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Registrations() {
  const { t } = useTranslation();

  const options = [
    {
      title: t("registrations.membership_form"),
      description: t("registrations.membership_form_desc"),
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfrqVBgzPGrhk8CQtA6pmO842l8bbADluaKFfn67MNMAu22PA/viewform?usp=publish-editor",
      newTab: true,
    },
    {
      title: t("registrations.home_church"),
      description: t("registrations.home_church_desc"),
      href: "/registrations/home-church",
    },
    {
      title: t("registrations.choose_ministry"),
      description: t("registrations.choose_ministry_desc"),
      href: "/registrations/choose-ministry",
    },
  ];

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-6 sm:px-10 lg:px-16 py-16 pt-32 md:py-24 md:pt-40 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-sky-blue mb-6">
            {t("registrations.label")}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-off-white leading-none tracking-tight">
            {t("registrations.title")}
          </h1>
          {/* <p className="text-off-white/80 text-lg max-w-3xl">
            {t("registrations.description")}
          </p> */}
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
          {options.map((option) => (
            <div
              key={option.href}
              className="border border-midnight-navy/10 bg-white p-8 transition-all duration-300 hover:border-coral-red/40 hover:-translate-y-1"
            >
              <div className="h-0.5 w-8 bg-sky-blue mb-5" />
              <h3 className="text-xl font-black text-midnight-navy mb-3">
                {option.title}
              </h3>
              <p className="text-midnight-navy/70 mb-6 text-sm leading-relaxed">
                {option.description}
              </p>
              <a
                href={option.href} target={option.newTab && "_blank"}
                className="inline-flex items-center justify-center bg-midnight-navy px-5 py-2.5 text-sm font-bold text-off-white transition-colors hover:bg-deep-blue"
              >
                {t("registrations.view_form")}
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
