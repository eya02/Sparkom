import React from "react";
import friend from "../../assets/img/friend-harmonic5.jpg";
import { useHistory } from "react-router-dom";
import { queryApi } from "../../utils/queryApi";

export default function AllUsers({ dm, board_id, dms }) {
  const history = useHistory();

  const removemember = async (idb, idu) => {
    const [err] = await queryApi(
      "boards/LeaveBoard/",
      { board_id: idb, userId: idu },
      "Put",
      false
    );
    if (err) {
      console.log(err);
    } else history.push("/boards");
  };
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
  console.log(dms.Members);

  return (
    <>
      {member && dm._id !== dms.creator_id ? (
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
                  removemember(board_id, dm._id);
                  history.push("/boards");
                }}
              >
                remove{" "}
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
