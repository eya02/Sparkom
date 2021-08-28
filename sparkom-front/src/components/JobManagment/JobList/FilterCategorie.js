import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "../../../assets/css/Jobs.css";

function FilterCategorie() {
  return (
    <div>
      <div>
        <div className="ui-block">
          <div className="ui-block-title">
            <h6 className="title">Categorie</h6>
            <a href="#top" className="more">
              <svg className="olymp-three-dots-icon">
                <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
              </svg>
            </a>
          </div>
          <div className="ui-block-content">
            {/* W-Personal-Info */}
            <ul className="widget w-personal-info item-block">
              <li>
                <span className="title">Categorie 1</span>
                <Checkbox inputProps={{ "aria-label": "uncontrolled" }} />
              </li>
              <li>
                <span className="title">Categorie 2</span>
                <Checkbox inputProps={{ "aria-label": "uncontrolled" }} />
              </li>
              <li>
                <span className="title">Categorie 3</span>
                <Checkbox inputProps={{ "aria-label": "uncontrolled" }} />{" "}
              </li>
              <li>
                <span className="title">Categorie 4</span>
                <Checkbox inputProps={{ "aria-label": "uncontrolled" }} />{" "}
              </li>
            </ul>
            {/* ... end W-Personal-Info */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterCategorie;
