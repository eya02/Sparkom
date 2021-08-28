import React, { useState } from "react";
import icons from "../../../assets/svg-icons/sprites/icons.svg";
import avatar from "../../../assets/img/author-page.jpg";

import imgLikers from "../../../assets/img/friend-harmonic7.jpg";
import Comment from "./Comment";
import Photo from "../../../assets/img/video4.jpg";

export default function PostVideo({
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
          <img src={avatar} alt="author" />

          <div className="author-date">
            <a className="h6 post__author-name fn" href="02-ProfilePage.html">
              James Spiegel
            </a>
            <div className="post__date">
              <time className="published" datetime="2017-03-24T18:18">
                15 hours ago
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
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque.
        </p>
        

        <div className="video-player">
						<a href="https://youtube.com/watch?v=excVFQ2TWig" className="play-video">
							<svg className="olymp-play-icon"><use xlinkhref={`${icons}#olymp-play-icon`}  /> 
              </svg>
						</a>
						<img src={Photo} alt="video" />
						<div className="video-content">
							<div className="h4 title">System of a Revenge - Hypnotize (LIVE)</div>
							<time className="published" datetime="2017-03-24T18:18">3:26</time>
						</div>
						<div className="overlay"></div>
					</div>

        <div className="post-additional-info inline-items">
          <a href="#" className="post-add-icon inline-items">
            <svg className="olymp-heart-icon">
              <use xlinkHref={`${icons}#olymp-heart-icon`} />
            </svg>
            <span>8</span>
          </a>

          <ul className="friends-harmonic">
            <li>
              <a href="#">
                <img src={imgLikers} alt="friend" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={imgLikers} alt="friend" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={imgLikers} alt="friend" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={imgLikers} alt="friend" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={imgLikers} alt="friend" />
              </a>
            </li>
          </ul>

          <div className="names-people-likes">
            <a href="#">Jenny</a> <a href="#">Robert</a> and
            <br />6 more liked this
          </div>

          <div className="comments-shared">
            <a href="#" className="post-add-icon inline-items">
              <svg className="olymp-speech-balloon-icon">
                <use xlinkHref={`${icons}#olymp-speech-balloon-icon`} />
              </svg>
              <span>17</span>
            </a>

            <a href="#" className="post-add-icon inline-items">
              <svg className="olymp-share-icon">
                <use xlinkHref={`${icons}#olymp-share-icon`} />
              </svg>
              <span>24</span>
            </a>
          </div>
        </div>
      </article>

      <Comment />
      <a href="#" className="more-comments">View more comments <span>+</span></a>

      <form className="comment-form inline-items">
				
        <div className="post__author author vcard inline-items">
          <img src={avatar} alt="author" />
      
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
