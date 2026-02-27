import React, { useEffect, useState } from "react";
import { sanityClient } from "../sanity";
import { useLanguage } from "../context/LanguageContext";
import MediaCard from "./MediaCard";

export default function MediaSection({ limit = 3, category = null }) {
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
        youtube
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

  const filteredItems = category
    ? mediaItems.filter((item) => item.category === category)
    : mediaItems;
  const visibleItems = filteredItems.slice(0, typeof limit === "number" ? limit : undefined);

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
          Media is unavailable right now.
        </p>
      ) : filteredItems.length === 0 ? (
        <p className="text-center text-midnight-navy/70">
          No media items available yet.
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
