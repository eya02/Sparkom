import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../ProfileSettings/Header";
import FriendCard from "./FriendCard";
import SearchCard from "./SearchCard";
import { allProfilesSelector } from "../../store/slices/profile";
import { useSelector } from "react-redux";
import { queryApi } from "../../utils/queryApi";

export default function AllProfiles() {
  const allProfiles = useSelector(allProfilesSelector);
  const [profiles, setProfiles] = useState(allProfiles);

  const handleChange = async (e, input) => {
    console.log(e.target.value);

    const [res] = await queryApi(`profile/me/all?username=${e.target.value}`);
    setProfiles(res);

    if (e.target.value === "") setProfiles(allProfiles);
  };
  return (
    <>
      <NavBar />
      <div className="header-spacer header-spacer-small mb-3"></div>
      <div className="container">
        <div className="row">
          <Header />
          <SearchCard
            title="All Profiles "
            placeholder="Search Profiles..."
            sub={handleChange}
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {profiles?.map((friend, i) => (
            <FriendCard friend={friend} key={i} />
          ))}
          {!profiles && <div>Empty </div>}
        </div>
      </div>
    </>
  );
}
