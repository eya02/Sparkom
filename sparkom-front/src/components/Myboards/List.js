import React, { Fragment, useEffect } from "react";
import ListCard from "./ListCard";
import ActionButtonL from "./ActionButtonL";
import ListForm from "./ListForm";
import { useServerApi } from "../../hooks/useServerApi";
import { queryApi } from "../../utils/queryApi";
const List = (props) => {
  useEffect(() => {
    console.log(props.dms);
  }, [props.dms]);

  const [cards] = useServerApi("cards/");
  const [, , reload] = useServerApi("cards/");
  const deletecard = async (id) => {
    const [err] = await queryApi("cards/delete/" + id, {}, "GET");
    if (err) {
      console.log(err);
    } else await reload();
  };

  return (
    <>
      {props.dms?.map((dm, index) => (
        <div
          className="ui-block mr-3 bg-secondary"
          data-mh="friend-groups-item"
        >
          <div style={style.container} key={index}>
            <h4 style={{ color: "white", fontFamily: "bold" }}>
              {dm.List_name}
            </h4>
            <div style={{ paddingLeft: "270px" }}>
              <i
                class="far fa-trash-alt"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.deletelist(dm._id);
                  window.location.reload(false);
                }}
              >
                {" "}
              </i>
            </div>
            <ListCard cards={cards} deletecard={deletecard} list_id={dm._id} />
            {/*<ListCard name="data models"/>
          <ListCard name="data models"/>*/}
            <ActionButtonL card list_id={dm._id} />
          </div>
        </div>
      ))}

      <ListForm board_id={props.board_id} />
    </>
  );
};
const style = {
  container: {
    // backgroundColor: "#B5B7B6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8,
  },
};
export default List;
