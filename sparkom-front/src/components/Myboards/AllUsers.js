import React, { useState } from "react";

import friend from "../../assets/img/friend-harmonic5.jpg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { queryApi } from "../../utils/queryApi";
import { activeUserSelector } from "../../store/slices/auth";
import { useSelector } from "react-redux";
export default function AllUsers({ dm, board_id, dms }) {
  const history = useHistory();
  const activeUser = useSelector(activeUserSelector);
  const [sent, setSend] = useState(false);

  const mail = dm.email;
  const text2 = `Hello  ${dm.firstname} ! You are Now a member in the board ${dms.Board_name} , ${activeUser.firstname} invited you`;
  const handleSend = async () => {
    setSend(true);
    try {
      await axios.post("http://localhost:3002/send_mail", {
        text2,
        mail,
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(sent);
  console.log(text2);
  const addmember = async (idb, idu) => {
    const [err] = await queryApi(
      "boards/AddMember/",
      { board_id: idb, userId: idu },
      "Put",
      false
    );
    handleSend();

    if (err) {
      console.log(err);
    } else {
      history.push("/boards");
    }
  };
  console.log(sent);
  const [, setmembers] = React.useState([]);
  const [member, setmember] = React.useState(false);
  //const CreatedBy = props.CreatedBy._id || props.CreatedBy;

  React.useEffect(() => {
    setmembers(dms && dms.Members);
    function checkmember(members) {
      let match = members.indexOf(dm._id) !== -1;
      setmember(match);
    }
    checkmember(dms && dms.Members);
  }, [dms.Members, dms, dm._id]);

  return (
    <>
      {!member && dm._id !== dms.creator_id ? (
        <div class="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="ui-block">
            <div class="birthday-item inline-items">
              <div class="author-thumb">
                <img src={friend} alt="author" />
              </div>
              <div class="birthday-author-name">
                <a href="#top" class="h6 author-name">
                  {dm.firstname} {dm.lastname}{" "}
                </a>
                <div class="birthday-date">{dm.email}</div>
              </div>
              <button
                class="btn btn-sm bg-blue"
                onClick={() => {
                  addmember(board_id, dm._id);
                  history.push("/boards");
                }}
              >
                Add{" "}
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
