import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

export default function Resources() {
  const { t } = useTranslation();
  const partnerChurches = [
    {
      name: "Placeholder Church One",
      description:
        "A short description about this church or institution goes here. Keep it brief and welcoming.",
      url: "https://example.com",
    },
    {
      name: "Placeholder Church Two",
      description:
        "A short description about this church or institution goes here. Keep it brief and welcoming.",
      url: "https://example.com",
    },
    {
      name: "Placeholder Church Three",
      description:
        "A short description about this church or institution goes here. Keep it brief and welcoming.",
      url: "https://example.com",
    },
  ];

  return (
    <main className="min-h-screen bg-sky-blue/20">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-4 py-16 pt-32 md:py-20 md:pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-bold text-sky-blue/80 mb-4">
            {t("resources.label")}
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            {t("resources.title")}
          </h1>
          {/* <p className="text-off-white/80 text-lg max-w-3xl mx-auto">
            {t("resources.description")}
          </p> */}
          <div className="mt-8">
            <a
              href="https://www.wordproject.org/bibles/am/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-coral-red hover:bg-coral-red/90 text-off-white px-8 py-3 rounded-lg font-bold transition-colors shadow-sm"
            >
              {t("navbar.holy_bible")}
            </a>
          </div>
        </div>
      </section>
      <section className="px-4 py-16">
        {/* <div className="max-w-5xl mx-auto text-center text-midnight-navy/80 text-lg leading-relaxed">
          {t("resources.body")}
        </div> */}

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-midnight-navy text-center mb-4">
            Connect With Other Churches
          </h2>
          <p className="text-center text-midnight-navy/70 mb-10 max-w-2xl mx-auto">
            Explore partner churches and institutions we are connected with.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerChurches.map((church) => (
              <div
                key={church.name}
                className="bg-off-white rounded-xl border border-midnight-navy/10 p-6 shadow-sm flex flex-col"
              >
                <h3 className="text-xl font-black text-midnight-navy mb-2">
                  {church.name}
                </h3>
                <p className="text-midnight-navy/70 text-sm mb-6">
                  {church.description}
                </p>
                <a
                  href={church.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center justify-center bg-deep-blue hover:bg-deep-blue/90 text-off-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors"
                >
                  Visit Page
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
