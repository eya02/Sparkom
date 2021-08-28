import React from "react";
import Bheader from "./Bheader";
import Alllists from "./AllLists";
import List from "./List";
import Members from "./Members";

import { useServerApi } from "../../hooks/useServerApi";
import { queryApi } from "../../utils/queryApi";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const styles = {
  Listcontainer: {
    display: "flex",
    flexDirection: "row",
    margin: 8,
  },
};
export default function ShowBoard() {
  const { id } = useParams();
  console.log(id);
  const [dms] = useServerApi("lists/" + id);
  const [, , reload] = useServerApi("lists/");
  const deletelist = async (id) => {
    const [err] = await queryApi("lists/delete/" + id, {}, "GET");
    if (err) {
      console.log(err);
    } else await reload();
  };

  const [dm] = useServerApi("boards/detail/" + id);
  const toRender = dm;
  return (
    <div>
      {toRender ? (
        <>
          <NavBar />
          <Members dm={toRender} />
          <Bheader />

          <Alllists dm={toRender} />
          <div class="container">
            <div class="row ml-4">
              <div style={styles.Listcontainer}>
                <div className="row">
                  <List dms={dms} deletelist={deletelist} board_id={id} />
                </div>
              </div>
              <div style={styles.Listcontainer}>
                <div className="row">{/*<ListForm/>*/}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Board not found</p>
      )}
    </div>
  );
}
