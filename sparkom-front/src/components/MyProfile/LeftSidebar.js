import React from "react";
import MyBadges from "./MyBadges";
import MyBio from "./MyBio";

export default function LeftSidebar() {
  return (
    <div className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-12 col-sm-12 col-12 ">
      <MyBio />
      <MyBadges />
    </div>
  );
}
