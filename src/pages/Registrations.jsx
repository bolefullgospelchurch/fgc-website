import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Registrations() {
  const { t } = useTranslation();

  const options = [
    {
      title: t("registrations.home_church"),
      description: t("registrations.home_church_desc"),
      href: "/registrations/home-church",
    },
    {
      title: t("registrations.membership_form"),
      description: t("registrations.membership_form_desc"),
      href: "/registrations/membership-form",
    },
    {
      title: t("registrations.choose_ministry"),
      description: t("registrations.choose_ministry_desc"),
      href: "/registrations/choose-ministry",
    },
  ];

  return (
    <main className="min-h-screen bg-sky-blue/20">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-4 py-16 pt-32 md:py-20 md:pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-bold text-sky-blue/80 mb-4">
            {t("registrations.label")}
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            {t("registrations.title")}
          </h1>
          <p className="text-off-white/80 text-lg max-w-3xl mx-auto">
            {t("registrations.description")}
          </p>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
          {options.map((option) => (
            <div
              key={option.href}
              className="rounded-2xl border border-midnight-navy/10 bg-off-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-black text-midnight-navy mb-3">
                {option.title}
              </h3>
              <p className="text-midnight-navy/70 mb-6 text-sm leading-relaxed">
                {option.description}
              </p>
              <Link
                to={option.href}
                className="inline-flex items-center justify-center rounded-full bg-deep-blue px-4 py-2 text-sm font-bold text-off-white transition-colors hover:bg-deep-blue/90"
              >
                {t("registrations.view_form")}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
