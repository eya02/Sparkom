import React from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import profilePic from "../../assets/img/avatar1.jpg";
export default function FriendRequest() {
  return (
    <li>
      <div className="author-thumb">
        <img src={profilePic} style={{ width: 34, height: 34 }} alt="author" />
      </div>
      <div className="notification-event">
        <a href="#top" className="h6 notification-friend">
          Tamara Romanoff
        </a>
        <span className="chat-message-item">Mutual Friend: Sarah Hetfield</span>
      </div>
      <span className="notification-icon">
        <a href="#top" className="accept-request">
          <span className="icon-add without-text">
            <svg className="olymp-happy-face-icon">
              <use xlinkHref={`${icons}#olymp-happy-face-icon`} />
            </svg>
          </span>
        </a>
        <a href="#top" className="accept-request request-del">
          <span className="icon-minus">
            <svg className="olymp-happy-face-icon">
              <use xlinkHref={`${icons}#olymp-happy-face-icon`} />
            </svg>
          </span>
        </a>
      </span>
    </li>
  );
}
