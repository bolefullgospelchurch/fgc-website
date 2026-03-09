import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import GoogleFormEmbed from "../components/GoogleFormEmbed";
import Footer from "../components/Footer";

export default function RegistrationMembershipForm() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-6 sm:px-10 lg:px-16 py-16 pt-32 md:py-24 md:pt-40 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-sky-blue mb-6">
            {t("registrations.label")}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-off-white leading-none tracking-tight">
            {t("registrations.membership_form")}
          </h1>
          {/* <p className="text-off-white/80 text-lg max-w-3xl">
            {t("registrations.page_description")}
          </p> */}
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto border border-midnight-navy/10 bg-white p-3 md:p-6">
          <GoogleFormEmbed
            src="https://docs.google.com/forms/d/e/1FAIpQLSfD6ROnKftaRSWQvzmFH1Asc1xpWOMXjIkEyCjUgQWwiWnd5g/viewform?embedded=true"
            height={900}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
