import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import churchImage from "../assets/churchBldg.jpeg";
import { sanityClient } from "../sanity";
import { useLanguage } from "../context/LanguageContext";

import pastors from "../assets/staff/pastors.jpeg";
import ministers from "../assets/staff/ministers.jpeg";
import evangelist from "../assets/staff/evangelist.jpeg";
import adminStaffPic from "../assets/staff/adminStaff.jpeg";

const staffMembersQuery = `
*[_type == "staffMember"]{
  _id,
  name,
  phone,
  email,
  "photo": photo.asset->url,
  roles[]{
    title,
    group,
    order
  }
}
`;

export default function About() {
  const { t } = useTranslation();
  const { language: lang } = useLanguage();
  const [staffMembers, setStaffMembers] = useState([]);
  const [isStaffLoading, setIsStaffLoading] = useState(true);
  const placeholderAvatar =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'><rect width='400' height='400' fill='%23e2e8f0'/><circle cx='200' cy='150' r='70' fill='%23cbd5e1'/><path d='M80 340c20-70 100-110 120-110s100 40 120 110' fill='%23cbd5e1'/></svg>";
  const getImageSrc = (image) => image || placeholderAvatar;

  useEffect(() => {
    let isMounted = true;

    setIsStaffLoading(true);
    sanityClient
      .fetch(staffMembersQuery)
      .then((data) => {
        if (!isMounted) return;
        setStaffMembers(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!isMounted) return;
        setStaffMembers([]);
      })
      .finally(() => {
        if (!isMounted) return;
        setIsStaffLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const getLocalizedText = (value) => {
    if (!value) return "";
    if (typeof value === "string") return value;
    return value?.[lang] || value?.en || value?.am || "";
  };

  const getStaffByGroup = (staff, group) => {
    return staff
      .filter((person) =>
        person?.roles?.some(
          (role) => (role?.group || "").toLowerCase() === group
        )
      )
      .map((person) => {
        const role = person.roles?.find(
          (r) => (r?.group || "").toLowerCase() === group
        );

        return {
          ...person,
          phone: (person?.phone || "").trim(),
          email: (person?.email || "").replace(/\s+/g, ""),
          roleTitle: role?.title,
          roleOrder: role?.order ?? 999,
        };
      })
      .sort((a, b) => a.roleOrder - b.roleOrder);
  };
  const fullTimeBigSize = [
    {
      name: t("aboutStaff.fulltimeGroup"),
      role: "Role Title",
      image: ministers,
      isGroup: true,
    },
    {
      name: t("aboutStaff.pastorsGroup"),
      role: "Role Title",
      image: pastors,
      isGroup: true,
    },
    {
      name: t("aboutStaff.evangelistsGroup"),
      role: "Evangelism",
      image: evangelist,
      isGroup: true,
    },
  ];

  const adminStaffBigSize = [
    {
      name: t("aboutStaff.adminGroup"),
      role: "Role Title",
      image: adminStaffPic,
      isGroup: true,
    },
  ];

  const elders = getStaffByGroup(staffMembers, "elders");
  const fullTime = getStaffByGroup(staffMembers, "fulltime");
  const adminStaff = getStaffByGroup(staffMembers, "admin");

  const faithSections = t("about.faithSections", { returnObjects: true });
  const statementOfFaith = t("about.statement.items", {
    returnObjects: true,
  });

  const renderContactInfo = (member) => {
    if (!member.phone && !member.email) return null;

    return (
      <div className="mt-4 space-y-1 text-sm text-midnight-navy/70">
        {member.phone && (
          <a
            href={`tel:${member.phone.replace(/\s+/g, "")}`}
            className="block hover:text-deep-blue transition-colors"
          >
            {member.phone}
          </a>
        )}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="block break-all hover:text-deep-blue transition-colors"
          >
            {member.email}
          </a>
        )}
      </div>
    );
  };

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
      <section id="mission" className="scroll-mt-10 px-6 sm:px-10 lg:px-16 border-t border-midnight-navy/10 pt-16 md:pt-24">
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
      <section id="statement-of-faith" className="bg-midnight-navy text-off-white py-20 md:py-32 my-20 md:my-32 relative overflow-hidden">
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
      <section id="staff" className="scroll-mt-28 px-6 sm:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-blue mb-4">
              {t("aboutStaff.leadersLabel")}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-left text-midnight-navy leading-none tracking-tight">
              {t("aboutStaff.assemblyTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {elders.map((member) => (
              <div
                key={member._id}
                className="group flex flex-col border border-midnight-navy/10 bg-white transition-all duration-300 hover:border-coral-red/50 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-midnight-navy/5">
                  <img
                    src={getImageSrc(member.photo)}
                    alt={getLocalizedText(member.name)}
                    className="h-full w-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-black text-midnight-navy">
                    {getLocalizedText(member.name)}
                  </h3>
                  <p className="text-midnight-navy/60 text-sm mt-1">
                    {getLocalizedText(member.roleTitle)}
                  </p>
                  {renderContactInfo(member)}
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
              {t("aboutStaff.ministersLabel")}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-left text-midnight-navy leading-none tracking-tight">
              {t("aboutStaff.fulltimeTitle")}
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
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-all duration-700"
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
                key={member._id}
                className="group flex flex-col border border-midnight-navy/10 bg-white transition-all duration-300 hover:border-coral-red/50 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-midnight-navy/5">
                  <img
                    src={getImageSrc(member.photo)}
                    alt={getLocalizedText(member.name)}
                    className="h-full w-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-black text-midnight-navy">
                    {getLocalizedText(member.name)}
                  </h3>
                  <p className="text-midnight-navy/60 text-sm mt-1">
                    {getLocalizedText(member.roleTitle)}
                  </p>
                  {renderContactInfo(member)}
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
              {t("aboutStaff.staffLabel")}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-midnight-navy leading-none tracking-tight">
              {t("aboutStaff.adminTitle")}
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
                    className="h-full w-full object-cover object-top group-hover:scale-105 transition-all duration-700"
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
                key={member._id}
                className="group flex flex-col border border-midnight-navy/10 bg-white transition-all duration-300 hover:border-coral-red/50 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-midnight-navy/5">
                  <img
                    src={getImageSrc(member.photo)}
                    alt={getLocalizedText(member.name)}
                    className="h-full w-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-black text-midnight-navy">
                    {getLocalizedText(member.name)}
                  </h3>
                  <p className="text-midnight-navy/60 text-sm mt-1">
                    {getLocalizedText(member.roleTitle)}
                  </p>
                  {renderContactInfo(member)}
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
