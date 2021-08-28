import React from "react";

import HeaderG from "../Group/HeaderG";

import NavBar from "../../components/NavBar/NavBar";
import Statics from "../Group/StaticsGroup";
import { useServerApi } from "../../hooks/useServerApi";
import { useParams } from "react-router-dom";
export default function StaticsPageGroup() {
  const { id } = useParams();
  const [dm] = useServerApi("group/getdev/" + id);
  const toRender = dm;
  return (
    <div>
      <div className="app">
        {/* Header */}
        <NavBar />

        <div class="header-spacer header-spacer-small mb-3"></div>
        {toRender ? (
          <>
            <HeaderG dm={toRender} />

            <Statics dm={toRender} />
          </>
        ) : (
          <p>Group not found</p>
        )}
      </div>
    </div>
  );
}
