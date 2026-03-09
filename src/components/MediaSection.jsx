import React, { useEffect, useState } from "react";
import { sanityClient } from "../sanity";
import { useLanguage } from "../context/LanguageContext";
import MediaCard from "./MediaCard";
import { useTranslation } from "react-i18next";

export default function MediaSection({
  limit = 3,
  category = null,
  featuredOnly = false,
}) {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [mediaItems, setMediaItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setLoadError(false);
    const langKey = language || "en";
    sanityClient
      .fetch(
        `*[_type == "mediaItem"] | order(date desc){
        _id,
        "title": coalesce(title.${langKey}, title),
        category,
        "speaker": coalesce(speaker.${langKey}, speaker),
        date,
        "description": coalesce(description.${langKey}, description),
        language,
        featured,
        youtube,
        "audioUrl": audio.asset->url,
        "audioFileName": audio.asset->originalFilename,
        "documentUrl": document.asset->url,
        "documentFileName": document.asset->originalFilename
      }`,
      )
      .then((items) => {
        setMediaItems(items || []);
      })
      .catch(() => {
        setLoadError(true);
        setMediaItems([]);
      })
      .finally(() => setIsLoading(false));
  }, [language]);

  const filteredItems = mediaItems.filter((item) => {
    const matchesCategory = category ? item.category === category : true;
    const matchesFeatured = featuredOnly ? Boolean(item.featured) : true;
    return matchesCategory && matchesFeatured;
  });

  const computedLimit = featuredOnly ? 3 : limit;
  const visibleItems = filteredItems.slice(
    0,
    typeof computedLimit === "number" ? computedLimit : undefined,
  );

  return (
    <>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`media-skeleton-${index}`}
              className="border border-midnight-navy/10 bg-white p-6 animate-pulse"
            >
              <div className="h-40 bg-midnight-navy/10 mb-4" />
              <div className="h-4 w-1/3 bg-midnight-navy/10 rounded mb-2" />
              <div className="h-6 w-3/4 bg-midnight-navy/10 rounded mb-3" />
              <div className="h-3 w-full bg-midnight-navy/10 rounded mb-2" />
              <div className="h-3 w-2/3 bg-midnight-navy/10 rounded" />
            </div>
          ))}
        </div>
      ) : loadError ? (
        <p className="text-center text-midnight-navy/70">
          {t("media.error")}
        </p>
      ) : filteredItems.length === 0 ? (
        <p className="text-center text-midnight-navy/70">
          {t("media.no_media")}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item) => (
            <MediaCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}
