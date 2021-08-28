import React from "react";

export default function Badge({ link, img, nbr }) {
  return (
    <li>
      <a href={link}>
        <img src={img} alt="author" />
        {nbr && <div className="label-avatar bg-primary">{nbr}</div>}
      </a>
    </li>
  );
}
