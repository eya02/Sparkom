import React from "react";
import BioInfo from "./BioInfo";
import { useSelector } from "react-redux";
import { myProfileSelector } from "../../store/slices/profile";

export default function MyBio() {
  const profile = useSelector(myProfileSelector);
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Bio</h6>
      </div>
      <div className="ui-block-content">
        <ul className="widget w-personal-info item-block">
          {profile?.occupation && (
            <BioInfo title="Occupation:" text={profile?.occupation} />
          )}

          {profile?.bio && <BioInfo title="About Me:" text={profile?.bio} />}
        </ul>
      </div>
    </div>
  );
}
