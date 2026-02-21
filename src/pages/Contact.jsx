import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import churchImage from "../assets/churchBldg.jpeg";
import {
  FaEnvelope,
  FaTelegramPlane,
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaYoutube,
  FaPhoneAlt,
  FaBoxOpen,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const { t } = useTranslation();
  const contactItems = t("contact.items", { returnObjects: true });
  const mapEmbedUrl = t("contact.map.embedUrl");
  const iconMap = {
    email: FaEnvelope,
    telegram: FaTelegramPlane,
    instagram: FaInstagram,
    tiktok: FaTiktok,
    facebook: FaFacebookF,
    youtube: FaYoutube,
    telephones: FaPhoneAlt,
    posta: FaBoxOpen,
    location: FaMapMarkerAlt,
  };
  const iconStyleMap = {
    telegram: "bg-[#229ED9] text-white",
    instagram:
      "text-white bg-linear-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]",
    tiktok: "bg-[#000000] text-white",
    facebook: "bg-[#1877F2] text-white",
    youtube: "bg-[#FF0000] text-white",
  };

  return (
    <main className="min-h-screen bg-sky-blue/20">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-4 py-16 pt-32 md:py-20 md:pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-bold text-sky-blue/80 mb-4">
            {t("contact.label")}
          </p>
          <h1 className="text-4xl md:text-5xl font-black">
            {t("contact.title")}
          </h1>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(contactItems) &&
              contactItems
                .filter((item) => Boolean(item?.value))
                .map((item) => {
                  const iconKey = String(item.id || "")
                    .toLowerCase()
                    .replace(/\s+/g, "");
                  const Icon = iconMap[iconKey] || FaMapMarkerAlt;
                  const iconStyle =
                    iconStyleMap[iconKey] ||
                    "bg-linear-to-br from-sky-blue/60 to-deep-blue/60 text-off-white";
                  const content = (
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-left">
                        <p className="text-xs font-bold uppercase tracking-widest text-midnight-navy/50">
                          {item.label}
                        </p>
                        <p className="mt-1 text-lg font-semibold text-midnight-navy">
                          {item.value}
                        </p>
                      </div>
                      <div
                        className={`h-12 w-12 shrink-0 rounded-2xl flex items-center justify-center text-xl ${iconStyle}`}
                      >
                        <Icon aria-hidden="true" />
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.id || item.label}
                      href={item.href}
                      className="group relative overflow-hidden rounded-3xl border border-midnight-navy/10 bg-off-white/95 p-6 text-midnight-navy shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-br from-sky-blue/10 via-transparent to-coral-red/10" />
                      <div className="relative">{content}</div>
                    </a>
                  ) : (
                    <div
                      key={item.id || item.label}
                      className="relative overflow-hidden rounded-3xl border border-midnight-navy/10 bg-off-white/95 p-6 text-midnight-navy shadow-sm"
                    >
                      <div className="absolute inset-0 opacity-0 bg-linear-to-br from-sky-blue/10 via-transparent to-coral-red/10" />
                      <div className="relative">{content}</div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
      <section className="px-4 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-off-white rounded-3xl border border-midnight-navy/10 p-6 md:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-midnight-navy">
                  {t("contact.map.title")}
                </h2>
                <p className="text-midnight-navy/70 text-sm mt-2">
                  {t("contact.map.description")}
                </p>
              </div>
              <div className="h-12 w-12 rounded-xl bg-linear-to-br from-sky-blue/60 to-deep-blue/60 flex items-center justify-center text-off-white text-xl font-black">
                <FaMapMarkerAlt />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-2xl border border-midnight-navy/10">
                <img
                  src={churchImage}
                  alt={t("contact.map.imageAlt")}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-midnight-navy/10 bg-slate-100">
                {mapEmbedUrl ? (
                  <iframe
                    title={t("contact.map.iframeTitle")}
                    src={mapEmbedUrl}
                    className="h-80 w-full md:h-100"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                ) : (
                  <div className="h-80 w-full md:h-full flex items-center justify-center text-midnight-navy/60 text-sm">
                    {t("contact.map.placeholder")}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
