import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
const SideBar = () => {
  // Reducer Fetching the Data
  const user = useSelector(selectUser);

  const recentTopic = (topic) => (
    <div className="recent__recentItems">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.freecodecamp.org/news/content/images/2020/04/w-qjCHPZbeXCQ-unsplash.jpg"
          alt=""
        />
        <Avatar src={user?.photoURL} className="sidebar__avatar">
          {user?.displayName[0]}
        </Avatar>
        <h3>{user?.displayName}</h3>
        <h6>{user?.email}</h6>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed You</p>
          <div className="sidebar__statsNumber">2,535</div>
        </div>
        <div className="sidebar__stat">
          <p>Views On Post</p>
          <div className="sidebar__statsNumber">2,541</div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentTopic("Programming")}
        {recentTopic("React js")}
        {recentTopic("React native")}
        {recentTopic("Killing UI")}
      </div>
    </div>
  );
};

export default SideBar;
