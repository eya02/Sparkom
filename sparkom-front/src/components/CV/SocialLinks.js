import React from "react";

export default function SocialLinks({ icon, link, username }) {
  return (
    <li className="list-inline-item mb-lg-0 mr-lg-3">
      <a className="resume-link" href={link}>
        <i className={icon} />
        <span className="d-none d-lg-inline-block text-muted">{username}</span>
      </a>
    </li>
  );
}
