import React from "react";

export default function Languages({ language, level }) {
  return (
    <li className="mb-2">
      {language} <span className="text-muted">{level}</span>
    </li>
  );
}
