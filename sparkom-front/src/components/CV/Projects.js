import React from "react";

export default function Projects({ project }) {
  const { starts_at, ends_at, title, description, url } = project;
  return (
    <div className="item mb-3">
      <div className="item-heading row align-items-center mb-2">
        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
          {title}
        </h4>
        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
          {starts_at?.year} | {ends_at?.year}
        </div>
      </div>
      <div className="item-content">
        <p>
          {description}
          <a href={url} className="theme-link">
            {title}
          </a>
        </p>
      </div>
    </div>
  );
}
