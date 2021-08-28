import React from "react";
import { useHistory } from "react-router-dom";

export default function AddGrBu(props) {
  const history = useHistory();
  const Direction = (id) => {
    history.replace("/DFe/" + id);
  };
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <div className="h6 title">GroupName’s Events</div>
        <div style={{ float: "right" }}>
          <a
            onClick={() => Direction(props.dm._id)}
            data-toggle="modal"
            data-target="#create-photo-album"
            className="btn btn-primary btn-md-2"
          >
            Create Event
          </a>
        </div>
        <a href="." className="more">
          <svg className="olymp-three-dots-icon">
            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
          </svg>
        </a>
      </div>
    </div>
  );
}
