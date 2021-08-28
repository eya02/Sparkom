import React from "react";
import ActivityFeed from "./ActivityFeed";
import WeekEvent from "./WeekEvent";

import { useServerApi } from "../../hooks/useServerApi";
import { useParams } from "react-router-dom";

import { activeUserSelector } from "../../store/slices/auth";
import { useSelector } from "react-redux";

export default function RightSidebar(props) {
  const { id } = useParams();
  const [dm] = useServerApi("group/getdev/" + id);
  const toRender = dm;
  const activeUser = useSelector(activeUserSelector);
  console.log(toRender);

  return (
    <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-12">
      {toRender ? (
        <>
          {toRender.CreatedBy === activeUser._id ? (
            <>
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Waiting list </h6>
                  <a href="." className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
                    </svg>
                  </a>
                </div>{" "}
              </div>
              {toRender.Attentes?.map((dm, index) => (
                <>
                  <ActivityFeed list={dm} />
                </>
              ))}
            </>
          ) : (
            <>
              {" "}
              <WeekEvent dm={toRender} />
            </>
          )}
        </>
      ) : (
        <>
          <p>Event not found</p>
        </>
      )}
    </div>
  );
}
