import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "react-i18next";

export default function Navbar({ transparent = false, contained = true }) {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { key: "home", label: t("navbar.home"), href: "/" },
    { key: "about", label: t("navbar.about"), href: "/about" },
    { key: "ministries", label: t("navbar.ministries"), href: "/ministries" },
    {
      key: "give",
      label: t("navbar.give"),
      href: "",
      children: [
        {
          key: "give_asrat",
          label: t("navbar.give_asrat"),
          href: `https://docs.google.com/forms/d/e/1FAIpQLSfXbDGWjMwzqMQlANtZhI-HaFMLsSZ0AvvTUyUUjMO1cTnBkw/viewform?usp=header`,
        },
        {
          key: "give_meba",
          label: t("navbar.give_meba"),
          href: `https://docs.google.com/forms/d/e/1FAIpQLSfXbDGWjMwzqMQlANtZhI-HaFMLsSZ0AvvTUyUUjMO1cTnBkw/viewform?usp=header`,
        },
        {
          key: "give_bekurat",
          label: t("navbar.give_bekurat"),
          href: `https://docs.google.com/forms/d/e/1FAIpQLSfXbDGWjMwzqMQlANtZhI-HaFMLsSZ0AvvTUyUUjMO1cTnBkw/viewform?usp=header`,
        },
        {
          key: "give_donate",
          label: t("navbar.give_donate"),
          href: `https://docs.google.com/forms/d/e/1FAIpQLSfXbDGWjMwzqMQlANtZhI-HaFMLsSZ0AvvTUyUUjMO1cTnBkw/viewform?usp=header`,
        },
        {
          key: "give_others",
          label: t("navbar.give_others"),
          href: `https://docs.google.com/forms/d/e/1FAIpQLSfXbDGWjMwzqMQlANtZhI-HaFMLsSZ0AvvTUyUUjMO1cTnBkw/viewform?usp=header`,
        },
      ],
    },
    { key: "events", label: t("navbar.events"), href: "/events" },
    {
      key: "media",
      label: t("navbar.media"),
      href: "/media",
      children: [
        {
          key: "media_teaching",
          label: t("navbar.media_teaching"),
          href: "/media?type=teaching",
        },
        {
          key: "media_sermon",
          label: t("navbar.media_sermon"),
          href: "/media?type=sermon",
        },
        {
          key: "media_podcast",
          label: t("navbar.media_podcast"),
          href: "/media?type=podcast",
        },
        {
          key: "media_testimony",
          label: t("navbar.media_testimony"),
          href: "/media?type=testimony",
        },
        {
          key: "media_worship",
          label: t("navbar.media_worship"),
          href: "/media?type=worship",
        },
        {
          key: "media_gallery",
          label: t("navbar.media_gallery"),
          href: "/media?type=gallery",
        },
      ],
    },
    {
      key: "resources",
      label: t("navbar.resources"),
      href: "/resources",
      children: [
        {
          key: "resources_holy_bible",
          label: t("navbar.holy_bible"),
          href: "https://www.wordproject.org/bibles/am/",
          newTab: true,
        },
        {
          key: "resources_followup",
          label: t("navbar.resources_followup"),
          href: "/resources",
        },
        {
          key: "resources_discipleship",
          label: t("navbar.resources_discipleship"),
          href: "/resources",
        },
        {
          key: "resources_ministry",
          label: t("navbar.resources_ministry"),
          href: "/resources",
        },
        {
          key: "resources_marriage",
          label: t("navbar.resources_marriage"),
          href: "/resources",
        },
        {
          key: "resources_pentecostalism",
          label: t("navbar.resources_pentecostalism"),
          href: "/resources",
        },
      ],
    },
    {
      key: "registrations",
      label: t("navbar.registrations"),
      href: "",
      children: [
        {
          key: "reg_home_church",
          label: t("navbar.reg_home_church"),
          href: "/registrations/home-church",
        },
        {
          key: "reg_choose_ministry",
          label: t("navbar.reg_choose_ministry"),
          href: "/registrations/choose-ministry",
        },
        {
          key: "reg_membership",
          label: t("navbar.reg_membership"),
          href: "https://docs.google.com/forms/d/e/1FAIpQLSfgZ1WEG_FzLMFCmH7eVrIGoCWoZvRQNEahLvgXAsl-zq014A/viewform?usp=publish-editor",
          newTab: true,
        },
      ],
    },
    { key: "contact", label: t("navbar.contact"), href: "/contact" },
  ];

  const languageOptions = [
    { name: t("navbar.amharic"), value: "am" },
    { name: t("navbar.english"), value: "en" },
  ];

  const bgColor = transparent
    ? "bg-transparent border-off-white/15"
    : "bg-off-white/95 backdrop-blur-md border-midnight-navy/10";
  const textColor = transparent ? "text-off-white" : "text-midnight-navy";
  const subTextColor = transparent
    ? "text-off-white/70"
    : "text-midnight-navy/60";
  const linkColor = transparent
    ? "text-off-white/90 hover:text-off-white"
    : "text-midnight-navy/80 hover:text-deep-blue";
  const mobileMenuBg = transparent
    ? "bg-midnight-navy/95 border-off-white/10"
    : "bg-off-white border-midnight-navy/10";
  const mobileLinkColor = transparent
    ? "text-off-white/80 hover:text-off-white"
    : "text-midnight-navy hover:text-deep-blue";
  const dropdownBg = transparent
    ? "bg-midnight-navy/95 border-off-white/10"
    : "bg-off-white border-midnight-navy/10";
  const dropdownText = transparent
    ? "text-off-white/80 hover:text-off-white"
    : "text-midnight-navy hover:text-deep-blue";

  const toggleSubmenu = (key) => {
    setOpenSubmenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isExternalLink = (href = "") => /^https?:\/\//i.test(href);

  const renderNavLink = ({ href, label, newTab, className, onClick }) => {
    if (newTab || isExternalLink(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={className}
          onClick={onClick}
        >
          {label}
        </a>
      );
    }

    return (
      <Link to={href} className={className} onClick={onClick}>
        {label}
      </Link>
    );
  };

  return (
    <nav
      className={`absolute w-full z-50 ${bgColor} ${contained ? "border-b" : null} transition-all duration-300`}
    >
      <div
        className={`${contained ? "max-w-7xl" : null} mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center min-w-0">
            <div className="shrink-0">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-12 w-auto rounded-full shadow-sm bg-white"
                />
                <div className="flex flex-col gap-0.5 max-w-[280px]">
                  <span
                    className={`font-bold tracking-wide leading-tight text-[11px] ${subTextColor}`}
                  >
                    በኢትዮጵያ ሙሉ ወንጌል
                    <br /> አማኞች ቤተ ክርስቲያን ቦሌ አጥቢያ
                  </span>
                  <span
                    className={`tracking-tighter leading-tight text-[10px] ${textColor} hidden xl:block`}
                  >
                    Ethiopian Full Gospel Believers Church Bole Local church
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden md:block flex-1">
            <div className="ml-6 flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.key} className="relative group">
                    <span className="inline-flex items-center gap-1">
                      {renderNavLink({
                        href: link.href,
                        label: link.label,
                        newTab: link.newTab,
                        className: `${linkColor} px-2.5 py-2 rounded-md text-[13px] font-bold transition-colors inline-flex items-center gap-1`,
                      })}
                      <span className={`${linkColor} text-xs`}>▾</span>
                    </span>
                    <span
                      className="absolute left-0 right-0 top-full h-2"
                      aria-hidden="true"
                    />
                    <div
                      className={`absolute left-0 mt-2 min-w-[220px] rounded-lg border shadow-lg opacity-0 translate-y-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 ${dropdownBg}`}
                    >
                      <div className="py-2">
                        {link.children.map((child) => (
                          <React.Fragment key={child.key}>
                            {renderNavLink({
                              href: child.href,
                              label: child.label,
                              newTab: child.newTab,
                              className: `block px-4 py-2 text-sm font-semibold transition-colors ${dropdownText}`,
                            })}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <React.Fragment key={link.key}>
                    {renderNavLink({
                      href: link.href,
                      label: link.label,
                      newTab: link.newTab,
                      className: `${linkColor} px-2.5 py-2 rounded-md text-[13px] font-bold transition-colors`,
                    })}
                  </React.Fragment>
                ),
              )}

              <div className="relative group">
                <button
                  type="button"
                  className={`${linkColor} px-2.5 py-2 rounded-md text-[13px] font-bold transition-colors inline-flex items-center gap-1`}
                >
                  {t("navbar.language")}
                  <span className="text-xs">▾</span>
                </button>
                <span
                  className="absolute left-0 right-0 top-full h-2"
                  aria-hidden="true"
                />
                <div
                  className={`absolute right-0 mt-2 min-w-[180px] rounded-lg border shadow-lg opacity-0 translate-y-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 ${dropdownBg}`}
                >
                  <div className="py-2">
                    {languageOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setLanguage(option.value)}
                        className={`block w-full text-left px-4 py-2 text-sm font-semibold transition-colors ${dropdownText} ${
                          language === option.value
                            ? "opacity-100"
                            : "opacity-80"
                        }`}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${transparent ? "text-off-white hover:bg-off-white/10" : "text-midnight-navy hover:text-deep-blue hover:bg-off-white/80"}`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">{t("navbar.open_main_menu")}</span>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div
            className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t shadow-xl ${mobileMenuBg}`}
          >
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.key} className="px-1">
                  <div className="flex items-center justify-between">
                    {renderNavLink({
                      href: link.href,
                      label: link.label,
                      newTab: link.newTab,
                      onClick: () => setIsOpen(false),
                      className: `${mobileLinkColor} block px-3 py-2 rounded-md text-base font-medium`,
                    })}
                    <button
                      type="button"
                      onClick={() => toggleSubmenu(link.key)}
                      className={`${mobileLinkColor} px-3 py-2 text-base font-medium`}
                      aria-label={t("navbar.toggle_menu", { item: link.label })}
                    >
                      {openSubmenus[link.key] ? "▴" : "▾"}
                    </button>
                  </div>
                  {openSubmenus[link.key] && (
                    <div className="ml-4 space-y-1 pb-2">
                      {link.children.map((child) => (
                        <React.Fragment key={child.key}>
                          {renderNavLink({
                            href: child.href,
                            label: child.label,
                            newTab: child.newTab,
                            onClick: () => setIsOpen(false),
                            className: `${mobileLinkColor} block px-3 py-2 rounded-md text-sm font-semibold`,
                          })}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <React.Fragment key={link.key}>
                  {renderNavLink({
                    href: link.href,
                    label: link.label,
                    newTab: link.newTab,
                    onClick: () => setIsOpen(false),
                    className: `${mobileLinkColor} block px-3 py-2 rounded-md text-base font-medium`,
                  })}
                </React.Fragment>
              ),
            )}
            <div className="px-1">
              <div className="flex items-center justify-between">
                <span
                  className={`${mobileLinkColor} block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {t("navbar.language")}
                </span>
                <button
                  type="button"
                  onClick={() => toggleSubmenu("language")}
                  className={`${mobileLinkColor} px-3 py-2 text-base font-medium`}
                  aria-label={t("navbar.toggle_menu", {
                    item: t("navbar.language"),
                  })}
                >
                  {openSubmenus.language ? "▴" : "▾"}
                </button>
              </div>
              {openSubmenus.language && (
                <div className="ml-4 space-y-1 pb-2">
                  {languageOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setLanguage(option.value);
                        setIsOpen(false);
                      }}
                      className={`${mobileLinkColor} block w-full text-left px-3 py-2 rounded-md text-sm font-semibold`}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
