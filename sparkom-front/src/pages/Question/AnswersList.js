import React from "react";
import { isLogged } from "../../helpers/auth";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import Answer from "./Answer";
export default function AnswersList({ questionId, answers }) {
  const jwt = isLogged();

  return (
    <div>
      {answers.map((item, index) => (
        <Answer answer={item} key={index} questionId={questionId} />
      ))}
      <form className="comment-form inline-items">
        <div className="post__author author vcard inline-items">
          <img
            src={`http://localhost:3002/api/user/photo/${
              jwt.user._id
            }?${new Date().getTime()}`}
            alt="author"
          />
          <div className="form-group with-icon-right">
            <textarea className="form-control" placeholder defaultValue={""} />
            <div className="add-options-message">
              <a
                href="#"
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
          Reply
        </button>
      </form>
    </div>
  );
}
