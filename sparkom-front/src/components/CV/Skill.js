import React from "react";
import { Link } from "react-router-dom";
export default function skill({ name, confirmed }) {
  return (
    <>
      {confirmed && (
        <li className="mb-2">
          <i className="fas fa-check-circle mr-2" style={{ color: "green" }} />
          {name}
        </li>
      )}
      {!confirmed && (
        <li className="mb-2">
          <i className="fas fa-ban mr-2 " />
          {name}
          <Link to="/quiz" style={{ marginLeft: 60 }}>
            Confirm Skill
          </Link>
        </li>
      )}
    </>
  );
}
