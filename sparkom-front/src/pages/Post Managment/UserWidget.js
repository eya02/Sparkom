import React from "react";
import { useSelector } from "react-redux";

import { activeUserSelector } from "../../store/slices/auth";

export default function UserWidget() {
  const activeUser = useSelector(activeUserSelector);
  return (
    <div className="ui-block">
      <div className="widget w-action">
        <a href="/myProfil" className="author-thumb">
          <img
            src={`http://localhost:3002/api/user/photo/${
              activeUser._id
            }?${new Date().getTime()}`}
            alt="author"
            width="124"
            height="124"
          />
        </a>
        <div className="content">
          <h6 className="title">{activeUser.name}</h6>
          <span>
            Followers <br />
            <a href="#" class="alert-link text-white">
              6
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
