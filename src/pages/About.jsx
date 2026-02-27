import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import churchImage from "../assets/churchBldg.jpeg";
import { IoIosArrowDown } from "react-icons/io";

import pastors from "../assets/staff/pastors.jpeg";
import ministers from "../assets/staff/ministers.jpeg";
import selamawit from "../assets/staff/selamawit.jpeg";
import geremew from "../assets/staff/geremew.jpeg";
import ermiyas from "../assets/staff/ermiyas.jpeg";
import senayit from "../assets/staff/senayit.jpeg";
import temesgen from "../assets/staff/temesgen.jpeg";
import abiy from "../assets/staff/abiy.jpeg";
import tibebe from "../assets/staff/tibebe.jpeg";
import paulos from "../assets/staff/paulos.jpeg";
import terefe from "../assets/staff/terefe.jpeg";
import alemu from "../assets/staff/alemu.jpeg";
import meseret from "../assets/staff/meseret.jpeg";
import yohannes from "../assets/staff/yohannes.jpeg";
import moges from "../assets/staff/moges.jpeg";
import evangelist from "../assets/staff/evangelist.jpeg";
import adminStaffPic from "../assets/staff/adminStaff.jpeg";
import mengistu from "../assets/staff/mengistu.jpeg";
import afework from "../assets/staff/afework.jpeg";
import mulugeta from "../assets/staff/mulugeta.jpeg";
import getachew from "../assets/staff/getachew.jpeg";
import tliye from "../assets/staff/tliye.jpeg";
import almaz from "../assets/staff/almaz.jpeg";

