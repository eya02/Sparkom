import Header from "./Header";

import SideBar from "./SideBar";
import { Route, Switch } from "react-router-dom";
import AccountSettings from "./AccountSettings";
import ChangePassword from "./ChangePassword";
import ResumeGenerator from "./ResumeGenerator";
import PersonalInformation from "./PersonalInformation";
import NavBar from "../NavBar/NavBar";
const Settings = (props) => {
  return (
    <>
      <NavBar />
      <div className="header-spacer header-spacer-small mb-3"></div>
      <div className="container">
        <div className="row">
          <Header />

          <SideBar />
          {/* main content */}
          <div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
            <div className="ui-block">
              <div className="ui-block-title">
                <h6 className="title">Account Settings</h6>
              </div>
              <div className="ui-block-content">
                {/* <AccountSettings /> */}

                <Switch>
                  <Route
                    path={props.match.url + "/perso"}
                    component={PersonalInformation}
                  />
                  <Route
                    path={props.match.url + "/changepwd"}
                    component={ChangePassword}
                  />
                  <Route
                    path={props.match.url + "/educ"}
                    component={ResumeGenerator}
                  />
                  <Route path={props.match.url} component={AccountSettings} />
                </Switch>
              </div>
            </div>
          </div>

          {/*end  main content */}
        </div>
      </div>
    </>
  );
};

export default Settings;
