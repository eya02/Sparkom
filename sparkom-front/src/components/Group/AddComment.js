import React from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import profilePic from "../../assets/img/author-main1.jpg";

export default function AddComment() {
  return (
    <form className="comment-form inline-items">
      <div className="post__author author vcard inline-items">
        <img src={profilePic} alt="author" />
        <div className="form-group with-icon-right">
          <textarea className="form-control" placeholder defaultValue={""} />
          <div className="add-options-message">
            <a
              href="."
              className="options-message"
              data-toggle="modal"
              data-target="#update-header-photo"
            >
              <svg className="olymp-camera-icon">
                <use xlinkHref={`${icons}#olymp-camera-icon`} />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <button style={{ width: "150px" }} className="btn btn-md-2 btn-primary">
        Post Comment
      </button>
    </form>
  );
}
