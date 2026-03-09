import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import {
  getContactItem,
  getItemEntries,
} from "../data/contactInfo";
import {
  FaFacebook,
  FaTelegram,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const email = getContactItem("email");
  const telephone = getContactItem("telephones");
  const location = getContactItem("location");
  const emailEntries = getItemEntries(email);
  const telephoneEntries = getItemEntries(telephone);
  const locationEntries = getItemEntries(location);

  const socialLinks = [
    {
      id: "facebook",
      icon: <FaFacebook />,
      href: getItemEntries(getContactItem("facebook"))[0]?.href,
    },
    {
      id: "telegram",
      icon: <FaTelegram />,
      href: getItemEntries(getContactItem("telegram"))[0]?.href,
    },
    {
      id: "instagram",
      icon: <FaInstagram />,
      href: getItemEntries(getContactItem("instagram"))[0]?.href,
    },
    {
      id: "tiktok",
      icon: <FaTiktok />,
      href: getItemEntries(getContactItem("tiktok"))[0]?.href,
    },
    {
      id: "youtube",
      icon: <FaYoutube />,
      href: getItemEntries(getContactItem("youtube"))[0]?.href,
    },
  ].filter((link) => link.href);

  const quickLinks = [
    { label: t("navbar.home"), href: "/" },
    { label: t("navbar.about"), href: "/about" },
    { label: t("navbar.ministries"), href: "/ministries" },
    { label: t("navbar.events"), href: "/events" },
    { label: t("navbar.media"), href: "/media" },
    { label: t("navbar.contact"), href: "/contact" },
    { label: t("navbar.give"), href: "/give" },
  ];

  return (
    <footer className="bg-[#050e1e] text-off-white px-6 sm:px-10 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-off-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="flex flex-col gap-0.5 max-w-[320px]">
                <span className="font-bold tracking-wide leading-tight text-sm text-off-white/85">
                  በኢትዮጵያ ሙሉ ወንጌል
                  <br /> አማኞች ቤተ ክርስቲያን ቦሌ አጥቢያ
                </span>
                <span className="tracking-tighter text-xs text-off-white/60">
                  Ethiopian Full Gospel Believers Church Bole Local church
                </span>
              </div>
            </Link>
            <p className="text-off-white/60 text-base leading-relaxed max-w-md font-light mb-8">
              {t("mission.description")}
            </p>
            {/* Social Links */}
            <div className="flex gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-off-white/40 hover:text-sky-blue text-xl transition-all hover:-translate-y-1"
                  aria-label={link.id}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-off-white/40 mb-6">
              {t("footer.find_us")}
            </h3>
            <div className="space-y-6">
              {locationEntries.length > 0 && (
                <div className="flex gap-4">
                  <FaMapMarkerAlt className="text-sky-blue shrink-0 mt-1" />
                  <div className="space-y-1">
                    {locationEntries.map((entry, index) => (
                      <p
                        key={`location-${index}`}
                        className="text-off-white/70 text-sm leading-relaxed"
                      >
                        {entry.value}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              {telephoneEntries.length > 0 && (
                <div className="flex gap-4">
                  <FaPhoneAlt className="text-sky-blue shrink-0 mt-1" />
                  <div className="space-y-1">
                    {telephoneEntries.map((entry, index) => (
                      <p
                        key={`phone-${index}`}
                        className="text-off-white/70 text-sm"
                      >
                        {entry.value}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              {emailEntries.length > 0 && (
                <div className="flex gap-4">
                  <FaEnvelope className="text-sky-blue shrink-0 mt-1" />
                  <div className="space-y-1">
                    {emailEntries.map((entry, index) => (
                      <p
                        key={`email-${index}`}
                        className="text-off-white/70 text-sm break-all"
                      >
                        {entry.value}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-[11px] uppercase tracking-widest text-off-white/40 hover:text-white transition-colors font-bold"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-[10px] text-off-white/20 tracking-widest uppercase">
            {t("footer.rights", { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}
