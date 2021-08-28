import React from "react";
import profilePic from "../../../assets/img/author-main1.jpg";
import { activeUserSelector, avatarSelector } from "../../../store/slices/auth";
import { useSelector } from "react-redux";


export default function UserWidget() {
  const userAvatar = useSelector(avatarSelector);
  const activeUser = useSelector(activeUserSelector);

  return (



    <div className="ui-block">

    <div className="widget w-action">
      <a href="/myProfil" className="author-thumb">
        <img src={userAvatar} alt="author" />
      </a>
      <div className="content">
        <h6 className="title">
        {`${activeUser.firstname}`} <br />
        {`${activeUser.lastname}`}
        </h6>
        <span>
          Followers <br />
          <a href="#" class="alert-link text-white">
            5.7k
          </a>
        </span>
        <a href="/myProfil" className="btn btn-bg-secondary ">
          Vist Profil
        </a>
      </div>
    </div>
    </div>
  );
}
