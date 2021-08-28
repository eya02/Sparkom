import React from "react";

import Addg from "../Group/Add";
import NavBar from "../../components/NavBar/NavBar";
export default function AddGroup() {
  return (
    <div>
      <div className="app">
        {/* Header */}

        <NavBar />
        <div class="header-spacer header-spacer-small mb-3"></div>
        {/* App Body */}
        <div className="app__body">
          <Addg />
        </div>
      </div>
    </div>
  );
}
