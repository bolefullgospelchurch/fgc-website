import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { sanityClient } from "../sanity";
import { useLanguage } from "../context/LanguageContext";
import EventsSection from "../components/EventsSection";
import stage from "../assets/churchstage.jpg";
import logo from "../assets/logo.png";
import choir from "../assets/ministries/choir.jpeg";
import placeholderBg from "../assets/wetatoch.jpeg";
import ministriesBg from "../assets/bible.jpg";
import MediaSection from "../components/MediaSection";
import Footer from "../components/Footer";

import churchBldg from "../assets/churchBldg.jpeg";
import wetat from "../assets/wetat.jpg";
import eventsBg from "../assets/events.jpg"

import gubae1 from "../assets/gubae1.jpeg";
import gubae2 from "../assets/gubae2.jpeg";
import gubae3 from "../assets/gubae3.jpeg";
import gubae4 from "../assets/gubae4.jpeg";


export default function Home() {
  const { t } = useTranslation();
  const { language: lang } = useLanguage();
  const dayMap = {
    sunday: { en: "Sunday", am: "እሁድ" },
    monday: { en: "Monday", am: "ሰኞ" },
    tuesday: { en: "Tuesday", am: "ማክሰኞ" },
    wednesday: { en: "Wednesday", am: "ረቡዕ" },
    thursday: { en: "Thursday", am: "ሐሙስ" },
    friday: { en: "Friday", am: "አርብ" },
    saturday: { en: "Saturday", am: "ቅዳሜ" },
  };
  const dayOrder = {
    monday: 0,
    tuesday: 1,
    wednesday: 2,
    thursday: 3,
    friday: 4,
    saturday: 5,
    sunday: 6,
  };
  const moreSectionRef = useRef(null);
  const moreBgRef = useRef(null);
  const [weeklyPrograms, setWeeklyPrograms] = useState([]);
  const [isWeeklyLoading, setIsWeeklyLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [stage, gubae1, churchBldg, gubae2, gubae3, gubae4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const normalizeDay = (day) => String(day || "").toLowerCase();
  const getProgramDayIndex = (schedule = []) => {
    if (!schedule.length) return 99;
    return Math.min(
      ...schedule.map((slot) => dayOrder[normalizeDay(slot.day)] ?? 99),
    );
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const handleScroll = () => {
      if (!moreSectionRef.current || !moreBgRef.current) return;
      const rect = moreSectionRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const sectionTop = scrollY + rect.top;
      const offset = (scrollY - sectionTop) * 0.15;
      moreBgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsWeeklyLoading(true);
    sanityClient
      .fetch(
        `*[_type == "weeklyProgram"]{
        _id,
        "name": name.${lang},
        "ageGroup": ageGroup.${lang},
        schedule[]{
          day,
          "time": time.${lang}
        }
      }`,
      )
      .then(setWeeklyPrograms)
      .finally(() => setIsWeeklyLoading(false));
  }, [lang]);

  const sortedWeeklyPrograms = weeklyPrograms
    .slice()
    .sort(
      (a, b) =>
        getProgramDayIndex(a.schedule) - getProgramDayIndex(b.schedule),
    );

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar transparent />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <div
              key={`hero-bg-${idx}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/75 z-10" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10" />
        </div>

        {/* Hero content — left-aligned, bottom of section */}
        <div className="relative z-20 mx-auto px-6 sm:px-10 lg:px-16 w-full pb-16 md:pb-24 pt-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            {/* Left: Big headline */}
            <div>
              <p className="font-bold tracking-[0.25em] uppercase text-sky-blue mb-6">
                {t("hero.verse_ref")}
              </p>
              <h1 className="text-5xl md:text-7xl font-black text-off-white leading-none tracking-tight mb-8">
                {t("hero.verse")}
              </h1>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <button className="bg-coral-red hover:bg-coral-red/90 text-off-white px-8 py-4 font-bold text-sm tracking-wide transition-colors flex items-center gap-2 w-fit">
                  <FaPlay className="text-xs" /> {t("hero.watch_message")}
                </button>
                <button className="border border-off-white/30 hover:border-off-white/60 text-off-white px-8 py-4 font-bold text-sm tracking-wide transition-colors w-fit">
                  {t("hero.new_here")}
                </button>
              </div>
            </div>

            {/* Right: Verse reference + logo */}
            <div className="flex flex-col justify-end items-end gap-4">
              <img
                src={logo}
                alt=""
                className="h-16 w-16 opacity-70"
                aria-hidden="true"
              />
              <p className="text-off-white/60 text-sm leading-relaxed max-w-sm">
                {t("hero.invited")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION — two-column split ───────────────────────────────── */}
      {/* <section className="bg-midnight-navy text-off-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
          <div className="px-6 sm:px-10 lg:px-16 py-16 md:py-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-off-white/10 lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-black text-off-white/40 leading-tight uppercase tracking-widest">
              {t("mission.label")}
            </h2>
          </div>
          <div className="px-6 sm:px-10 lg:px-16 py-16 md:py-24 flex flex-col justify-center gap-10 lg:col-span-8">
            <p className="text-4xl md:text-5xl lg:text-7xl font-black text-off-white leading-[1.1] tracking-tight">
              {t("mission.description")}
            </p>
            <Link
              to="/about"
              className="inline-block bg-coral-red hover:bg-coral-red/90 text-off-white px-8 py-4 font-bold text-sm tracking-wide transition-colors w-fit"
            >
              {t("mission.button")}
            </Link>
          </div>
        </div>
      </section> */}

            {/* Mission Statement Section */}
      <section className="bg-midnight-navy text-off-white px-4 pt-32 pb-48 relative overflow-hidden z-20">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-sky-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-coral-red/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
        <div 
          className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
        >
          <div className="md:col-span-5">
            <p className="text-sm font-bold text-sky-blue tracking-widest uppercase mb-8 flex items-center gap-4">
              <span className="w-12 h-px bg-sky-blue"></span>
            </p>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-off-white leading-[0.9] tracking-tighter">
              <span className="text-outline">{t("mission.label")}</span>
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-2xl md:text-4xl lg:text-5xl mb-12 text-off-white/90 font-black leading-tight tracking-tight">
              {t("mission.description")}
            </p>
            <div>
              <Link
                to="/about"
                className="inline-block bg-white hover:bg-off-white text-black px-8 py-4 font-bold text-sm tracking-wide transition-colors"
              >
                {t("mission.button")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WELCOME MARQUEE ──────────────────────────────────────────── */}
      <section className="bg-off-white py-10 border-b border-midnight-navy/10">
        <div className="max-w-full mx-auto relative overflow-hidden">
          <div className="marquee-track flex items-center gap-x-28 py-2 uppercase font-black text-2xl md:text-4xl text-midnight-navy">
            {[...Array(13)].map((_, i) => (
              <span key={i}>{t("welcome.text")}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET CONNECTED — ministry image cards ─────────────────────── */}
      {/* <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-coral-red mb-3">
                {t("connect.title")}
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-midnight-navy leading-tight">
                {t("connect.description")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { label: t("connect.kids"), bg: stage },
              { label: t("connect.youth"), bg: stage },
              { label: t("connect.young_adults"), bg: placeholderBg },
            ].map((item, i) => (
              <div
                key={i}
                className="relative h-80 overflow-hidden group cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: `url(${item.bg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-colors z-10 group-hover:from-black group-hover:via-black/50" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-2xl font-black text-off-white mb-2">
                    {item.label}
                  </h3>
                  <button className="text-off-white/70 group-hover:text-off-white font-bold text-xs tracking-wide hover:underline flex items-center gap-1 transition-colors w-fit">
                    {t("cards.learn_more")} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── MINISTRIES — two-column feature rows ─────────────────────── */}
      {/* <section
        ref={moreSectionRef}
        className="relative overflow-hidden bg-[#0a0a0a] text-off-white"
      >
        <div className="absolute inset-0 z-0">
          <img
            ref={moreBgRef}
            src={ministriesBg}
            alt=""
            className="w-full h-full object-cover opacity-10 transition-transform duration-700 ease-out"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="px-6 sm:px-10 lg:px-16 pt-16 md:pt-24 pb-12 border-b border-white/10">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/40 mb-3">
              {t("more.wait")}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              {t("more.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10">
            <div className="px-6 sm:px-10 lg:px-16 py-14 flex flex-col justify-center gap-4 border-b lg:border-b-0 lg:border-r border-white/10">
              <h3 className="text-3xl md:text-4xl font-black text-white">
                {t("more.worship")}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {t("more.worship_desc")}
              </p>
              <button className="text-white font-bold text-sm tracking-wide hover:underline flex items-center gap-1 w-fit mt-2">
                {t("cards.learn_more")} →
              </button>
            </div>
            <div
              className="h-64 lg:h-auto min-h-[260px] bg-cover bg-center"
              style={{ backgroundImage: `url(${choir})` }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10">
            <div
              className="h-64 lg:h-auto min-h-[260px] bg-cover bg-center order-2 lg:order-1"
              style={{ backgroundImage: `url(${placeholderBg})` }}
            />
            <div className="px-6 sm:px-10 lg:px-16 py-14 flex flex-col justify-center gap-4 order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-white/10">
              <h3 className="text-3xl md:text-4xl font-black text-white">
                {t("more.diakon")}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {t("more.diakon_desc")}
              </p>
              <button className="text-white font-bold text-sm tracking-wide hover:underline flex items-center gap-1 w-fit mt-2">
                {t("cards.learn_more")} →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="px-6 sm:px-10 lg:px-16 py-14 flex flex-col justify-center gap-4 border-b lg:border-b-0 lg:border-r border-white/10">
              <h3 className="text-3xl md:text-4xl font-black text-white">
                {t("more.media")}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {t("more.media_desc")}
              </p>
              <button className="text-white font-bold text-sm tracking-wide hover:underline flex items-center gap-1 w-fit mt-2">
                {t("cards.learn_more")} →
              </button>
            </div>
            <div
              className="h-64 lg:h-auto min-h-[260px] bg-cover bg-center"
              style={{ backgroundImage: `url(${ministriesBg})` }}
            />
          </div>

          <div className="px-6 sm:px-10 lg:px-16 py-10 border-t border-white/10">
            <Link
              to="/ministries"
              className="inline-block bg-white hover:bg-off-white text-black px-8 py-4 font-bold text-sm tracking-wide transition-colors"
            >
              {t("more.view_all")}
            </Link>
          </div>
        </div>
      </section> */}

      {/* Ministries */}
      <section
        ref={moreSectionRef}
        className="relative overflow-hidden bg-black text-off-white px-4 py-32 md:py-48 z-40"
      >
        <div className="absolute inset-0 z-0">
          <img
            ref={moreBgRef}
            src={ministriesBg}
            alt="Ministries background"
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        <div 
          className="relative z-10 max-w-6xl mx-auto w-full"
        >
          <div className="flex flex-col md:flex-row justify-between items-start mb-24">
            <div className="w-full md:w-1/2">
              <p className="text-sm font-bold text-sky-blue tracking-widest uppercase mb-4 flex items-center gap-4">
                <span className="w-12 h-px bg-sky-blue"></span> {t("connect.title")}
              </p>
              <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter leading-none">
                {t("more.title")}
              </h2>
            </div>
            <div className="w-full md:w-1/3 mt-8 md:mt-24">
              <p className="text-white/70 text-xl font-medium leading-relaxed">
                {t("more.description")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative top-12">
            {[
              { title: t("more.worship"), desc: t("more.worship_desc") },
              { title: t("more.diakon"), desc: t("more.diakon_desc") },
              { title: t("more.media"), desc: t("more.media_desc") }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-xl border-t border-white/10 p-10 md:p-14 hover:bg-white/10 transition-colors cursor-pointer flex flex-col justify-between h-[400px]"
              >
                <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tighter">
                  {item.title}
                </h3>
                <div>
                  <p className="text-lg text-white/50 mb-8 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                  <button className="text-sky-blue font-bold tracking-widest hover:text-white transition-colors uppercase flex items-center gap-4 group">
                    {t("cards.learn_more")} <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-right mt-32">
            <Link
              to="/ministries"
              className="inline-flex items-center bg-off-white text-midnight-navy px-6 py-3 font-bold text-sm tracking-wide transition-colors hover:bg-white shrink-0"
            >
              {t("more.view_all")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── WEEKLY SCHEDULE ───────────────────────────────────────────── */}
      <section className="bg-off-white py-16 md:py-24 border-b border-midnight-navy/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-sky-blue mb-3">
              {t("schedule.title")}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-midnight-navy">
              {t("schedule.description")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-midnight-navy/10">
            {isWeeklyLoading &&
              Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`weekly-skeleton-${index}`}
                  className="p-8 border-b border-r border-midnight-navy/10 bg-white animate-pulse"
                >
                  <div className="h-4 w-2/3 bg-midnight-navy/10 rounded mb-3" />
                  <div className="h-3 w-1/3 bg-midnight-navy/10 rounded mb-4" />
                  <div className="space-y-2">
                    <div className="h-3 w-3/4 bg-midnight-navy/10 rounded" />
                    <div className="h-3 w-2/3 bg-midnight-navy/10 rounded" />
                  </div>
                </div>
              ))}
            {!isWeeklyLoading &&
              sortedWeeklyPrograms.map((program, idx) => (
                <div
                  key={program._id}
                  className={`bg-white p-8 border-midnight-navy/10 ${
                    idx % 2 === 0 ? "border-r" : ""
                  } ${idx < sortedWeeklyPrograms.length - 2 ? "border-b" : ""}`}
                >
                  <div className="h-[2px] w-8 bg-sky-blue mb-5" />
                  <h3 className="text-xl font-black mb-1 text-midnight-navy">
                    {program.name}{" "}
                    {program.ageGroup && (
                      <span className="text-sm text-midnight-navy/50 font-normal">
                        ({program.ageGroup})
                      </span>
                    )}
                  </h3>
                  <ul className="text-sm text-midnight-navy/60 space-y-1 mt-3">
                    {(program.schedule || [])
                      .slice()
                      .sort(
                        (a, b) =>
                          (dayOrder[normalizeDay(a.day)] ?? 99) -
                          (dayOrder[normalizeDay(b.day)] ?? 99),
                      )
                      .map((slot, index) => (
                        <li key={`${program._id}-${index}`}>
                          {lang === "am"
                            ? dayMap[normalizeDay(slot.day)]?.am
                            : dayMap[normalizeDay(slot.day)]?.en}{" "}
                          — {slot.time}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
          {!isWeeklyLoading && sortedWeeklyPrograms.length === 0 && (
            <p className="text-center text-midnight-navy/60 mt-6">
              {t("schedules.no_schedule")}
            </p>
          )}
        </div>
      </section>

      {/* ── EVENTS ────────────────────────────────────────────────────── */}
      <section className="bg-midnight-navy text-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-coral-red mb-3">
                {t("happenings.label")}
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-off-white leading-tight">
                {t("happenings.title")}
              </h2>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center bg-off-white text-midnight-navy px-6 py-3 font-bold text-sm tracking-wide transition-colors hover:bg-white shrink-0"
            >
              {t("happenings.view_all")}
            </Link>
          </div>
          <EventsSection limit={3} onlyFeatured />
        </div>
      </section>

      {/* ── LATEST MEDIA ──────────────────────────────────────────────── */}
      <section className="bg-off-white py-16 md:py-24 border-b border-midnight-navy/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-sky-blue mb-3">
                {t("media.label")}
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-midnight-navy leading-tight">
                {t("media.title")}
              </h2>
            </div>
            <Link
              to="/media"
              className="inline-flex items-center bg-coral-red hover:bg-coral-red/90 text-off-white px-6 py-3 font-bold text-sm tracking-wide transition-colors shrink-0"
            >
              {t("media.listen_now")}
            </Link>
          </div>
          <MediaSection />
        </div>
      </section>

      <Footer />
    </main>
  );
}
