import React from "react";

import { useHistory } from "react-router-dom";

import { queryApi } from "../../utils/queryApi";

export default function OneList({ dm, idl, card, board_id }) {
  const history = useHistory();

  const move = async (idb, idu) => {
    const [err] = await queryApi(
      "cards/UpdateList/card/",
      { card_id: idb, listId: idu },
      "Put",
      false
    );
    if (err) {
      console.log(err);
    } else history.push("/EditCard/" + idb);
  };

  return (
    <>
      {board_id === dm.board_id && card.list_id !== dm._id ? (
        <div class="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="ui-block">
            <div class="birthday-item inline-items">
              <div class="author-thumb"></div>
              <div class="birthday-author-name">
                <a href="#top" class="h6 author-name">
                  {dm.List_name}{" "}
                </a>
              </div>
              <button
                class="btn btn-sm bg-blue"
                onClick={() => {
                  move(card._id, dm._id);
                  history.push("/EditCard/" + card._id);
                }}
              >
                Move{" "}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
