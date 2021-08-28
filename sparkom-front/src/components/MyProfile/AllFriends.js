import React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../ProfileSettings/Header";
import FriendCard from "./FriendCard";
import SearchCard from "./SearchCard";
import { friendsSelector } from "../../store/slices/profile";
import { useSelector } from "react-redux";

export default function AllFriends() {
  const myFriendsList = useSelector(friendsSelector);
  return (
    <>
      <NavBar />
      <div className="header-spacer header-spacer-small mb-3"></div>
      <div className="container">
        <div className="row">
          <Header />
          <SearchCard
            title="All Friends (86)"
            placeholder="Search Friends..."
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {myFriendsList?.map((friend, i) => (
            <FriendCard friend={friend} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}
