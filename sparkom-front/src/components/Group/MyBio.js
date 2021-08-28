import React from "react";

import BioInfo from "./BioInfo";
import SocialNetwork from "./SocialNetwork";
import { activeUserSelector } from "../../store/slices/auth";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import edit from "../../assets/img/edit.png";
export default function MyBio(props) {
  const history = useHistory();
  const Update = (id) => {
    history.replace("/update/" + id);
  };

  const activeUser = useSelector(activeUserSelector);
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Group Bio</h6>
      </div>
      <div className="ui-block-content">
        <ul className="widget w-personal-info item-block">
          {activeUser._id === props.dm.CreatedBy && (
            <a href="#top" className="btn btn-control">
              <img
                src={edit}
                alt="author"
                onClick={() => Update(props.dm._id)}
              />
            </a>
          )}
          <BioInfo title="Bio" text={props.dm.description} />

          <BioInfo
            title="Created At:"
            text={props.dm.createdAt.substring(0, 10)}
          />
          <BioInfo
            title="Updated At:"
            text={props.dm.updatedAt.substring(0, 10)}
          />
          <BioInfo title="Status:" text={props.dm.IsPrivate} />
          <BioInfo
            title="Topic:"
            text={props.dm.Topic?.map((ds, index) => (
              <div className="row" key={index}>
                <span class="btn-pill m-1 badge badge-info">"{ds.value}</span>
              </div>
            ))}
          />
          <BioInfo title="WebSite:" text="www.sparkom.com" />
          <BioInfo title="Members:" text={props.dm.Members.length} />
          <SocialNetwork />
        </ul>
      </div>
    </div>
  );
}
