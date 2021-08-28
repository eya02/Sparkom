import React from "react";
import Bheader from "./Bheader";

import CardForm2 from "./CardForm2";
import { useParams } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Allcards from "./Allcards";
import { useServerApi } from "../../hooks/useServerApi";

export default function CardDetails() {
  const { idc } = useParams();
  console.log("detail", idc);

  const [dm] = useServerApi("cards/detail/" + idc);
  const toRender = dm;
  return (
    <div>
      {toRender ? (
        <div>
          <NavBar />
          <Bheader />
          <Allcards idl={dm.list_id} />
          <div class="container">
            <CardForm2 dm={toRender} idc={idc} />
          </div>
          <br></br>
          <div></div>
        </div>
      ) : (
        <p>Board not found</p>
      )}
    </div>
  );
}
