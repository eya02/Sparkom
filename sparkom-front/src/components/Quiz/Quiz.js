import React from "react";

import Header from "../ProfileSettings/Header";
import LeftSidebar from "../MyProfile/LeftSidebar";
import Questions from "./Questions";
import NavBar from "../NavBar/NavBar";

export default function Quiz() {
  return (
    <>
      <NavBar />
      <div className="header-spacer header-spacer-small mb-3"></div>
      <div className="container">
        <div className="row">
          {/* Header */}
          <Header />
          {/* App Body */}

          <LeftSidebar />

          {/* Feed */}
          <div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-1 col-md-12 col-sm-12 col-12">
            <Questions />
          </div>
          {/* Widgets */}
        </div>
      </div>
    </>
  );
}
