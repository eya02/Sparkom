import React from "react";
import "../../../assets/css/Jobs.css";

function Filter() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="ui-block responsive-flex1200">
            <div className="ui-block-title">
              <form className="w-search">
                <div className="form-group with-button">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search For a Job ..."
                  />
                  <button>
                    <svg className="olymp-magnifying-glass-icon">
                      <use xlinkHref="../../../assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
