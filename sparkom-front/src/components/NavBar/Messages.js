import React from "react";
import profilePic from "../../assets/img/avatar1.jpg";
export default function Messages() {
  return (
    <li className="message-unread ">
      <div className="author-thumb">
        <img src={profilePic} style={{ width: 34, height: 34 }} alt="author" />
      </div>
      <div className="notification-event ">
        <a href="#top" className="h6 notification-friend">
          Diana Jameson
        </a>
        <span className="chat-message-item">
          Hi James! It’s Diana, I just wanted to let you know that we have to
          reschedule...
        </span>
        <span className="notification-date">
          <time className="entry-date updated" dateTime="2004-07-24T18:18">
            4 hours ago
          </time>
        </span>
      </div>
      <span className="notification-icon">
        <svg className="olymp-chat---messages-icon">
          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-chat---messages-icon" />
        </svg>
      </span>
      <div className="more">
        <svg className="olymp-three-dots-icon">
          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
        </svg>
      </div>
    </li>
  );
}
