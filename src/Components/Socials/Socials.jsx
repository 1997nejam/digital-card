import React from "react";

export default function Socials({ email, linkedIn }) {
  return (
    <div className="p-6">
      <ul className="flex justify-between">
        <button className="text-sm w-28 p-1.5 rounded-md inline-block bg-slate-50 text-slate-900 text-center">
          <a href={`mailto:${email}`}>
            <i class="fa-solid fa-envelope"></i> Email
          </a>
        </button>
        <button className="text-sm w-28 p-1.5 rounded-md inline-block text-slate-50 bg-slate-900 text-center">
          <a href={linkedIn}>
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </button>
      </ul>
    </div>
  );
}
