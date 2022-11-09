import React from "react";

export default function Description({ name, job, website }) {
  return (
    <div className="text-center p-2 mt-2">
      <h1 className="font-bold text-xl">{name}</h1>
      <h2 className="text-base text-purple-300">{job}</h2>
      <h3 className="text-sm">{website}</h3>
    </div>
  );
}
