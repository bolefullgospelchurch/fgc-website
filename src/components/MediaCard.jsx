import React from "react";
import { useTranslation } from "react-i18next";

const categoryLabels = {
  sermon: "SERMON",
  teaching: "TEACHING",
  worship: "WORSHIP",
  bibleStudy: "BIBLE STUDY",
  other: "MEDIA",
};

export default function MediaCard({ item }) {
  const { t } = useTranslation();
  const badgeLabel = categoryLabels[item.category] || "MEDIA";
  const dateText = new Date(item.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const hasYoutube = Boolean(item.youtube?.videoId);
  const hasAudio = Boolean(item.audioUrl);
  const hasDocument = Boolean(item.documentUrl);
  const youtubeWatchUrl = hasYoutube
    ? `https://www.youtube.com/watch?v=${item.youtube.videoId}`
    : null;

  const redirectToYoutube = () => {
    if (!youtubeWatchUrl) return;
    window.open(youtubeWatchUrl, "_blank", "noopener,noreferrer");
  };

  const CardBody = (
    <>
      {hasYoutube ? (
        <div
          className="relative w-full pt-[56.25%] bg-black"
          onClick={(event) => event.stopPropagation()}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${item.youtube.videoId}`}
            title={item.title || "YouTube video player"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : hasAudio ? (
        <div className="p-4 bg-midnight-navy/5 border-b border-midnight-navy/10">
          <audio controls className="w-full" preload="none">
            <source src={item.audioUrl} />
          </audio>
        </div>
      ) : hasDocument ? (
        <div className="flex items-center justify-center h-48 bg-midnight-navy/90 text-off-white text-sm">
          PDF / Document
        </div>
      ) : (
        <div className="flex items-center justify-center h-48 bg-midnight-navy/90 text-off-white text-sm">
          {t("media.unavailable")}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="h-0.5 w-6 bg-sky-blue mb-4" />
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center text-xs font-bold px-2 py-0.5 bg-sky-blue/10 text-deep-blue border border-sky-blue/20 uppercase tracking-wide">
            {badgeLabel}
          </span>
          <span className="text-xs font-semibold text-midnight-navy/50">
            {dateText}
          </span>
        </div>
        <h3 className="text-lg font-black text-midnight-navy mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-midnight-navy/70 mb-4 flex-1">
          {item.description}
        </p>
        <div className="flex items-baseline justify-between">
          <div className="text-sm font-semibold text-midnight-navy/80">
            {item.speaker}
          </div>
          {(hasAudio || hasDocument) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {hasAudio && (
                <a
                  href={item.audioUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="text-xs font-bold px-3 py-1.5 border border-midnight-navy/20 text-midnight-navy hover:border-deep-blue hover:text-deep-blue transition-colors"
                >
                  {t("media.openAudio")}
                </a>
              )}
              {hasDocument && (
                <a
                  href={item.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="text-xs font-bold px-3 py-1.5 border border-midnight-navy/20 text-midnight-navy hover:border-deep-blue hover:text-deep-blue transition-colors"
                >
                  {t("media.openDocument")}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );

  if (hasYoutube) {
    return (
      <div
        className="bg-white border border-midnight-navy/10 hover:-translate-y-1 transition-transform overflow-hidden cursor-pointer flex flex-col"
        onClick={redirectToYoutube}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          redirectToYoutube();
        }}
      >
        {CardBody}
      </div>
    );
  }

  return (
    <div className="bg-white border border-midnight-navy/10 hover:-translate-y-1 transition-transform overflow-hidden flex flex-col">
      {CardBody}
    </div>
  );
}
