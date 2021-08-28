import React from "react";
import { Link } from "react-router-dom";
export default function AddGrBu() {
  return (
    <div className="col col-xl-12 col-lg-12 col-lg-12 col-sm-12 col-12">
      <div className="ui-block">
        <div className="ui-block-title">
          <div className="h6 title">All Groups</div>
          <div style={{ float: "right" }}>
            <Link to="/add">
              <a
                href="."
                data-toggle="modal"
                data-target="#create-photo-album"
                className="btn btn-primary btn-md-2"
              >
                Create Group
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
