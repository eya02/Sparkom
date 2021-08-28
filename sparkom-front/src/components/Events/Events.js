import { React, useEffect, useState } from "react";

import "../../assets/css/Sidebar.css";
import "../../assets/css/Widgets.css";
import "../../assets/css/main.css";

import { useDispatch } from "react-redux";
import { JoinEvent, LeaveEvent } from "../../redux/actions/groupActions";
import { useHistory } from "react-router-dom";
import { activeUserSelector, thistoken } from "../../store/slices/auth";
import { useSelector } from "react-redux";
export default function Events({ props, events }) {
  const dispatch = useDispatch();
  const activeUser = useSelector(activeUserSelector);
  const token = useSelector(thistoken);
  const history = useHistory();
  const [, setmembers] = useState([]);
  const [member, setmember] = useState(false);
  //const CreatedBy = props.CreatedBy._id || props.CreatedBy;

  useEffect(() => {
    setmembers(events && events.Participants);
    function checkmember(members) {
      let match = members.indexOf(activeUser._id) !== -1;
      setmember(match);
    }
    checkmember(events && events.Participants);
  }, [events, activeUser]);

  return (
    <div>
      <table className="event-item-table">
        <tbody>
          <tr className="event-item">
            <td className="upcoming">
              <div className="date-event">
                <svg className="olymp-small-calendar-icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-small-calendar-icon" />
                </svg>
                <span className="day">{events.Date.substring(8, 10)}</span>
                <span className="month">{events.Date.substring(5, 7)}</span>
              </div>
            </td>
            <td className="author">
              <div className="event-author inline-items">
                <img
                  className="imgEv"
                  src={
                    process.env.REACT_APP_API_URL_UPLOADS + "/" + events.Image
                  }
                  alt="author"
                />
                <br />
                <div className="author-date">
                  <a href="." className="author-name h6">
                    {""}
                    {events.name}
                  </a>
                  <time className="published" dateTime="2017-03-24T18:18">
                    at 9:00pm
                  </time>
                </div>
              </div>
            </td>
            <td className="location">
              <div className="place inline-items">
                <svg className="olymp-add-a-place-icon">
                  <use xlinkHref="svg-icons/sprites/icons.svg#olymp-add-a-place-icon" />
                </svg>
                <span>{events.adresse}</span>
              </div>
            </td>
            <td className="description">
              <p className="description">{events.description}</p>
            </td>
            <td className="users">
              <ul className="friends-harmonic">
                <li>
                  <a href="#top" className="with-text">
                    {events.Participants.length}
                  </a>
                </li>
                <li className="with-text">Will Assist</li>
              </ul>
            </td>

            {member ? (
              <>
                <td className="add-event">
                  <a
                    className="btn btn-breez btn-sm"
                    onClick={() => {
                      dispatch(LeaveEvent(token, activeUser._id, events._id));
                      history.go(0);
                    }}
                  >
                    Leave
                  </a>
                </td>
              </>
            ) : (
              <>
                <td className="add-event">
                  <a
                    className="btn btn-breez btn-sm"
                    onClick={() => {
                      dispatch(JoinEvent(token, activeUser._id, events._id));
                      history.go(0);
                    }}
                  >
                    Join + Add To Calendar
                  </a>
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
