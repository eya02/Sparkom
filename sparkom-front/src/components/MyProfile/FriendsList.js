import React from "react";
import avatar3 from "../../assets/img/avatar24-sm.jpg";

import { Link } from "react-router-dom";
import { friendsSelector } from "../../store/slices/profile";
import { useSelector } from "react-redux";
export default function FriendsList() {
  const myFriendsList = useSelector(friendsSelector);
  const friendIcon = (avatar) => {
    return (
      <li>
        <a href="#top">
          <img src={avatar} alt="author" />
        </a>
      </li>
    );
  };

  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Friends {myFriendsList.length}</h6>
      </div>
      <div className="ui-block-content">
        <ul className="widget w-faved-page js-zoom-gallery">
          {myFriendsList?.map((friend) =>
            friendIcon(friend.my_id.avatar || avatar3)
          )}
          {}

          <li className="all-users">
            <Link to="/me/friends">+ {myFriendsList.length}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
