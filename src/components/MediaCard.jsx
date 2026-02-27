import React from "react";

const categoryLabels = {
  sermon: "SERMON",
  teaching: "TEACHING",
  worship: "WORSHIP",
  bibleStudy: "BIBLE STUDY",
  other: "MEDIA"
};

export default function MediaCard({ item }) {
  const badgeLabel = categoryLabels[item.category] || "MEDIA";
  const dateText = new Date(item.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="bg-white border border-midnight-navy/10 hover:-translate-y-1 transition-transform overflow-hidden cursor-pointer flex flex-col">
      {item.youtube?.videoId ? (
        <div className="relative w-full pt-[56.25%] bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${item.youtube.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="flex items-center justify-center h-48 bg-midnight-navy/90 text-off-white text-sm">
          Media coming soon
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="h-[2px] w-6 bg-sky-blue mb-4" />
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
        <div className="text-sm font-semibold text-midnight-navy/80">
          {item.speaker}
        </div>
      </div>
    </div>
  );
}