export default function About() {
  const { t } = useTranslation();
  const placeholderAvatar =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'><rect width='400' height='400' fill='%23e2e8f0'/><circle cx='200' cy='150' r='70' fill='%23cbd5e1'/><path d='M80 340c20-70 100-110 120-110s100 40 120 110' fill='%23cbd5e1'/></svg>";
  const getImageSrc = (image) => image || placeholderAvatar;
  const fullTimeBigSize = [
    {
      name: "Fulltime ministers",
      role: "Role Title",
      image: ministers,
      isGroup: true,
    },
    {
      name: "Pastors",
      role: "Role Title",
      image: pastors,
      isGroup: true,
    },
    {
      name: "Evangelists",
      role: "Evangelism",
      image: evangelist,
      isGroup: true,
    },
  ];

  const adminStaffBigSize = [
    {
      name: "Admin Staffs",
      role: "Role Title",
      image: adminStaffPic,
      isGroup: true,
    },
  ];

  const elders = [
    {
      name: "Professor Tilaye Feyisa",
      role: "Chair Person",
      image: tliye,
      isGroup: false,
    },
    {
      name: "Pastor Geremew Yewogu",
      role: "Vice Chair Person",
      image: geremew,
      isGroup: false,
    },
    {
      name: "Pastor Temesgen Awano",
      role: "Lead Pastor",
      image: temesgen,
      isGroup: false,
    },
    {
      name: "Mengistu Tufa",
      role: "Leader's Assembly Secretry",
      image: mengistu,
      isGroup: false,
    },
    {
      name: "Mulugeta Wolde",
      role: "Treasurer",
      image: mulugeta,
      isGroup: false,
    },
    {
      name: "Ev. Abiy Negussie",
      role: "Evangelist Representative",
      image: abiy,
      isGroup: false,
    },
    {
      name: "Afework Mengistu",
      role: "Deacon Representative",
      image: afework,
      isGroup: false,
    },
    {
      name: "Getachew Alemayehu",
      role: "Member",
      image: getachew,
      isGroup: false,
    },
    {
      name: "Almaz Gesese",
      role: "Member",
      image: almaz,
      isGroup: false,
    },
  ];

  const fullTime = [
    {
      name: "Pastor Temesgen Awano",
      role: "Lead Pastor",
      image: temesgen,
      isGroup: false,
    },
    {
      name: "Pastor Geremew Yewogu",
      role: "Vice Chair Person",
      image: geremew,
      isGroup: false,
    },
    {
      name: "Ev. Abiy Negussie",
      role: "Evangelist Representative",
      image: abiy,
      isGroup: false,
    },
    {
      name: "Ev. Senayit Belete",
      role: "Women's ministry leader",
      image: senayit,
      isGroup: false,
    },
    {
      name: "Ev. Tibebe Lema",
      role: "Mission Department Leader",
      image: tibebe,
      isGroup: false,
    },
    {
      name: "Ev. Paulos Gebre",
      role: "Evangelism Department Leader",
      image: paulos,
      isGroup: false,
    },
    {
      name: "Ev. Terefe Kebede",
      role: "Prayer & Healing Department Leader",
      image: terefe,
      isGroup: false,
    },
    {
      name: "Ev. Alemu Sitote",
      role: "Prayer Minister",
      image: alemu,
      isGroup: false,
    },
    {
      name: "Yohannes Mulugeta",
      role: "Worship Department Leader",
      image: yohannes,
      isGroup: false,
    },
  ];

  const adminStaff = [
    {
      name: "Ermias Gebremariam",
      role: "Admin & Finance Head",
      image: ermiyas,
      isGroup: false,
    },
    {
      name: "Meseret Negash",
      role: "Secretary & Cashier",
      image: meseret,
      isGroup: false,
    },
    {
      name: "Selamawit Thomas",
      role: "Accountant",
      image: selamawit,
      isGroup: false,
    },
    {
      name: "Moges Bedase",
      role: "Office Services Provider",
      image: moges,
      isGroup: false,
    },
  ];

  const faithSections = t("about.faithSections", { returnObjects: true });
  const statementOfFaith = t("about.statement.items", {
    returnObjects: true,
  });

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-6 sm:px-10 lg:px-16 py-16 pt-32 md:py-24 md:pt-40">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-sky-blue mb-6">
            {t("about.label")}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-off-white leading-none tracking-tight">
            {t("about.title")}
          </h1>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        {/* <div className="max-w-4xl mx-auto text-center">
          <p className="text-midnight-navy/80 text-lg leading-relaxed">
            {t("about.description")}
          </p>
        </div> */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch border border-midnight-navy/10">
          <div className="relative overflow-hidden h-full min-h-[300px] md:min-h-full">
            <img
              src={churchImage}
              alt="Church background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/90 via-midnight-navy/40 to-transparent" />
            <div className="absolute left-6 bottom-6 inline-flex items-center gap-2 bg-coral-red px-4 py-2 text-xs font-bold uppercase tracking-widest text-off-white">
              {t("about.background.badge")}
            </div>
          </div>
          <div className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-black text-midnight-navy mb-6">
              {t("about.background.title")}
            </h2>
            <div className="h-1 w-20 bg-sky-blue mb-8" />
            <p className="text-midnight-navy/80 text-lg leading-relaxed text-justify">
              {t("about.background.body")}
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 sm:px-10 lg:px-16 border-t border-midnight-navy/10 pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Left Column: Vision & Mission (Sticky) */}
            <div className="lg:col-span-4 space-y-12 lg:sticky lg:top-32 self-start">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-coral-red mb-4">
                  {faithSections[0]?.title || "Vision"}
                </h2>
                <div className="text-2xl md:text-3xl font-light text-midnight-navy leading-snug">
                  {faithSections[0]?.paragraphs?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="h-px bg-midnight-navy/10 w-full" />
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-sky-blue mb-4">
                  {faithSections[1]?.title || "Mission"}
                </h2>
                <div className="text-xl md:text-2xl font-light text-midnight-navy/80 leading-relaxed">
                  {faithSections[1]?.paragraphs?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Purpose & Values */}
            <div className="lg:col-span-8 lg:pl-12 lg:border-l border-midnight-navy/10">
              {/* Purpose section */}
              <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black text-midnight-navy mb-10 pb-4 border-b-2 border-midnight-navy/10 inline-block">
                  {faithSections[2]?.title || "Purpose"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {faithSections[2]?.items?.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 md:p-8 border border-midnight-navy/10 hover:border-coral-red/50 transition-colors group">
                      <div className="text-3xl font-black text-midnight-navy/10 group-hover:text-coral-red/20 transition-colors mb-4">0{idx + 1}</div>
                      <p className="text-midnight-navy/80 text-sm md:text-base leading-relaxed">
                        {typeof item === "string" ? item : item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Values section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-midnight-navy mb-10 pb-4 border-b-2 border-midnight-navy/10 inline-block">
                  {faithSections[3]?.title || "Core Values"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                  {faithSections[3]?.items?.map((item, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-midnight-navy/10 hover:border-sky-blue transition-colors">
                      <h3 className="text-lg font-bold text-midnight-navy mb-3 uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-midnight-navy/70 text-sm leading-relaxed text-justify">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith Section - Full width geometric style */}
      <section className="bg-midnight-navy text-off-white py-20 md:py-32 my-20 md:my-32 relative overflow-hidden">
        {/* Subtle geometric background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-off-white/5 skew-x-12 translate-x-32 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-sky-blue mb-4">
                {t("about.statement.description")}
              </h2>
              <h3 className="text-4xl md:text-6xl font-black text-off-white">
                {t("about.statement.title")}
              </h3>
            </div>
            <div className="w-16 h-1 bg-coral-red" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-off-white/10 border border-off-white/10">
            {statementOfFaith.map((item, idx) => (
              <div key={`statement-${idx}`} className="bg-midnight-navy p-8 md:p-10 group hover:bg-off-white/5 transition-colors duration-300">
                <div className="font-mono text-sky-blue/50 text-xl md:text-2xl mb-6 group-hover:text-sky-blue transition-colors">
                  {String(idx + 1).padStart(2, '0')}.
                </div>
                <p className="text-off-white/80 text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 sm:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-blue mb-4">
              Leaders
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-left text-midnight-navy leading-none tracking-tight">
              Assembly of Leaders
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {elders.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col border border-midnight-navy/10 bg-white transition-all duration-300 hover:border-coral-red/50 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-midnight-navy/5">
                  <img
                    src={getImageSrc(member.image)}
                    alt={member.name}
                    className="h-full w-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-black text-midnight-navy">
                    {member.name}
                  </h3>
                  <p className="text-midnight-navy/60 text-sm mt-1">{member.role}</p>
                  <div className="mx-auto mt-5 h-[2px] w-8 bg-coral-red/70 group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-blue mb-4">
              Ministers
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-left text-midnight-navy leading-none tracking-tight">
              Full Time Ministers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {fullTimeBigSize.map((member) => (
              <div
                key={member.name}
                className="group border border-midnight-navy/10 bg-white transition-all duration-300 hover:border-sky-blue/50 hover:-translate-y-1"
              >
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-black text-midnight-navy">
                    {member.name}
                  </h3>
                  <div className="mx-auto mt-5 h-[2px] w-8 bg-sky-blue/70 group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullTime.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col border border-midnight-navy/10 bg-white transition-all duration-300 hover:border-coral-red/50 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-midnight-navy/5">
                  <img
                    src={getImageSrc(member.image)}
                    alt={member.name}
                    className="h-full w-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-black text-midnight-navy">
                    {member.name}
                  </h3>
                  <p className="text-midnight-navy/60 text-sm mt-1">{member.role}</p>
                  <div className="mx-auto mt-5 h-[2px] w-8 bg-coral-red/70 group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 sm:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-blue mb-4">
              Staff
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-midnight-navy leading-none tracking-tight">
              Admin Staff
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-8">
            {adminStaffBigSize.map((member) => (
              <div
                key={member.name}
                className="group border border-midnight-navy/10 bg-white transition-all duration-300 hover:border-sky-blue/50 hover:-translate-y-1"
              >
                <div className="relative h-64 md:h-96 xl:h-[32rem] w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-black text-midnight-navy">
                    {member.name}
                  </h3>
                  <div className="mx-auto mt-5 h-[2px] w-8 bg-sky-blue/70 group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminStaff.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col border border-midnight-navy/10 bg-white transition-all duration-300 hover:border-coral-red/50 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-midnight-navy/5">
                  <img
                    src={getImageSrc(member.image)}
                    alt={member.name}
                    className="h-full w-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-black text-midnight-navy">
                    {member.name}
                  </h3>
                  <p className="text-midnight-navy/60 text-sm mt-1">{member.role}</p>
                  <div className="mx-auto mt-5 h-[2px] w-8 bg-coral-red/70 group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
