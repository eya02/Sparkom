import React from "react";
import { Link } from "react-router-dom";
import b1 from "../../assets/img/badge1.png";
import b2 from "../../assets/img/badge2.png";
import b3 from "../../assets/img/badge3.png";
import b4 from "../../assets/img/badge4.png";
import b5 from "../../assets/img/badge5.png";
import b6 from "../../assets/img/badge6.png";
import b7 from "../../assets/img/badge7.png";
import Badge from "./Badge";
export default function MyBadges() {
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">My Badges</h6>
      </div>
      <div className="ui-block-content">
        {/* W-Badges */}
        <ul className="widget w-badges">
          <Badge img={b1} />
          <Badge img={b2} />
          <Badge img={b3} />
          <Badge img={b4} />
          <Badge img={b5} />
          <Badge img={b6} />
          <Badge img={b7} nbr={3} />
          <li className="all-users">
            <Link to="/me/badges">+74</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
