import React from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import friendCover from "../../assets/img/friend1.jpg";
import friendAvatar from "../../assets/img/avatar1.jpg";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { Link } from "react-router-dom";
export default function FriendCard({ friend }) {
  console.log(friend);
  const { my_id, followers, following, _id } = friend;
  const { username, email, avatar } = my_id;
  return (
    <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
      <div className="ui-block">
        {/* Friend Item */}
        <div className="friend-item">
          <div className="friend-header-thumb">
            <img src={friendCover} alt="friend" />
          </div>
          <div className="friend-item-content">
            <div className="more">
              <svg className="olymp-three-dots-icon">
                <use xlinkHref={`${icons}#olymp-three-dots-icon`} />
              </svg>
              <ul className="more-dropdown">
                <li>
                  <a href="#top">Report Profile</a>
                </li>
                <li>
                  <a href="#top">Block Profile</a>
                </li>
                <li>
                  <a href="#top">Turn Off Notifications</a>
                </li>
              </ul>
            </div>
            <div className="friend-avatar">
              <div className="author-thumb">
                <img src={avatar || friendAvatar} alt="author" />
              </div>
              <div className="author-content">
                <Link to={`/user/${_id}`} className="h5 author-name">
                  {username}
                </Link>
                <div className="country">{email}</div>
              </div>
            </div>
            <div className="swiper-container" data-slide="fade">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="friend-count" data-swiper-parallax={-500}>
                    <a href="#top" className="friend-count-item">
                      <div className="h6">{following.length}</div>
                      <div className="title">Following</div>
                    </a>
                    <a href="#top" className="friend-count-item">
                      <div className="h6">{followers.length}</div>
                      <div className="title">Followers</div>
                    </a>
                  </div>
                  <div
                    className="control-block-button"
                    data-swiper-parallax={-100}
                  >
                    <Link
                      to={`/user/${_id}`}
                      className="btn btn-control bg-blue "
                    >
                      <svg className="olymp-happy-face-icon pb-2">
                        <VisibilityOutlinedIcon />
                      </svg>
                    </Link>
                    <a href="#top" className="btn btn-control bg-purple">
                      <svg className="olymp-chat---messages-icon pb-2">
                        <use
                          xlinkHref={`${icons}#olymp-chat---messages-icon`}
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <p className="friend-about" data-swiper-parallax={-500}>
                    Hi!, I’m Marina and I’m a Community Manager for “Gametube”.
                    Gamer and full-time mother.
                  </p>
                  <div className="friend-since" data-swiper-parallax={-100}>
                    <span>Friends Since:</span>
                    <div className="h6">December 2014</div>
                  </div>
                </div>
              </div>
              {/* If we need pagination */}
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
