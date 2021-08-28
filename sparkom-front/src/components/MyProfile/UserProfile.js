import React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../ProfileSettings/Header";
import Feed from "./Feed";
import MyBio from "./MyBio";
import UserProfileCard from "./UserProfileCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function UserProfile() {
  const { id } = useParams();
  const userProfile = useSelector((state) =>
    state.profile.allProfiles.find((profile) => profile._id === id)
  );

  return (
    <>
      <NavBar />
      <div className="header-spacer header-spacer-small mb-3"></div>
      <div className="container">
        <div className="row">
          <Header />
          <div className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-12 ">
            <UserProfileCard profile={userProfile} />
          </div>
          <Feed />
          <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
            <MyBio />
          </div>
        </div>
      </div>
    </>
  );
}
