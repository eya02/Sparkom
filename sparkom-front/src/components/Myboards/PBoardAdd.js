import React from "react";
import Bheader from "./Bheader";

import Form3 from "./Form3";

import NavBar from "../NavBar/NavBar";
export default function PBoardAdd() {
  return (
    <div>
      <NavBar />
      <Bheader />
      <div class="container">
        <Form3 />
      </div>
    </div>
  );
}
