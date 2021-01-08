import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "../ComponentChunks/HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import JobIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { auth } from "../Firebase/Firebase";
import { logout } from "../features/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutTheApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={JobIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationIcon} title="Notifications" />
        <HeaderOptions
          avatar={user?.photoURL && user?.displayName}
          avatarTitle={user?.displayName}
          title={user?.displayName}
          onClick={logoutTheApp}
        />
      </div>
    </div>
  );
};

export default Header;
