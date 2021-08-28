import React, { useState } from "react";

import { Link } from "react-router-dom";
import icons from "../../assets/svg-icons/sprites/icons.svg";
const SideBar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 responsive-display-none">
      <div className="ui-block">
        <div className="your-profile">
          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div className="card">
              <div className="card-header" role="tab" id="headingOne-1">
                <h6 className="mb-0">
                  <a
                    onClick={() => setDropdown(!dropdown)}
                    style={{ cursor: "pointer" }}
                    href="javascript.void(0)"
                  >
                    Profile Settings
                    <svg className="olymp-dropdown-arrow-icon">
                      <use xlinkHref={`${icons}#olymp-dropdown-arrow-icon`} />
                    </svg>
                  </a>
                </h6>
              </div>

              <div className={dropdown ? "collapse " : "collapse show"}>
                <ul className="your-profile-menu">
                  <li>
                    <Link to="/settings">Account Settings</Link>
                  </li>
                  <li>
                    <Link to="/settings/perso">Personal Information</Link>
                  </li>
                  <li>
                    <Link to="/settings/changepwd">Change Password</Link>
                  </li>

                  <li>
                    <Link to="/settings/educ">Resume Generator</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ui-block-title">
            <Link to="/resume" className="h6 title">
              My CV
            </Link>
          </div>

          <div className="ui-block-title">
            <Link to="/me/notifs" className="h6 title">
              Notifications
            </Link>
            <Link to="/me/notifs" className="items-round-little bg-primary">
              2
            </Link>
          </div>

          <div className="ui-block-title">
            <Link to="/me/messages" className="h6 title">
              Chat / Messages
            </Link>
          </div>
          <div className="ui-block-title">
            <Link to="/me/requests" className="h6 title">
              Friend Requests
            </Link>
            <Link to="/me/requests" className="items-round-little bg-blue">
              1
            </Link>
          </div>
        </div>

        {/* end Your Profile*/}
      </div>
    </div>
  );
};

export default SideBar;
