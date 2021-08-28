import React, { useState } from "react";
import icons from "../../../assets/svg-icons/sprites/icons.svg";
import avatar from "../../../assets/img/author-page.jpg";
import { activeUserSelector, avatarSelector } from "../../../store/slices/auth";
import { useSelector } from "react-redux";
import Comment from "./Comment";

export default function PostText({
  date,
  content,
  img,
  likesnbr,
  sharenbr,
  commentsnbr,
  comments,
}) {
  const [displayComments, setDisplayComments] = useState(false);
  const userAvatar = useSelector(avatarSelector);
  const activeUser = useSelector(activeUserSelector);
  return (
    <div className="ui-block">
      <article className="hentry post">
        <div className="post__author author vcard inline-items">
          <img src={userAvatar} alt="author" />

          <div className="author-date">
            <a className="h6 post__author-name fn" href="02-ProfilePage.html">
            {`${activeUser.firstname} ${activeUser.lastname}`}
                        </a>
            <div className="post__date">
              <time className="published" datetime="2017-03-24T18:18">
                19 hours ago
              </time>
            </div>
          </div>

          <div className="more">
            <svg className="olymp-three-dots-icon">
            <use xlinkHref={`${icons}#olymp-three-dots-icon`} />
            </svg>
            <ul className="more-dropdown">
              <li>
                <a href="#">Edit</a>
              </li>
              <li>
                <a href="#">Delete</a>
              </li>
              <li>
                <a href="#">Report</a>
              </li>
            </ul>
          </div>
        </div>

        <p>
          test post
        </p>

        <div className="post-additional-info inline-items">
          <a href="#" className="post-add-icon inline-items">
            <svg className="olymp-heart-icon">
              <use xlinkHref={`${icons}#olymp-heart-icon`} />
            </svg>
            <span>0</span>
          </a>

         

         

          <div className="comments-shared">
            <a href="#" className="post-add-icon inline-items">
              <svg className="olymp-speech-balloon-icon">
                <use xlinkHref={`${icons}#olymp-speech-balloon-icon`} />
              </svg>
              <span>0</span>
            </a>

            <a href="#" className="post-add-icon inline-items">
              <svg className="olymp-share-icon">
                <use xlinkHref={`${icons}#olymp-share-icon`} />
              </svg>
              <span>0</span>
            </a>
          </div>
        </div>
      </article>

  
      

      <form className="comment-form inline-items">
				
        <div className="post__author author vcard inline-items">
          <img src={userAvatar} alt="author" />
      
          <div className="form-group with-icon-right ">
            <textarea className="form-control" placeholder="Write a comment"></textarea>
            <div className="add-options-message">
              <a href="#" className="options-message" data-toggle="modal" data-target="#update-header-photo">
                <svg className="olymp-camera-icon">
                  <use xlinkhref="svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      
      
<div className="d-flex flex-row-reverse">
  <span className="notification-icon ">
        <button className=" notification-icon btn btn-sm btn-primary">Post Comment</button>
        </span>
</div>
        
      
      </form>

    </div>
  );
}
