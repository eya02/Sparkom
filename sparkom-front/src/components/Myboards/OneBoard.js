import React, { Fragment, useEffect } from "react";

import friend from "../../assets/img/friend-harmonic5.jpg";

import { useHistory } from "react-router-dom";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import { activeUserSelector } from "../../store/slices/auth";
import { useSelector } from "react-redux";
import { queryApi } from "../../utils/queryApi";
export default function Oneboard(props) {
  const activeUser = useSelector(activeUserSelector);

  useEffect(() => {
    console.log(props.dms);
  }, [props.dms]);
  const addmember = async (idb, idu) => {
    const [err] = await queryApi(
      "boards/AddMember/",
      { board_id: idb, userId: idu },
      "Put",
      false
    );
    if (err) {
      console.log(err);
    } else {
      window.location.reload(false);
    }
  };
  const removemember = async (idb, idu) => {
    const [err] = await queryApi(
      "boards/LeaveBoard/",
      { board_id: idb, userId: idu },
      "Put",
      false
    );
    if (err) {
      console.log(err);
    } else {
      window.location.reload(false);
    }
  };
  const history = useHistory();
  const Details = (idd) => {
    history.replace("/ShowBoard/" + idd);
    console.log(history);
  };
  const members = (idd) => {
    history.replace("/AddMembers/" + idd);
    console.log(history);
  };
  const dmembers = (idd) => {
    history.replace("/DeleteMembers/" + idd);
    console.log(history);
  };
  return (
    <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      {props.dms?.map((dm, index) => (
        <div key={index}>
          {dm.Is_public || dm.creator_id === activeUser._id ? (
            <div class="ui-block" data-mh="friend-groups-item">
              <div class="friend-item friend-groups">
                <div class="friend-item-content">
                  <div class="more">
                    <svg class="olymp-three-dots-icon">
                      <use xlinkHref={`${icons}#olymp-three-dots-icon`}></use>
                    </svg>
                    <ul class="more-dropdown">
                      {dm.creator_id === activeUser._id ? (
                        <li>
                          <a
                            href="/boards"
                            onClick={() => props.deleteboard(dm._id)}
                          >
                            delete board
                          </a>
                        </li>
                      ) : (
                        <li></li>
                      )}
                      {dm.creator_id !== activeUser._id &&
                      dm.Members.indexOf(activeUser._id) !== -1 ? (
                        <li>
                          <button
                            onClick={() => {
                              removemember(dm._id, activeUser._id);
                              window.location.reload(false);
                            }}
                          >
                            unjoin board
                          </button>
                        </li>
                      ) : (
                        <li></li>
                      )}
                      {dm.Members.indexOf(activeUser._id) === -1 &&
                      dm.creator_id !== activeUser._id ? (
                        <li>
                          <button
                            onClick={() => {
                              addmember(dm._id, activeUser._id);
                              window.location.reload(false);
                            }}
                          >
                            join board
                          </button>
                        </li>
                      ) : (
                        <li></li>
                      )}
                      {/*<li>
                <a href="#">Turn Off Notifications</a>
              </li>*/}
                    </ul>
                  </div>
                  <div class="friend-avatar">
                    <div class="author-content">
                      {dm.Members.indexOf(activeUser._id) !== -1 ||
                      dm.creator_id === activeUser._id ? (
                        <p
                          class="h5 author-name"
                          onClick={() => Details(dm._id)}
                          style={{ cursor: "pointer" }}
                        >
                          {dm.Board_name}
                        </p>
                      ) : (
                        <p class="h5 author-name" style={{ cursor: "pointer" }}>
                          {dm.Board_name}
                        </p>
                      )}
                      <div class="country">
                        {dm.Members.length} Members in the board
                      </div>
                    </div>
                  </div>
                  {dm.Members?.map((item, i) => (
                    <ul class="friends-harmonic" key={i}>
                      <li>
                        <a href="#top">
                          <img src={friend} alt="friend" />
                        </a>
                      </li>
                    </ul>
                  ))}
                  <div class="control-block-button">
                    {dm.Members.indexOf(activeUser._id) !== -1 ||
                    dm.creator_id === activeUser._id ? (
                      <button
                        style={{ width: 40, height: 34 }}
                        onClick={() => members(dm._id)}
                        className="accept-request"
                      >
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref={`${icons}#olymp-happy-face-icon`} />
                          </svg>
                        </span>
                      </button>
                    ) : (
                      <h7>You are not a member in this board</h7>
                    )}
                    {dm.creator_id === activeUser._id ? (
                      <button
                        onClick={() => dmembers(dm._id)}
                        style={{ width: 40, height: 34 }}
                        className="accept-request request-del"
                      >
                        <span className="icon-minus">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref={`${icons}#olymp-happy-face-icon`} />
                          </svg>
                        </span>
                      </button>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}
