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
      name: "Evangelist",
      role: "Evangelism",
      image: evangelist,
      isGroup: true,
    },
  ];

  const adminStaffBigSize = [
    {
      name: "Fulltime ministers",
      role: "Role Title",
      image: adminStaffPic,
      isGroup: true,
    },
  ];

  const elders = [
    {
      name: "Professor Tilaye Feyisa",
      role: "Chair Person",
      image: null,
      isGroup: true,
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
      image: null,
      isGroup: false,
    },
    {
      name: "Afework Mengistu",
      role: "Diakon Representative",
      image: null,
      isGroup: false,
    },
    {
      name: "Mengistu Tufa",
      role: "የጉባኤው ፀሐፊ",
      image: null,
      isGroup: false,
    },
    {
      name: "Almaz Gesese",
      role: "Member",
      image: null,
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
      image: null,
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
      role: "Evangelist Cordinater",
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

  const faithSections = [
    {
      title: "Vision",
      paragraphs: [
        "To comprehend transformed society by the gospel of Jesus Christ, growing up skilled, healthy and productive and get out of poverty, committed to change and development.",
      ],
    },
    {
      title: "Mission",
      items: [
        "Planting for believers in the power of the Holy Spirit for universal ministry and mobilizing for holistic changes.",
        "Giving universal service so that the community can use its potential",
        "Contributing to the physical, social, economic, and creative nature of the society",
        "Working to ensure psychological and physical needs of the vulnerable marginalized group of the society and believers",
        "Leading/managing sociology-economic activities to make sustainable and resilient community",
        "Living for holiness through teaching by living according to the Holy Spirit and the early Pentecostal divinity teachings",
        "Fighting and working to avoid social exclusions or discrimination’s",
      ],
    },
    {
      title: "Purpose",
      ordered: true,
      items: [
        "Preaching the gospel of our Lord Jesus Christ. (Mark 16; 15)",
        "Making disciples who are baptized in the Holy Spirit who believe in the gospel. (Matt. 28: 19)",
        "Perform activities to provide comprehensive service (James 1: 26)",
      ],
    },
    {
      title: "Values",
      ordered: true,
      items: [
        "Loving: Everything that is done without true love is futile, because God is love that everyone should have love for God, for his friends, and even for those who hate him (I Cor. 13 Matt. 22: 35-40).",
        "Unity/Synergy: The Lord Jesus Christ prayed for the unity of the Church today. All worship and service without the unity of spirit and heart have no effect. Therefore, the Ethiopian Full Gospel Believers Church believes in the unity of believers, evangelical churches and teaches this (John 17: 21, 21; Eph). I Corinthians 12 ;4-31; Phil 2.11-10 Acts 9 : 31; Acts 2 : 4)",
        "Universal Service: the physical, social and spiritual of human beingsServe to meet needs (Luke 2:52; James 1: 27).",
        "Early Pentecostalism: The Pentecostalism as prophesied by the prophet Joel from the early church, as evidenced by the book of Acts. It is a sacred practice that has been in the lives of believers ever since. Therefore, first and foremost to be baptized in the Holy Spirit and she admit that the sign is to speak in tongues (Acts 10, 44-45 (Acts 19: 1).",
        "Holiness: holiness is a sign that we are dedicated to God. It is impossible to see and enjoy. Therefore, Ethiopian Full Gospel Believer Church believes that believers must be dedicated in all thoughts and actions. (Colossians 3: 5-10; I Peter 1: 1515; Hebrews 12: 14); Galatians 5: 22)",
        "Partnership: The kingdom of God is one kingdom. The Ethiopian Full Gospel Believers Church appeared in every form and language of the born-again believer. Respectfully, regardless of geography; from the other sharing and supporting the gospel of Christ with the community and she believes based on (Ephesians 1: 4; Ephesians 4:1; 1 Corinthians 12: 14: 14-31; Romans 15: 26: 26-27).",
        "Fasting and Prayer: She received the power of the Holy Spirit to help them. When the Church began preaching Gospel, God did many wonderful things. She endured persecution and suffering through fasting and prayer. Therefore Ethiopian Full Gospel Believers Church became a special place for fasting and prayer according to (Acts 1; 14; 2; Acts 4; 29) that she values it.",
        "Ministry of Service: The Lord Jesus Christ said,Let him teach, as he said, and teach in his ministry Ethiopian Full Gospel Believers Church. Every servant should have the heart of ministry, following the example of Christ and she believes and deserves it (John 13: 13); Mark 10:44 – 45; Philippians 2: 1)",
        "Righteousness and Justice: Justices are the foundations of the Kingdom of Christ in Ethiopian Full Gospel Believers Church, works to make righteousness and Justice for all mankind based on (Matthew 5: 20; Luke 3)",
        "Loyalty: We believe in biblical devotion, soundness of mind, and morality.",
        "Accountability: The quality of work and communication at all levels of the Church is exemplary and we emphasize accountability by believing that it exists according to (Exodus 18, 19-21).",
        "Transcendence:Ethiopian Full Gospel Believers Church believes that everything is naked and exposed before the eyes of God. The work that the church does in God’s house is clear. She believed in Him (John 3: 20), II Corinthians 4: 2, 2, 13).",
        "Excellency; the ultimate goal of the mission is to make believers Disciples of Christ. Education is also important for making disciples and the theological study to help believers grow into Christ likeness. It is important to provide quality, supportive education. Therefore,we struggle to maintain academic excellence by providing quality of education based on (Matthew 28: 19-20)",
      ],
    },
  ];

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
              Church History
            </div>
          </div>
          <div className="bg-off-white rounded-3xl border border-midnight-navy/10 p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-black text-midnight-navy mb-4">
              Background Church History
            </h2>
            <div className="h-1 w-16 bg-coral-red rounded-full mb-5" />
            <p className="text-midnight-navy/70 text-lg leading-relaxed text-justify">
              The Ethiopian Full Gospel Believers’ Church is a Pentecostal
              Christian denomination in Ethiopia. The Ethiopian Full Gospel
              Believers’ Church has its origins in a prayer conference held at
              the University of Addis Ababa in the mid 1965s. The church is
              officially founded in 1967. The Ethiopian Full Gospel Believers’
              Church is a Pentecostal Christian denomination in Ethiopia. The
              Ethiopian Full Gospel Believers’ Church has its origins in a
              prayer conference held at the University of Addis Ababa in the mid
              1965s. The church is officially founded in 1967. The Ethiopian
              Full Gospel Believers’ Church is a Pentecostal Christian
              denomination in Ethiopia. The Ethiopian Full Gospel Believers’
              Church has its origins in a prayer conference held at the
              University of Addis Ababa in the mid 1965s. The church is
              officially founded in 1967.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-midnight-navy mb-8">
            Vision, Mission, Purpose & Values
          </h2>
          <div className="space-y-4">
            {faithSections.map((section, index) => (
              <details
                key={section.title}
                open={index === 0}
                className="group bg-off-white rounded-xl border border-midnight-navy/10 p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-black text-midnight-navy">
                  <span>{section.title}</span>
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
                              <li key={`${section.title}-ol-${idx}`}>{item}</li>
                            ))}
                          </ol>
                        ) : (
                          <ul className="list-disc pl-5 space-y-2">
                            {section.items.map((item, idx) => (
                              <li key={`${section.title}-ul-${idx}`}>{item}</li>
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
                  Statement of Faith
                </h2>
                <p className="text-midnight-navy/70 text-sm mt-2">
                  Core beliefs and doctrinal foundations of the church.
                </p>
              </div>
              <div className="h-12 w-12 rounded-xl bg-linear-to-br from-sky-blue/60 to-deep-blue/60 flex items-center justify-center text-off-white text-xl font-black">
                ✝
              </div>
            </div>
            <ol className="list-decimal pl-6 space-y-3 text-midnight-navy/80 text-base leading-relaxed">
              <li>
                ስድሳ ስድቱን የብሉይና የሐዲስ ኪዳን መጻህፍት የያዘውን መጽሐፍ ቅዱስ የእግዚአብሔር እስትንፋሳ ቃል፣
                ምንም ስህተት የማይገኝበት ፣ እምነትን እና ተግባርን በሚመለከት ሁሉ የመጨረሻው ሥልጣን ያለው ፣ህያው
                እና ዛሬም የሚሰራ ፣ እንደ ሆነ እናምናለን፡፡
              </li>
              <li>
                በእግዚአብሔር አብ፣ በእግዚአብሔር ወልድ፣ በእግዚአብሔር መንፈስ ቅዱስ፣ አንድ አምላክ ፣እናምናለን፡፡
              </li>
              <li>
                በመፍጠር ስራ፣ ፍጥረትን በመጠበቅ ፣ በመገለጥ ፣በመዋጀት እና በመጨረሻው ፍርድ የእግዚአብሔርን ፍፁም
                ሥልጣን እና የበላይነት እናምናለን፡፡
              </li>
              <li>
                ጌታችን ኢየሱስ ክርስቶስ ከአብ የተላከ መሆኑን ፣ በመንፈስ ቅዱስ መፀነሱን ፣ ከድንግል ማርያም
                መወለዱን ፣ፍፁም ሰው ፍፁም አምላክ መሆኑን ፣ ለሰው ልጃች ቤዛ ሆኖ በመስቀል ላይ መሞቱን ፣
                መቀበሩን፣ በሶስተኛው ቀን በአካል ከሙታን መነሳቱን፣ ወደ አብ ማረጉን እና አሁንም በአብ ቀኝ ሆኖ
                ስለ እኛ እንደሚማልድ ፣ ደግሞም በህያዋንና በሙታን ላይ ሊፈርድ በክብርና በግርማ እንደሚመለስ
                እናምናለን፡፡
              </li>
              <li>
                መንፈስ ቅዱስ የመለኮት ባሕርያት ሁሉ ያሉት ፍጹም አምላክ እንደሆነ እና አምልኮ እና ስግደት
                እንድሚገባው እናምናለን፡:
              </li>
              <li>
                ሰው በእግዚአብሔር አምሳል መፈጠሩን ፣ በኃጥያት መውደቁን እና በዚህም ምክንያት የእግዚአብሔር ቁጣና
                ፍርድ ያለበት በደለኛ መሆኑን እናምናለን፡፡
              </li>
              <li>
                ሰው ከኃጢአት ዕዳ ፣ ኃይልና ቅጣት ፣ ሊድን የሚችለው ኃጥያት የለለበት የእግዚአብሔር ልጅ ኢየሱስ
                ክርስቶስ የሰው ምትክ ሆኖ በፈጸመው የቤዛነት ስራ ብቻ በመሆኑ ኃጥያተኛ በእግዚአብሔር ፀጋ በኢየሱስ
                ክርስቶስ በማመን ብቻ እንደሚጽድቅ እናምናል፡፡
              </li>
              <li>
                ኃጥያተኛ በኃጥያቱ ተፀጽቶ ንሰሐ እንዲገባ ፣ በኢየሱስ ክርስቶስ አምኖ ዳግመኛ በመወለድ አዲስ ፍጥረት
                እንዲሆን መንፈስ ቅዱስ በህይወቱ እንሚሰራ እናምናልን፡፡
              </li>
              <li>
                መንፈስ ቅዱስ በአማኝ ህይወት ውስጥ እንደሚኖር ፣ አማኙ በመንፈስ ቅዱስ ሲጠመቅ ኃይልን እንደሚቀበልና
                በልሳን እንደምናገር በየጊዜውም በመንፈስ ቅዱስ እንደሚሞላ እናምናለን፡፡
              </li>
              <li>
                መንፈስ ቅዱስ ዛሬም ቤተ ክርስቲያንን ለማነጽ ለአማኞች ልዩ ልዩ የጸጋ ስጦታዎችን በማካፈል፣ድውዮችን
                በመፈወስ ፣ አጋንትን በማውጣትና ፣እና ተዐምራትን በማድረግ እንመድሰራ እናምናለን፡፡
              </li>
              <li>
                ቤተ ክርስቲያን በክርስቶስ የተሰጣትን የታላቁን ተልዕኮ አደራ በመወጣት ወንጌልን ለሰዎች ሁሉ
                እንድትሰብክ እና አማኞች ደቀ መዛሙርት በማድረግ ለክርስቶስ አካል መታነጽ አስፈላጊውን ሁሉ መፈጸም
                እንደምትችል መንፈስ ቅዱስም ሐዋርያትን፣ ነቢያትን፣ ወንጌል ሰባኪዎችን ፣እረኞችን እና አስተማሪዎችን
                እንዲሁም ሌሎች የአገልግሎት ስጦታዎችን እንደሚሰጥ እናምናለን፡፡
              </li>
              <li>
                ከእግዚአብሔር መንፈስ ዳግም የተወለዱ ሁሉ በሚገኙባት፣ የክርስቶስ አካል በሆነች፣ በአንዲት ቅድስት
                ቤተክርስቲያን እናምናለን፡፡
              </li>
              <li>
                ጌታችን እና መድኅንታችን ኢየሱስ ክርስቶስ ባዘዘው መሰረት ፣ዳግም የተወለደ አማኝ ከክርስቶስ ሞት እና
                ትንሳኤ ጋር መተባበሩን እንዲሁም ለኃጥያት መሞቱን እና ለጽድቅ መነሳቱን ለመግለጽ በአብ፣ በወልድ፣
                እና በመንፈስ ቅዱስ ስም በውኃ ውስጥ በመጥለቅ እንዲጠመቅ እንዲሁም ጌታ ዳግም እስኪመጣ ሞቱን
                ለመናገርና ፣ ከጌታ እና ለአማኞች ጋር ያለውን ኅብረት ለመግለጽ የጌታ እራት እንደሚካፈል
                እናምናለን፡፡
              </li>
              <li>
                በሙታን ትንሳኤ፣ በኃጥያተኞች ላይ በሚደርሰው የዘላለም ፍርድና አማኞች በሚቀበሉት የዘላለም ህይወት
                እናምናለን፡፡
              </li>
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
                  <p className="text-midnight-navy/60 text-sm">{member.role}</p>
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
                  <p className="text-midnight-navy/60 text-sm">{member.role}</p>
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
