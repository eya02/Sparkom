import React, { Fragment, useEffect } from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";

import leave from "../../assets/img/leave.png";

import add from "../../assets/img/add.png";

import { useDispatch } from "react-redux";
import { JoinGroup, LeaveGroup } from "../../redux/actions/groupActions";

import { useHistory } from "react-router-dom";
import { activeUserSelector, thistoken } from "../../store/slices/auth";
import { useSelector } from "react-redux";

export default function GroupCard({ dms }) {
  const dispatch = useDispatch();
  const activeUser = useSelector(activeUserSelector);
  const token = useSelector(thistoken);
  const [, setmembers] = React.useState([]);
  const [member, setmember] = React.useState(false);
  //const CreatedBy = props.CreatedBy._id || props.CreatedBy;
  const [, setattentes] = React.useState([]);
  const [attente, setattente] = React.useState(false);
  React.useEffect(() => {
    setmembers(dms && dms.Members);

    function checkmember(members) {
      let match = members.indexOf(activeUser._id) !== -1;
      setmember(match);
    }
    setattentes(dms && dms.Attentes);
    function checkattente(attentes) {
      let match = attentes.indexOf(activeUser._id) !== -1;
      setattente(match);
    }
    checkattente(dms && dms.Attentes);
    checkmember(dms && dms.Members);
  }, [dms.Members, activeUser, dms]);

  useEffect(() => {
    console.log(dms);
  }, [dms]);
  const history = useHistory();

  const Details = (id) => {
    history.replace("/g/" + id);
  };
  return (
    <div className="ui-block" data-mh="friend-groups-item">
      {/* Friend Item */}
      <div className="friend-item friend-groups">
        <div className="friend-item-content">
          <div className="more">
            <svg className="olymp-three-dots-icon">
              <use xlinkHref={`${icons}#olymp-three-dots-icon`} />
            </svg>
            <ul className="more-dropdown">
              <li>
                <a>Report Group</a>
              </li>
              <li>
                <a>Block Group</a>
              </li>
              <li>
                <a>Turn Off Notifications</a>
              </li>
            </ul>
          </div>
          <div className="friend-avatar">
            <img
              className="photo"
              src={process.env.REACT_APP_API_URL_UPLOADS + "/" + dms.Image}
              onClick={() => Details(dms._id)}
              alt="ph"
            />

            <div className="author-content">
              <a href="." className="h5 author-name">
                {dms.name}
              </a>
              <div className="country">
                {" "}
                {dms.Members.length} Members in the Group
              </div>
            </div>
          </div>
          {/*  <ul className="friends-harmonic">
                  <li>
                    <a href=".">
                      <img src={fr2} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr3} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr4} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr1} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr5} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr1} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr2} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr3} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img src={fr4} alt="friend" />
                    </a>
                  </li>
                  <li>
                    <a href="." className="all-users bg-blue">
                      +6
                    </a>
                  </li>
                </ul>*/}
          {activeUser._id === dms.CreatedBy ? (
            <div className="control-block-button">
              {/* <a href="#top" className="btn btn-control"></a> */}
            </div>
          ) : (
            <>
              {member ? (
                <>
                  <div className="control-block-button">
                    <a href="#top" className="btn btn-control">
                      <img
                        src={leave}
                        alt="author"
                        onClick={() => {
                          dispatch(LeaveGroup(token, activeUser._id, dms._id));
                          history.go(0);
                        }}
                      />
                    </a>
                  </div>
                </>
              ) : (
                <>
                  {attente ? (
                    <>
                      <div className="control-block-button">
                        <a className="btn btn-breez btn-sm">
                          Vous êtes en attente
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="control-block-button">
                        <a className="btn btn-control">
                          <img
                            src={add}
                            alt="author"
                            onClick={() => {
                              dispatch(
                                JoinGroup(token, activeUser._id, dms._id)
                              );
                              history.go(0);
                            }}
                          />{" "}
                          <ul className="more-dropdown">
                            <li>
                              <a href=".">Join Group</a>
                            </li>
                          </ul>
                        </a>
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
