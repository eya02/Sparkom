import React from "react";

export default function Experience({ experience }) {
  const {
    starts_at,
    ends_at,
    company,
    title,
    description,
    company_linkedin_profile_url,
  } = experience;
  return (
    <div className="item mb-3">
      <div className="item-heading row align-items-center mb-2">
        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
          {title}
        </h4>
        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
          <a
            href={company_linkedin_profile_url}
            target="_blank"
            rel="noreferrer"
          >
            {company}
            {" | "}
          </a>
          {starts_at?.month &&
            starts_at?.year &&
            `${starts_at?.month}/${starts_at?.year}`}
          {ends_at?.month &&
            ends_at?.year &&
            `${ends_at?.month}/${ends_at?.year}`}
        </div>
      </div>
      <div className="item-content">
        <p>{description || "Add Experience Description here"}</p>
      </div>
    </div>
  );
}
