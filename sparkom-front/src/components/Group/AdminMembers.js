import React from "react";
import avatar from "../../assets/img/avatar10-sm.jpg";

export default function AdminMembers(props) {
  const AdminIcon = (avatar) => {
    return (
      <li>
        <a href="#top">
          <img
            src={process.env.REACT_APP_API_URL_UPLOADS + "/" + props.dm.Image}
            alt="author"
          />
        </a>
      </li>
    );
  };

  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Administration</h6>
      </div>
      <div className="ui-block-content">
        <ul className="widget w-faved-page js-zoom-gallery">
          {AdminIcon(avatar)}
        </ul>
      </div>
    </div>
  );
}
