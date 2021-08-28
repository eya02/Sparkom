import React from "react";
import { useDispatch } from "react-redux";
import { AcceptGroup, AcceptNo } from "../../redux/actions/groupActions";
import accept from "../../assets/img/accept.png";
import pdf from "../../assets/img/avatar49-sm.jpg";
import { useParams } from "react-router-dom";
import { useServerApi } from "../../hooks/useServerApi";
import { thistoken } from "../../store/slices/auth";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
export default function ActivityFeed(props) {
  const history = useHistory();
  const [attente] = useServerApi("group/getuser/" + props.list);
  const toRender = attente;
  const { id } = useParams();
  const token = useSelector(thistoken);
  const [, setData] = React.useState([]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    setData(attente);
  }, [attente]);

  return (
    <div>
      {toRender ? (
        <>
          <ul className="widget w-activity-feed notification-list">
            <li>
              <div className="author-thumb">
                <img src={pdf} alt="author" />
              </div>
              <div className="notification-event">
                <a href="." className="h6 notification-friend">
                  <h4>{toRender.username}</h4>{" "}
                </a>{" "}
                Wants to Join Your Group{" "}
                <a href="." className="notification-link">
                  Your Group
                </a>
                .
                <span className="notification-date">
                  <time
                    className="entry-date updated"
                    dateTime="2004-07-24T18:18"
                  ></time>
                </span>
                <div className="author-thumb">
                  <img
                    src={accept}
                    alt="author"
                    onClick={() => {
                      dispatch(AcceptGroup(token, toRender._id, id));
                      dispatch(AcceptNo(token, toRender._id, id));
                      history.go(0);
                    }}
                  />
                </div>
              </div>
            </li>
          </ul>
        </>
      ) : (
        <p>not found</p>
      )}
    </div>
  );
}
