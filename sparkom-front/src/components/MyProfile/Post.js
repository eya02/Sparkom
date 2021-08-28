import React, { useState } from "react";
import { useSelector } from "react-redux";
import { activeUserSelector } from "../../store/slices/auth";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import profilePic from "../../assets/img/myAvatar.png";
import AddComment from "./AddComment";
import { Link } from "react-router-dom";
import "../../assets/css/Feed.css";

export default function Post({
  date,
  content,
  img,
  likesnbr,
  sharenbr,
  commentsnbr,
  comments,
}) {
  const activeUser = useSelector(activeUserSelector);
  const [displayComments, setDisplayComments] = useState(false);
  return (
    <div className="ui-block">
      <article className="hentry post">
        <div className="post__author author vcard inline-items">
          <img src={profilePic} alt="author" />
          <div className="author-date">
            <a className="h6 post__author-name fn" href="02-ProfilePage.html">
              {`${activeUser.firstname} ${activeUser.lastname}`}
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
                <a href="#top">Edit Post</a>
              </li>
              <li>
                <a href="#top">Delete Post</a>
              </li>
            </ul>
          </div>
        </div>
        <p>{content}</p>
        <div className="post-thumb">
          <img src={img} alt="postImg" />
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
              className="btn btn-link post-add-icon inline-items"
              onClick={() => setDisplayComments(!displayComments)}
              to="/"
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
      <ul className="comments-list">
        {comments && displayComments && comments}
      </ul>
      <span className="more-comments" onClick={() => setDisplayComments(true)}>
        View more comments <span>+</span>
      </span>
      <AddComment />
    </div>
  );
}
