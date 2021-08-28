import React, { useState } from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import profilePic from "../../assets/img/author-main1.jpg";
import AddComment from "./AddComment";
import { Link } from "react-router-dom";
import "../../assets/css/Feed.css";

export default function PostG({
  date,
  content,
  img,
  likesnbr,
  sharenbr,
  commentsnbr,
  comments,
}) {
  const [displayComments, setDisplayComments] = useState(false);
  return (
    <div className="ui-block">
      <article className="hentry post">
        <div className="post__author author vcard inline-items">
          <img src={profilePic} alt="author" />
          <div className="author-date">
            <a className="h6 post__author-name fn" href="02-ProfilePage.html">
              Eya Bellil
            </a>
            <div className="post__date">
              <time className="published" dateTime="2017-03-24T18:18">
                {date}
              </time>
            </div>
          </div>
          <div className="more">
            <svg className="olymp-three-dots-icon">
              <use xlinkHref={`${icons}#olymp-three-dots-icon`} />
            </svg>
            <ul className="more-dropdown">
              <li>
                <a href=".">Report Profile</a>
              </li>
              <li>
                <a href=".">Block Profile</a>
              </li>
              <li>
                <a href=".">Turn Off Notifications</a>
              </li>
            </ul>
          </div>
        </div>
        <p>{content}</p>
        <div className="post-thumb">
          <img src={img} alt="photosd" />
        </div>
        <div className="post-additional-info inline-items">
          <a href="#top" className="post-add-icon inline-items">
            <svg className="olymp-heart-icon">
              <use xlinkHref={`${icons}#olymp-heart-icon`} />
            </svg>
            <span>{likesnbr}</span>
          </a>

          <div className="comments-shared">
            <Link
              className="post-add-icon inline-items"
              onClick={() => setDisplayComments(!displayComments)}
            >
              <svg className="olymp-speech-balloon-icon">
                <use xlinkHref={`${icons}#olymp-speech-balloon-icon`} />
              </svg>
              <span>{commentsnbr}</span>
            </Link>
            <a href="#top" className="post-add-icon inline-items">
              <svg className="olymp-share-icon">
                <use xlinkHref={`${icons}#olymp-share-icon`} />
              </svg>
              <span>{sharenbr}</span>
            </a>
          </div>
        </div>
      </article>
      <ul class="comments-list">{comments && displayComments && comments}</ul>
      <a href="#top" class="more-comments">
        View more comments <span>+</span>
      </a>
      <AddComment />
    </div>
  );
}
