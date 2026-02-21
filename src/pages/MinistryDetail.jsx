import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanityClient } from "../sanity";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import MinistryHeader from "../components/ministries/MinistryHeader";
import MinistryDetails from "../components/ministries/MinistryDetails";
import MinistryLeaders from "../components/ministries/MinistryLeaders";
import MinistryGallery from "../components/ministries/MinistryGallery";
import { useTranslation } from "react-i18next";

const ministryBySlugQuery = `*[_type == "ministry" && slug.current == $slug][0]{
  _id,
  title,
  description,
  meetingDayAndTime,
  location,
  "slug": slug.current,
  "heroImageUrl": heroImage.asset->url,
  "galleryUrls": gallery[].asset->url,
  leaders[]{
    name,
    role,
    "photoUrl": photo.asset->url
  },
  contactEmail,
  contactPhone
}`;

function MinistryDetail() {
  const { slug } = useParams();
  const { language: lang } = useLanguage();
  const { t } = useTranslation();
  const [ministry, setMinistry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    setIsLoading(true);
    sanityClient
      .fetch(ministryBySlugQuery, { slug })
      .then((data) => setMinistry(data || null))
      .finally(() => setIsLoading(false));
  }, [slug]);

  return (
    <main className="min-h-screen bg-sky-blue/20">
      <Navbar transparent />
      {isLoading ? (
        <section className="px-4 py-24">
          <div className="max-w-4xl mx-auto text-center text-midnight-navy/70">
            {t("ministries.loading")}
          </div>
        </section>
      ) : ministry ? (
        <>
          <MinistryHeader ministry={ministry} lang={lang} />
          <MinistryDetails ministry={ministry} lang={lang} />
          <MinistryLeaders leaders={ministry.leaders} lang={lang} />
          <MinistryGallery
            images={ministry.galleryUrls}
            title={t("ministries.gallery")}
          />
        </>
      ) : (
        <section className="px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-midnight-navy mb-4">
              {t("ministries.notFoundTitle")}
            </h2>
            <p className="text-midnight-navy/70">
              {t("ministries.notFoundBody")}
            </p>
          </div>
        </section>
      )}
    </main>
  );
}

export default MinistryDetail;
