import React from "react";

export default function Education({ educ }) {
  const { starts_at, ends_at, field_of_study, degree_name, school } = educ;

  return (
    <li className="mb-3">
      <div className="resume-degree font-weight-bold">
        {degree_name || "Baccalauréat"} {field_of_study}
      </div>
      <div className="resume-degree-org text-muted">{school}</div>
      <div className="resume-degree-time text-muted">
        {starts_at?.year} - {ends_at?.year}{" "}
      </div>
    </li>
  );
}
