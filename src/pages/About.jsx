import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
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
      name: "Getachew Alemayehu",
      role: "Member",
      image: getachew,
      isGroup: false,
    },
    {
      name: "Afework Mengistu",
      role: "Diakon Representative",
      image: afework,
      isGroup: false,
    },
    {
      name: "Mengistu Tufa",
      role: "የጉባኤው ፀሐፊ",
      image: mengistu,
      isGroup: false,
    },
    {
      name: "Almaz Gesese",
      role: "Member",
      image: almaz,
      isGroup: false,
    },
    {
      name: "Ev. Abiy Negussie",
      role: "Evangelist Representative",
      image: abiy,
      isGroup: false,
    },
    {
      name: "Mulugeta Wolde",
      role: "አቃቢ ነዋይ",
      image: mulugeta,
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
    <main className="min-h-screen bg-sky-blue/20">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-4 py-16 pt-32 md:py-20 md:pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-bold text-sky-blue/80 mb-4">
            {t("about.label")}
          </p>
          <h1 className="text-4xl md:text-5xl font-black">
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-lg h-full">
            <img
              src={churchImage}
              alt="Church background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/70 via-midnight-navy/20 to-transparent" />
            <div className="absolute left-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-off-white/90 px-4 py-2 text-xs font-bold uppercase tracking-widest text-midnight-navy shadow-sm">
              {t("about.background.badge")}
            </div>
          </div>
          <div className="bg-off-white rounded-3xl border border-midnight-navy/10 p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-black text-midnight-navy mb-4">
              {t("about.background.title")}
            </h2>
            <div className="h-1 w-16 bg-coral-red rounded-full mb-5" />
            <p className="text-midnight-navy/70 text-lg leading-relaxed text-justify">
              {t("about.background.body")}
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-midnight-navy mb-8">
            {t("about.faithHeading")}
          </h2>
          <div className="space-y-4">
            {faithSections.map((section, index) => (
              <details
                key={section.title}
                open={index === 0}
                className="group bg-off-white rounded-xl border border-midnight-navy/10 p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-black text-midnight-navy">
                  <span className="text-midnight-navy">{section.title}</span>
                  <span className="text-midnight-navy/50 group-open:rotate-180 transition-transform">
                    <IoIosArrowDown />
                  </span>
                </summary>
                <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                  <div className="overflow-hidden">
                    <div className="mt-4 text-midnight-navy/70 text-sm leading-relaxed space-y-4">
                      {section.paragraphs?.map((paragraph, idx) => (
                        <p key={`${section.title}-p-${idx}`}>{paragraph}</p>
                      ))}
                      {section.items &&
                        section.items.length > 0 &&
                        (section.ordered ? (
                          <ol className="list-decimal pl-5 space-y-2">
                            {section.items.map((item, idx) => (
                              <li key={`${section.title}-ol-${idx}`}>
                                {typeof item === "string" ? (
                                  item
                                ) : (
                                  <>
                                    <strong className="text-midnight-navy">{item.title}:</strong> {item.desc}
                                  </>
                                )}
                              </li>
                            ))}
                          </ol>
                        ) : (
                          <ul className="list-disc pl-5 space-y-2">
                            {section.items.map((item, idx) => (
                              <li key={`${section.title}-ul-${idx}`}>
                                {typeof item === "string" ? (
                                  item
                                ) : (
                                  <>
                                    <strong className="text-midnight-navy">{item.title}:</strong> {item.desc}
                                  </>
                                )}
                              </li>
                            ))}
                          </ul>
                        ))}
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-off-white rounded-2xl border border-midnight-navy/10 p-8 md:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-midnight-navy">
                  {t("about.statement.title")}
                </h2>
                <p className="text-midnight-navy/70 text-sm mt-2">
                  {t("about.statement.description")}
                </p>
              </div>
              <div className="h-12 w-12 rounded-xl bg-linear-to-br from-sky-blue/60 to-deep-blue/60 flex items-center justify-center text-off-white text-xl font-black">
                ✝
              </div>
            </div>
            <ol className="list-decimal pl-6 space-y-3 text-midnight-navy/80 text-base leading-relaxed">
              {statementOfFaith.map((item, idx) => (
                <li key={`statement-${idx}`}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="px-4 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-midnight-navy mb-8">
            Assembly of Leaders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {elders.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl border border-midnight-navy/10 bg-off-white/95 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative mx-auto mb-4 h-36 w-36 rounded-full bg-linear-to-br from-sky-blue/60 via-off-white to-coral-red/40 p-1">
                  <div className="h-full w-full overflow-hidden rounded-full bg-off-white">
                    <img
                      src={getImageSrc(member.image)}
                      alt={member.name}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-black text-midnight-navy">
                  {member.name}
                </h3>
                <p className="text-midnight-navy/60 text-sm">{member.role}</p>
                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-coral-red/70" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="px-4 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-midnight-navy mb-8">
            Assembly of Elders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {elders.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-2xl border border-midnight-navy/10 bg-off-white/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-80 w-full">
                  <img
                    src={getImageSrc(member.image)}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-black text-midnight-navy">
                    {member.name}
                  </h3>
                  <p className="text-midnight-navy/60 text-sm">{member.role}</p>
                  <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-sky-blue/70" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="px-4 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-midnight-navy mb-8">
            Full Time Ministers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {fullTimeBigSize.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-2xl border border-midnight-navy/10 bg-off-white/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-80 w-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-black text-midnight-navy">
                    {member.name}
                  </h3>
                  {/* <p className="text-midnight-navy/60 text-sm">{member.role}</p> */}
                  <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-sky-blue/70" />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullTime.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl border border-midnight-navy/10 bg-off-white/95 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative mx-auto mb-4 h-36 w-36 rounded-full bg-linear-to-br from-sky-blue/60 via-off-white to-coral-red/40 p-1">
                  <div className="h-full w-full overflow-hidden rounded-full bg-off-white">
                    <img
                      src={getImageSrc(member.image)}
                      alt={member.name}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-black text-midnight-navy">
                  {member.name}
                </h3>
                <p className="text-midnight-navy/60 text-sm">{member.role}</p>
                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-coral-red/70" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-midnight-navy mb-8">
            Admin Staff
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-8">
            {adminStaffBigSize.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-2xl border border-midnight-navy/10 bg-off-white/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-120 w-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-black text-midnight-navy">
                    {member.name}
                  </h3>
                  {/* <p className="text-midnight-navy/60 text-sm">{member.role}</p> */}
                  <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-sky-blue/70" />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminStaff.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl border border-midnight-navy/10 bg-off-white/95 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative mx-auto mb-4 h-36 w-36 rounded-full bg-linear-to-br from-sky-blue/60 via-off-white to-coral-red/40 p-1">
                  <div className="h-full w-full overflow-hidden rounded-full bg-off-white">
                    <img
                      src={getImageSrc(member.image)}
                      alt={member.name}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-black text-midnight-navy">
                  {member.name}
                </h3>
                <p className="text-midnight-navy/60 text-sm">{member.role}</p>
                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-coral-red/70" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
