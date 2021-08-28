import React, { useState, useEffect } from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import myAvatar from "../../assets/img/myAvatar.png";
import logo from "../../assets/img/logosparkom.png";
import Notification from "./Notification";
import Messages from "./Messages";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import FriendRequest from "./FriendRequest";
import userAvatar from "../../assets/img/avatar1.jpg";
import img from "../../assets/img/comment-photo.jpg";
import { Link, useHistory } from "react-router-dom";
import { queryApi } from "../../utils/queryApi";
import {
  logout,
  activeUserSelector,
  oAuthSelector,
} from "../../store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectCompanies, fetchCompanies } from "../../store/slices/company";

export default function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const activeUser = useSelector(activeUserSelector);
  const oAuth = useSelector(oAuthSelector);
  const [haveComp, setHaveComp] = useState(false);
  const Logout = async () => {
    if (oAuth) {
      localStorage.clear();
      dispatch(logout());
      history.push("/");
    } else {
      const [res, err] = await queryApi("users/logout", "", "POST", false);
      if (res) {
        dispatch(logout(res));
        history.push("/");
      } else console.log(err);
    }
  };

  const [companies] = useSelector(selectCompanies);
  useEffect(() => {
    if (activeUser != null) {
      dispatch(fetchCompanies());

      setHaveComp(
        companies.filter((comp) => comp.company_owner == activeUser._id)
          .length > 0
      );
    }
  }, []);

  return (
    <header className="header bg-white" id="site-header">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 ">
            <div className="page-title ">
              <Link to="/me">
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: 40, marginTop: -10, marginLeft: -55 }}
                />
              </Link>
            </div>

            <div className="header-content-wrapper">
              <div className="control-block">
                <div className="control-icon">
                  <div className="author-title ">
                    <Link to="/home">
                      <div className="c-secondary">Home</div>
                    </Link>
                  </div>
                </div>

                <div className="control-icon">
                  <div className="author-title ">
                    <Link to="/findjob">
                      <div className="c-secondary">Jobs</div>
                    </Link>
                  </div>
                </div>

                <div className="control-icon">
                  <div className="author-title ">
                    <Link to="/allg">
                      <div className="c-secondary">Groups</div>
                    </Link>
                  </div>
                </div>

                <div className="control-icon">
                  <div className="author-title ">
                    <Link to="/boards">
                      <div className="c-secondary">Boards</div>
                    </Link>
                  </div>
                </div>

                {/* <div className="control-icon">
                  <div className="author-title ">
                    <Link to="/questions">
                      <div className="c-secondary">Forum</div>
                    </Link>
                  </div>
                </div> */}

                <div className="control-icon">
                  <div className="author-title ">
                    <a
                      href={"http://localhost:3006/live"}
                      target="_blank"
                      className="composition-name"
                    >
                      <span style={{ color: "red" }}> Go Live •</span>
                    </a>
                  </div>
                </div>

                <div className="control-icon more has-items">
                  <svg className="olymp-happy-face-icon c-secondary">
                    <PersonAddIcon />
                  </svg>

                  <div className="label-avatar bg-blue">1</div>
                  <div className="more-dropdown more-with-triangle triangle-top-center">
                    <div className="ui-block-title ui-block-title-small">
                      <h6 className="title">FRIEND REQUESTS</h6>
                    </div>
                    <div className="mCustomScrollbar" data-mcs-theme="dark">
                      <ul className="notification-list friend-requests">
                        <FriendRequest />
                      </ul>
                    </div>
                    <Link to="/me/requests" className="view-all bg-blue">
                      Check all Friend Request
                    </Link>
                  </div>
                </div>
                <div className="control-icon more has-items ">
                  <span
                    className="olymp-chat---messages-icon c-secondary"
                    style={{ cursor: "pointer" }}
                  >
                    <ChatOutlinedIcon />
                  </span>
                  <div className="label-avatar bg-purple">2</div>
                  <div className="more-dropdown more-with-triangle triangle-top-center">
                    <div className="ui-block-title ui-block-title-small">
                      <h6 className="title">Chat / Messages</h6>
                    </div>
                    <div className="mCustomScrollbar" data-mcs-theme="dark">
                      <ul className="notification-list chat-message">
                        <Messages />
                      </ul>
                    </div>
                    <Link to="/me/messages" className="view-all bg-purple">
                      View All Messages
                    </Link>
                  </div>
                </div>
                <div className="control-icon more has-items">
                  <svg className="olymp-thunder-icon c-secondary">
                    <NotificationsNoneIcon />
                  </svg>
                  <div className="label-avatar bg-primary">2</div>
                  <div className="more-dropdown more-with-triangle triangle-top-center">
                    <div className="ui-block-title ui-block-title-small">
                      <h6 className="title">Notifications</h6>
                    </div>
                    <div className="mCustomScrollbar" data-mcs-theme="dark">
                      <ul className="notification-list">
                        <Notification
                          userName="Mathilda Binker"
                          description="commented on your new profile status."
                          date="4 hours ago"
                          userAvatar={userAvatar}
                        />
                        <Notification
                          userName="Sarah "
                          description="commented on your new photo."
                          date="Yesterday at 5:32am"
                          userAvatar={userAvatar}
                          notifImg={img}
                          comment="“incredible ! We should see each...”"
                        />
                      </ul>
                    </div>
                    <Link to="/me/notifs" className="view-all bg-primary">
                      View All Notifications
                    </Link>
                  </div>
                </div>
                <div className="author-page author vcard inline-items more">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      src={myAvatar}
                      style={{ width: 36, height: 36 }}
                      className="avatar"
                    />
                    <span className="icon-status online" />
                    <div className="more-dropdown more-with-triangle">
                      <div className="mCustomScrollbar" data-mcs-theme="dark">
                        <div className="ui-block-title ui-block-title-small">
                          <h6 className="title">Your Account</h6>
                        </div>
                        <ul className="account-settings">
                          <Link to="/settings">
                            <li>
                              <a href="29-YourAccount-AccountSettings.html">
                                <svg className="olymp-menu-icon">
                                  <use xlinkHref={`${icons}#olymp-menu-icon`} />
                                </svg>
                                <span>Profile Settings</span>
                              </a>
                            </li>
                          </Link>
                          {haveComp ? (
                            <Link to="/addjob">
                              <li>
                                <a href="/addjob">
                                  <svg className="olymp-menu-icon">
                                    <use
                                      xlinkHref={`${icons}#olymp-menu-icon`}
                                    />
                                  </svg>
                                  <span>Add Job</span>
                                </a>
                              </li>
                            </Link>
                          ) : (
                            ""
                          )}
                          {haveComp ? (
                            ""
                          ) : (
                            <Link to="/registercompany">
                              <li>
                                <a href="/registercompany">
                                  <svg className="olymp-menu-icon">
                                    <use
                                      xlinkHref={`${icons}#olymp-menu-icon`}
                                    />
                                  </svg>
                                  <span>Register Company</span>
                                </a>
                              </li>
                            </Link>
                          )}
                          {haveComp ? (
                            <Link to={`/companyinfos/${activeUser._id}`}>
                              <li>
                                <a href="/companyinfos">
                                  <svg className="olymp-menu-icon">
                                    <use
                                      xlinkHref={`${icons}#olymp-menu-icon`}
                                    />
                                  </svg>
                                  <span>Company Informations</span>
                                </a>
                              </li>
                            </Link>
                          ) : (
                            ""
                          )}
                          {haveComp ? (
                            <Link to="/myschedule">
                              <li>
                                <a href="/myschedule">
                                  <svg className="olymp-menu-icon">
                                    <use
                                      xlinkHref={`${icons}#olymp-menu-icon`}
                                    />
                                  </svg>
                                  <span>My Scheduler</span>
                                </a>
                              </li>
                            </Link>
                          ) : (
                            ""
                          )}
                          <li onClick={Logout}>
                            <Link to="/">
                              <svg className="olymp-logout-icon">
                                <use xlinkHref={`${icons}#olymp-logout-icon`} />
                              </svg>
                              <span>Log Out</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Link to="/me" className="author-name fn">
                    <div className="author-title ">
                      <div className="c-secondary">{`${activeUser.firstname} ${activeUser.lastname}`}</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
