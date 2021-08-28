import React, { useState } from "react";
import Bheader from "./Bheader";
import Alllists from "./AllLists";

import Members from "./Members";
import { useServerApi } from "../../hooks/useServerApi";

import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

import axios from "axios";
import OneList from "./OneList";
export default function CardLists() {
  const { id, idl } = useParams();
  console.log("carrrd", id, idl);
  const [dms] = useServerApi("lists/");

  const [data, setData] = React.useState([]);

  const [delivs, setdelivs] = useState(false);

  console.log("deliv1", delivs.board_id);

  React.useEffect(() => {
    const getdelivs = async () => {
      try {
        const userPosts = await axios.get(
          "http://localhost:3002/cards/board/" + idl
        );
        console.log("dataaa", userPosts.data.board_id);
        setdelivs(userPosts.data); // set State
      } catch (err) {
        console.error(err.message);
      }
    };
    getdelivs();
    setData(dms);
  }, [dms, idl]);
  const [dm] = useServerApi("cards/detail/" + id);
  const toRender = dm;

  return (
    <div>
      {toRender ? (
        <>
          <NavBar />
          <Members />
          <Bheader />
          <Alllists dm={toRender} />
          <div class="container">
            <div class="row">
              <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="ui-block">
                  <div class="ui-block-title">
                    <h6 class="title">
                      Move card to another list of the board
                    </h6>
                  </div>
                </div>
              </div>
              {data &&
                data.map((item, i) => {
                  return (
                    <OneList
                      dm={item}
                      idl={idl}
                      card={dm}
                      board_id={delivs.board_id}
                      key={item._id}
                    />
                  );
                })}
              {/*<Alllists dm={toRender}/>*/}
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}
