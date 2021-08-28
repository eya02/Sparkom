import React from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import profilePic from "../../assets/img/author-main1.jpg";
export default function CommentResponses() {
  return (
    <ul className="children">
      <li className="comment-item">
        <div className="post__author author vcard inline-items">
          <img src={profilePic} alt="author" />
          <div className="author-date">
            <a className="h6 post__author-name fn" href="#top">
              Nicholas Grisom
            </a>
            <div className="post__date">
              <time className="published" dateTime="2017-03-24T18:18">
                24 mins ago
              </time>
            </div>
          </div>
          <a href="#top" className="more">
            <svg className="olymp-three-dots-icon">
              <use xlinkHref={`${icons}#olymp-three-dots-icon`} />
            </svg>
          </a>
        </div>
        <p>Excepteur sint occaecat cupidatat non proident.</p>
        <a href="#top" className="post-add-icon inline-items">
          <svg className="olymp-heart-icon">
            <use xlinkHref={`${icons}#olymp-heart-icon`} />
          </svg>
          <span>0</span>
        </a>
        <a href="#top" className="reply">
          Reply
        </a>
      </li>
    </ul>
  );
}
