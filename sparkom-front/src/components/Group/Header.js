import SearchIcon from "@material-ui/icons/Search";

import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccoutIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import logo from "../../assets/img/logosparkom.png";
import AccountCircle from "@material-ui/icons/AccountCircle";

const Header = () => {
  
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="why" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      {/******** Header Right */}
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Link to="/allg" Icon={SupervisorAccoutIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={AccountCircle} />
      </div>
    </div>
  );
};

export default Header;
