import React from "react";

export default function BioInfo({ title, text }) {
  return (
    <li>
      <span className="title">{title}</span>
      <span className="text">{text}</span>
    </li>
  );
}
