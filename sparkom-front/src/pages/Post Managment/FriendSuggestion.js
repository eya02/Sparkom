import React from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import avatar from "../../assets/img/avatar38-sm.jpg";
export default function FriendSuggestion() {
  const friendSug = (name, nbrCommon) => {
    return (
      <li className="inline-items">
        <div className="author-thumb">
          <img src={avatar} alt="author" />
        </div>
        <div className="notification-event">
          <a href="#" className="h6 notification-friend">
            {name}
          </a>
          <span className="chat-message-item">
            {nbrCommon} Friends in Common
          </span>
        </div>
        <span className="notification-icon">
          <a href="#" className="accept-request">
            <span className="icon-add without-text">
              <svg className="olymp-happy-face-icon">
                <use xlinkHref={`${icons}#olymp-happy-face-icon`} />
              </svg>
            </span>
          </a>
        </span>
      </li>
    );
  };

  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Friend Suggestions</h6>
        <a href="#" className="more">
          <svg className="olymp-three-dots-icon">
            <use xlinkHref={`${icons}#olymp-three-dots-icon`} />
          </svg>
        </a>
      </div>

      <ul className="widget w-friend-pages-added notification-list friend-requests">
        {friendSug("User", "13")}
        {friendSug("User", "8")}
        {friendSug("User", "2")}
      </ul>
    </div>
  );
}
