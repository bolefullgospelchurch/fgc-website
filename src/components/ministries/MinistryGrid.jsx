import React from "react";
import MinistryCard from "./MinistryCard";

export default function MinistryGrid({ ministries, lang }) {
  if (!Array.isArray(ministries) || ministries.length === 0) return null;

  return (
    <div className="grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {ministries.map((ministry) => (
        <MinistryCard key={ministry._id} ministry={ministry} lang={lang} />
      ))}
    </div>
  );
}
