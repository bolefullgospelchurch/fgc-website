import React from "react";
import placeholderImage from "../assets/events.jpg"

export default function EventCard({
  event,
  badges,
  dateText,
  countdownText,
  cardClassName
}) {
  const imageSrc = event.imageUrl || placeholderImage;

  return (
    <div
      key={event._id}
      className={`overflow-hidden border border-midnight-navy/10 transition-all hover:-translate-y-1 flex h-full flex-col ${cardClassName}`}
    >
      <div className="relative bg-off-white overflow-hidden">
        <img
          src={imageSrc}
          alt={event.title || "Event image"}
          className="h-64 w-full object-cover transition-transform duration-700 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <span
              key={`${event._id}-badge-${index}`}
              className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 border ${badge.tone}`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
      <div className="p-8 flex flex-col flex-1">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-midnight-navy/40 mb-4 flex items-center gap-3">
          {dateText}
        </div>
        <h3 className="text-2xl md:text-3xl font-black mb-4 text-midnight-navy leading-none tracking-tight">
          {event.title}
        </h3>
        <p className="text-midnight-navy/60 text-sm leading-relaxed mb-8">
          {event.description}
        </p>
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-midnight-navy mt-auto pt-6 border-t border-midnight-navy/5 flex items-center justify-between">
          <span>{countdownText}</span>
          <span className="text-midnight-navy/20">→</span>
        </div>
      </div>
    </div>
  );
}
