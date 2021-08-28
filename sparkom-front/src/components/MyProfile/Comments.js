import React from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import profilePic from "../../assets/img/author-main1.jpg";
import CommentResponses from "./CommentResponses";
export default function Comments() {
  return (
    <>
      <li className="comment-item has-children">
        <div className="post__author author vcard inline-items">
          <img src={profilePic} alt="author" />
          <div className="author-date">
            <a className="h6 post__author-name fn" href="#top">
              Green Rock
            </a>
            <div className="post__date">
              <time className="published" dateTime="2017-03-24T18:18">
                1 hour ago
              </time>
            </div>
          </div>
          <a href="#top" className="more">
            <svg className="olymp-three-dots-icon">
              <use xlinkHref={`${icons}#olymp-three-dots-icon`} />
            </svg>
          </a>
        </div>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugiten, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi en lod nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur adipisci velit en lorem
          ipsum der.
        </p>
        <a href="#top" className="post-add-icon inline-items">
          <svg className="olymp-heart-icon">
            <use xlinkHref={`${icons}#olymp-heart-icon`} />
          </svg>
          <span>5</span>
        </a>
        <a href="#top" className="reply">
          Reply
        </a>
        <CommentResponses />
      </li>
    </>
  );
}
