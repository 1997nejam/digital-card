import React from "react";

export default function Avatar({ image, name }) {
  return (
    <div>
      <img
        src={image}
        alt={name}
        className={`h-72 w-72 object-cover rounded-t-xl`}
      />
    </div>
  );
}
