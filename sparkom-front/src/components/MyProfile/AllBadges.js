import React from "react";
import Header from "../ProfileSettings/Header";
import BadgeDescription from "./BadgeDescription";
import SearchCard from "./SearchCard";
import jsBadge from "../../assets/img/jsBadge.png";
import phpBadge from "../../assets/img/phpBadge.png";
import badgeimg2 from "../../assets/img/badge2.png";
import badgeimg3 from "../../assets/img/badge3.png";
import NavBar from "../NavBar/NavBar";

export default function AllBadges() {
  return (
    <>
      <NavBar />
      <div className="header-spacer header-spacer-small mb-3"></div>
      <div className="container">
        <div className="row">
          <Header />
          <SearchCard title="In Progress (20)" placeholder="Search Badges..." />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <BadgeDescription
              img={badgeimg3}
              title="Sparkom User"
              description="Congratulations! You are now a Sparkom Member."
              progress={100}
            />
            <BadgeDescription
              img={badgeimg2}
              title="Friendly User"
              description="Add new Friends to Unlock this Badge"
              progress={60}
            />

            <BadgeDescription
              img={jsBadge}
              title="Javascript Master"
              description="Congratulations! You are now a Javascript Master."
              progress={100}
            />

            <BadgeDescription
              img={phpBadge}
              title="PHP Beginner"
              description="You are Almost there"
              progress={30}
            />
          </div>
        </div>
      </div>
    </>
  );
}
