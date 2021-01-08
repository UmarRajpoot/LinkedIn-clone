import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

const HeaderOptions = ({ avatar, avatarTitle, Icon, title, onClick }) => {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={avatar}>
          {avatarTitle}
        </Avatar>
      )}
      <h5 className="headerOption__title">{title}</h5>
    </div>
  );
};

export default HeaderOptions;
