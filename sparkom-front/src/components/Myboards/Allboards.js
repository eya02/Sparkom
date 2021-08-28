import React from "react";
import Bheader from "./Bheader";
import Boards from "./Boards";
import NavBar from "../NavBar/NavBar";

export default function Allboards() {
  return (
    <div >
        <NavBar />
        <Bheader/>
        <Boards/>
     
    </div>
  );
}
