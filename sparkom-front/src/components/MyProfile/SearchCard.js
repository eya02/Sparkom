import React, { useState } from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
export default function SearchCard({ title, placeholder, sub }) {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    sub(e, searchInput);
  };
  return (
    <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="ui-block responsive-flex">
        <div className="ui-block-title">
          <div className="h6 title">{title}</div>
          <form className="w-search">
            <div className="form-group with-button">
              <input
                className="form-control"
                type="text"
                placeholder={placeholder}
                value={searchInput}
                onChange={handleChange}
              />
              <button style={{ borderRadius: "0" }}>
                <svg className="olymp-magnifying-glass-icon">
                  <use xlinkHref={`${icons}#olymp-magnifying-glass-icon`} />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
