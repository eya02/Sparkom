import profilePic from "../../assets/img/author-main1.jpg";
import React, { useState } from "react";
import { queryApi } from "../../utils/queryApi";
import SweetAlert from "../SweetAlert";
import { useDispatch, useSelector } from "react-redux";
import {
  unfollowFriend,
  updateProfile,
  friendsSelector,
} from "../../store/slices/profile";

export default function UserProfileCard({ profile }) {
  const dispatch = useDispatch();

  const myFriendsList = useSelector(friendsSelector);
  const isFollowed = myFriendsList.some((friend) => {
    return friend._id === profile._id;
  });
  const [followers, setFollowers] = useState(profile?.followers.length);

  const { my_id, _id } = profile;
  const { avatar, username } = my_id;
  const [followed, setFollowed] = useState(isFollowed);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [res, err] = await queryApi(`profile/me/follow/${_id}`, "", "POST");
    if (err) {
      SweetAlert("Error !", err, "error");
    } else {
      dispatch(unfollowFriend(_id));
      dispatch(updateProfile(res));
      followed ? setFollowers((u) => u - 1) : setFollowers((u) => u + 1);
      setFollowed(!followed);
    }
  };

  return (
    <div className="ui-block ">
      <div className="widget w-action  ">
        <a href="/myProfil" className="author-thumb">
          <img src={avatar || profilePic} alt="author" />
        </a>
        <div className="content">
          <h6 className="title">
            {username} <br />
          </h6>
          <span>
            Followers <br />
            <a href="#top" className="alert-link text-white">
              {followers}
            </a>
          </span>
          <button
            type="submit"
            className="btn btn-bg-secondary "
            onClick={handleSubmit}
          >
            {followed ? "UnFollow" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
}
