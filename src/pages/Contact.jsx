import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import churchImage from "../assets/churchBldg.jpeg";
import {
  CONTACT_ITEMS,
  CONTACT_MAP_EMBED_URL,
  getItemEntries,
} from "../data/contactInfo";
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
  const contactItems = CONTACT_ITEMS;
  const mapEmbedUrl = CONTACT_MAP_EMBED_URL;
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
  };

  const coreIds = ["email", "telephones", "posta", "location"];
  const socialIds = ["telegram", "instagram", "tiktok", "facebook", "youtube"];

  const coreItems = contactItems.filter(
    (item) =>
      coreIds.includes(item.id?.toLowerCase()) && getItemEntries(item).length > 0,
  );

  const socialItems = contactItems.filter(
    (item) =>
      socialIds.includes(item.id?.toLowerCase()) && getItemEntries(item).length > 0,
  );

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-6 sm:px-10 lg:px-16 py-16 pt-32 md:py-24 md:pt-40">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-sky-blue mb-6">
            {t("contact.label")}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-off-white leading-none tracking-tight">
            {t("contact.title")}
          </h1>
        </div>
      </section>
      <section className="px-6 sm:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            {/* Left Column: Core Contact Info */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-midnight-navy/30 mb-10 border-b border-midnight-navy/10 pb-4">
                {t("contact.coreTitle")}
              </h3>
              <div className="space-y-12">
                {coreItems.map((item) => {
                  const iconKey = String(item.id || "").toLowerCase();
                  const Icon = iconMap[iconKey] || FaMapMarkerAlt;
                  return (
                    <div key={item.id} className="flex gap-6 group">
                      <div className="h-12 w-12 shrink-0 border border-midnight-navy/10 flex items-center justify-center text-midnight-navy/40 group-hover:bg-midnight-navy group-hover:text-off-white transition-colors">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-midnight-navy/40 mb-1">
                          {t(`contact.itemLabels.${item.id}`)}
                        </p>
                        <div className="space-y-1.5">
                          {getItemEntries(item).map((entry, index) =>
                            entry.href ? (
                              <a
                                key={`${item.id}-${index}`}
                                href={entry.href}
                                className="block text-xl md:text-2xl font-black text-midnight-navy hover:text-sky-blue transition-colors break-all leading-tight"
                                target={entry.href.startsWith("http") ? "_blank" : undefined}
                                rel={entry.href.startsWith("http") ? "noreferrer" : undefined}
                              >
                                {entry.value}
                              </a>
                            ) : (
                              <p
                                key={`${item.id}-${index}`}
                                className="text-xl md:text-2xl font-black text-midnight-navy leading-tight"
                              >
                                {entry.value}
                              </p>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Social Media */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-midnight-navy/30 mb-10 border-b border-midnight-navy/10 pb-4">
                {t("contact.socialTitle")}
              </h3>
              <div className="grid grid-cols-1 gap-8">
                {socialItems.map((item) => {
                  const iconKey = String(item.id || "").toLowerCase();
                  const Icon = iconMap[iconKey] || FaMapMarkerAlt;
                  const firstEntry = getItemEntries(item)[0];
                  if (!firstEntry?.href) return null;
                  return (
                    <a
                      key={item.id}
                      href={firstEntry.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between border-b border-midnight-navy/5 pb-6 hover:border-midnight-navy/20 transition-colors"
                    >
                      <div className="flex items-center gap-6">
                        <div className="text-midnight-navy/20 group-hover:text-sky-blue transition-colors">
                          <Icon size={24} />
                        </div>
                        <span className="text-lg font-black text-midnight-navy uppercase tracking-tight">
                          {t(`contact.itemLabels.${item.id}`)}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-midnight-navy/20 group-hover:text-midnight-navy group-hover:translate-x-2 transition-all uppercase tracking-widest">
                        {t("contact.follow")} →
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 sm:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-midnight-navy/10 p-0">
            <div className="border-b border-midnight-navy/10">
              <div className="p-10 md:p-10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-midnight-navy/40 mb-4">
                  {t("contact.map.title")}
                </p>
                <h2 className="text-xl md:text-3xl font-black text-midnight-navy leading-tight">
                  {t("contact.map.description")}
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={churchImage}
                  alt={t("contact.map.imageAlt")}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-video lg:aspect-auto bg-slate-100 border-t lg:border-t-0 lg:border-l border-midnight-navy/10">
                {mapEmbedUrl ? (
                  <iframe
                    title={t("contact.map.iframeTitle")}
                    src={mapEmbedUrl}
                    className="h-full w-full min-h-[400px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                ) : (
                  <div className="h-full w-full min-h-[400px] flex items-center justify-center text-midnight-navy/60 text-sm">
                    {t("contact.map.placeholder")}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
