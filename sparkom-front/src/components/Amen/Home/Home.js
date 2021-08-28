import React from "react";
import NavBar from "../../NavBar/NavBar";
import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="header-spacer header-spacer-small mb-3"></div>
      <div class="container">
        <div class="row">
          <LeftSidebar />
          <Feed />
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
