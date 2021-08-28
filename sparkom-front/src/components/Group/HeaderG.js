import React, { Fragment, useEffect, useState } from "react";
import cover from "../../assets/img/top-header2.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import eya from "../../assets/img/eya.png";
import leave from "../../assets/img/leave.png";
import add from "../../assets/img/add.png";
import trash from "../../assets/img/delete.png";
import { queryApi } from "../../utils/queryApi";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { JoinGroup, LeaveGroup } from "../../redux/actions/groupActions";
import { useHistory } from "react-router-dom";
import { activeUserSelector, thistoken } from "../../store/slices/auth";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";

export default function HeaderG(props) {
  const [sent, setSend] = useState(false);
  const [text, setText] = useState("");
  const [mail, setMail] = useState("");
  // const mail = "eya.bellil@esprit.tn";
  const handleSend = async () => {
    setSend(true);
    try {
      await axios.post("http://localhost:3002/send_mail", {
        text,
        mail,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const activeUser = useSelector(activeUserSelector);
  const token = useSelector(thistoken);
  const history = useHistory();
  const Details = (id) => {
    history.replace("/g/" + id);
  };
  const events = (id) => {
    history.replace("/ge/" + id);
  };
  const all = () => {
    history.replace("/allg");
  };
  const statistic = (id) => {
    history.replace("/static/" + id);
  };
  const dispatch = useDispatch();
  const [, setmembers] = React.useState([]);
  const [member, setmember] = React.useState(false);

  const [, setattentes] = React.useState([]);
  const [attente, setattente] = React.useState(false);

  const handleDelete = async (id) => {
    history.replace("/allg");
    const [, err] = await queryApi(`group/delete/${id}`, null, "PUT", false);

    if (err) {
      console.log(err);
    } else {
      history.replace("/allg");
    }
  };

  //const CreatedBy = props.CreatedBy._id || props.CreatedBy;

  React.useEffect(() => {
    setmembers(props.dm && props.dm.Members);
    function checkmember(members) {
      let match = members.indexOf(activeUser._id) !== -1;
      setmember(match);
    }
    setattentes(props.dm && props.dm.Attentes);
    function checkattente(attentes) {
      let match = attentes.indexOf(activeUser._id) !== -1;
      setattente(match);
    }
    checkattente(props.dm && props.dm.Attentes);
    checkmember(props.dm && props.dm.Members);
  }, [props.dm.Members, activeUser, props.dm, props.dm.Attentes]);

  useEffect(() => {
    console.log(props.dm);
  }, [props.dm]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              <div className="top-header top-header-favorit">
                <div className="top-header-thumb">
                  <img src={cover} alt="nature" />
                  <div className="top-header-author">
                    <div className="author-thumb">
                      <img
                        src={
                          process.env.REACT_APP_API_URL_UPLOADS +
                          "/" +
                          props.dm.Image
                        }
                        alt="author"
                      />
                    </div>
                    <div className="author-content">
                      <a
                        className="h3 author-name"
                        onClick={() => Details(props.dm._id)}
                      >
                        {props.dm.name}
                      </a>
                      <div className="country">
                        {props.dm.Members.length} Member(s)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-section">
                  <div className="row">
                    <div className="col col-xl-8 m-auto col-lg-8 col-md-12">
                      <ul className="profile-menu">
                        <li>
                          <a onClick={() => Details(props.dm._id)}>Timeline</a>
                        </li>
                        <li>
                          <a href="13-FavouritePage-About.html">About</a>
                        </li>
                        <li>
                          <a href="07-ProfilePage-Photos.html">Photos</a>
                        </li>
                        <li>
                          <a href="09-ProfilePage-Videos.html">Videos</a>
                        </li>
                        <li>
                          <a onClick={() => statistic(props.dm._id)}>
                            Statistics
                          </a>
                        </li>
                        <li>
                          <a onClick={() => events(props.dm._id)}>Events</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {activeUser._id === props.dm.CreatedBy ? (
                    <div className="control-block-button">
                      <a href="#top" className="btn btn-control">
                        <img
                          src={trash}
                          alt="author"
                          onClick={() => {
                            handleDelete(props.dm._id);
                          }}
                        />{" "}
                      </a>
                    </div>
                  ) : (
                    <>
                      {member ? (
                        <>
                          <div className="control-block-button">
                            <a className="btn btn-control">
                              <img
                                src={leave}
                                alt="author"
                                onClick={() => {
                                  dispatch(
                                    LeaveGroup(
                                      token,
                                      activeUser._id,
                                      props.dm._id
                                    )
                                  );
                                  history.go(0);
                                }}
                              />
                            </a>

                            <a href="#top" className="btn btn-control">
                              <Popup
                                trigger={
                                  <button className="buttonF">
                                    <img src={eya} alt="author" />{" "}
                                  </button>
                                }
                                position="right center"
                              >
                                <div>
                                  {!sent ? (
                                    <form onSubmit={handleSend}>
                                      <input
                                        type="text"
                                        value={
                                          "I want to invite you to this group  " +
                                          props.dm.name +
                                          " Don't hesitate, Join us"
                                        }
                                        placeholder="Enter your .."
                                        onChange={(e) =>
                                          setText(e.target.value)
                                        }
                                      />
                                      <input
                                        type="text"
                                        value={mail}
                                        placeholder="Email.."
                                        onChange={(e) =>
                                          setMail(e.target.value)
                                        }
                                      />
                                      <Button type="submit">Send</Button>
                                    </form>
                                  ) : (
                                    <h3>Email Sent</h3>
                                  )}
                                </div>
                              </Popup>
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
                                        JoinGroup(
                                          token,
                                          activeUser._id,
                                          props.dm._id
                                        )
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

                  {/*  <a href=".html" className="btn btn-control">
                      <div className="more">
                        <img src={add} alt="author" />
                        <ul className="more-dropdown">
                          <li>
                            <a href=".">Join Group</a>
                          </li>
                        </ul>
                      </div>
                    </a>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
