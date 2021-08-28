import React from "react";
import Header from "../ProfileSettings/Header";
import SideBar from "../ProfileSettings/SideBar";
import Notification from "../NavBar/Notification";
import userAvatar from "../../assets/img/avatar1.jpg";
import img from "../../assets/img/comment-photo.jpg";
import Pagination from "../Pagination";
import NavBar from "../NavBar/NavBar";
export default function AllNotifications() {
  return (
    <>
      <NavBar />
      <div className="header-spacer header-spacer-small mb-3"></div>
      <div className="container">
        <div className="row">
          <Header />
          <SideBar />
          <div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
            <div className="ui-block">
              <div className="ui-block-title">
                <h6 className="title">Notifications</h6>
              </div>

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
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}
