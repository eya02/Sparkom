import React from "react";
import cover from "../../assets/img/top-header4.png";
import { activeUserSelector, avatarSelector } from "../../store/slices/auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import myAvatar from "../../assets/img/myAvatar.png";
export default function Header() {
  const activeUser = useSelector(activeUserSelector);
  const userAvatar = useSelector(avatarSelector);
  return (
    <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="ui-block">
        <div className="top-header">
          <div className="top-header-thumb">
            <img src={cover} alt="nature" />
          </div>
          <div className="profile-section">
            <div className="row">
              <div className="col col-lg-5 col-md-5 col-sm-12 col-12">
                <ul className="profile-menu">
                  <li>
                    <Link to="/me">About</Link>
                  </li>
                  <li>
                    <Link to="/me/friends">Friends</Link>
                  </li>
                </ul>
              </div>
              <div className="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                <ul className="profile-menu">
                  <li>
                    <a href="#top">Photos</a>
                  </li>
                  <li>
                    <a href="09-ProfilePage-Videos.html">Videos</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="top-header-author">
              <div className="author-thumb">
                <input type="file" style={{ display: "none" }} />
                <img
                  src={userAvatar || myAvatar}
                  style={{ width: 130, height: 130 }}
                  className="img-fluid rounded pr-2"
                  alt="author"
                />
              </div>
              <div className="author-content">
                <Link to="/me" className="h4 author-name">
                  {`${activeUser.firstname} ${activeUser.lastname}`}
                  <VerifiedUserIcon className="ml-2 c-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
