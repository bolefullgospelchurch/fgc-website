import React from "react";

export default function EventCard({
  event,
  badges,
  dateText,
  countdownText,
  cardClassName
}) {
  return (
    <div
      key={event._id}
      className={`rounded-lg p-6 transition-shadow ${cardClassName}`}
    >
      <div className="flex flex-wrap gap-2 mb-3 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <span
              key={`${event._id}-badge-${index}`}
              className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border ${badge.tone}`}
            >
              {badge.label}
            </span>
          ))}
        </div>
        <div className="text-xs font-semibold text-midnight-navy/80">
          {dateText}
        </div>
      </div>
      <h3 className="text-2xl font-black mb-2 text-midnight-navy">
        {event.title}
      </h3>
      <p className="text-midnight-navy/70 text-sm mb-4">
        {event.description}
      </p>
      <div className="text-sm font-semibold text-midnight-navy">
        {countdownText}
      </div>
    </div>
  );
}
