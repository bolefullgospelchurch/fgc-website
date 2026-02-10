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
      className={`rounded-2xl overflow-hidden border transition-shadow flex h-full flex-col ${cardClassName}`}
    >
      <div className="relative bg-midnight-navy/10">
        <img
          src={imageSrc}
          alt={event.title || "Event image"}
          className="h-52 w-full object-cover sm:h-56"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-midnight-navy/70 via-midnight-navy/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <span
              key={`${event._id}-badge-${index}`}
              className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border ${badge.tone}`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="text-xs font-semibold text-midnight-navy/70 mb-2">
          {dateText}
        </div>
        <h3 className="text-2xl font-black mb-2 text-midnight-navy">
          {event.title}
        </h3>
        <p className="text-midnight-navy/70 text-sm mb-4">
          {event.description}
        </p>
        <div className="text-sm font-semibold text-midnight-navy mt-auto">
          {countdownText}
        </div>
      </div>
    </div>
  );
}
