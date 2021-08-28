import React from "react";
import Bheader from "./Bheader";
import Alllists from "./AllLists";
import Members from "./Members";
import { useServerApi } from "../../hooks/useServerApi";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import AllUsers from "./AllUsers";

export default function AddMembers() {
  const { id } = useParams();
  console.log(id);
  const [dms] = useServerApi("boards/get/Allusers");
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(dms);
  }, [dms]);

  const [dm] = useServerApi("boards/detail/" + id);
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
                    <h6 class="title">Add members to the board</h6>
                  </div>
                </div>
              </div>
              {data &&
                data.map((item, i) => {
                  return (
                    <AllUsers
                      dm={item}
                      dms={toRender}
                      board_id={id}
                      key={item._id}
                    />
                  );
                })}

              {/*<GroupCard dms={item} key={item._id} />*/}
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}
