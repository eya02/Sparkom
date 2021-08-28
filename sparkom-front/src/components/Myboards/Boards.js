import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";

import { Link } from "react-router-dom";
import Oneboard from "./OneBoard";
import BoardAdd from "./BoardAdd";
import PBoardAdd from "./PBoardAdd";

import { useServerApi } from "../../hooks/useServerApi";
import { queryApi } from "../../utils/queryApi";

export default function Boards(props) {
  const [userData, setUserData] = useState({
    board_name: "",
  });

  const { board_name } = userData;

  const handleChange = (e) => {
    console.log(e.target);
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const [buttonPopup, setButtonPopup] = useState(false);
  const [dms] = useServerApi("boards/");
  const [, , reload] = useServerApi("boards/");
  const deleteboard = async (id) => {
    const [err] = await queryApi("boards/delete/" + id, {}, "GET");
    if (err) {
      console.log(err);
    } else await reload();
  };
  console.log(dms);

  return (
    <div class="container">
      <div class="row">
        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="ui-block responsive-flex">
            <div class="ui-block-title">
              <div class="h6 title">James’s Boards</div>

              <form className="content">
                <div className="row">
                  <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group label-floating is-empty">
                      <TextField
                        label="Board Name"
                        id="board_name"
                        variant="outlined"
                        value={board_name}
                        onChange={handleChange}
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group label-floating is-empty">
                      <button
                        type="submit"
                        class="btn btn-smoke btn-md "
                        style={{ width: 250 }}
                      >
                        <i class="fas fa-search" /> Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="ui-block responsive-flex">
            <div class="friend-item friend-groups">
              <div class="friend-item-content ">
                <div class="friend-avatar">
                  <div class="content">
                    <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group label-floating is-empty "></div>
                      <Link to="/PBoardAdd">
                        <button className="btn btn-primary btn-lg full-width">
                          + Create a Board
                        </button>
                      </Link>
                    </div>

                    <span class="sub-title">
                      <h4>It only takes a few minutes!</h4>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Oneboard dms={dms} deleteboard={deleteboard} />
      </div>
      <BoardAdd trigger={buttonPopup} setTrigger={setButtonPopup}>
        <PBoardAdd />
      </BoardAdd>
    </div>
  );
}
