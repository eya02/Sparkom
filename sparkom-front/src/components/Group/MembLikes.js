import React from "react";
import pdf from "../../assets/img/avatar49-sm.jpg";
import pdf1 from "../../assets/img/avatar9-sm.jpg";
export default function MembLikes() {
  return (
    <div className="post-additional-info inline-items">
      <a href="." className="post-add-icon inline-items">
        <svg className="olymp-heart-icon">
          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-heart-icon" />
        </svg>
        <span>36</span>
      </a>
      <ul className="friends-harmonic">
        <li>
          <a href=".">
            <img src={pdf} alt="friend" />
          </a>
        </li>
        <li>
          <a href=".">
            <img src={pdf1} alt="friend" />
          </a>
        </li>
        <li>
          <a href=".">
            <img src={pdf1} alt="friend" />
          </a>
        </li>
        <li>
          <a href=".">
            <img src={pdf1} alt="friend" />
          </a>
        </li>
        <li>
          <a href=".">
            <img src={pdf1} alt="friend" />
          </a>
        </li>
      </ul>
      <div className="names-people-likes">
        <a href=".">You</a>, <a href=".">Elaine</a> and
        <br />
        34 more liked this
      </div>
    </div>
  );
}
