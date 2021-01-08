import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputOptions from "./InputOptions";
import "./Post.css";
import ThumbUpOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlined from "@material-ui/icons/ChatOutlined";
import ShareUpOutlined from "@material-ui/icons/ShareOutlined";
import sendUpOutlined from "@material-ui/icons/SendOutlined";

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoURL}>{name[0]}</Avatar>
        <div className="post__info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpOutlined} title="Like" color={"grey"} />
        <InputOptions Icon={ChatOutlined} title="Chat" color={"grey"} />
        <InputOptions Icon={ShareUpOutlined} title="Share" color={"grey"} />
        <InputOptions Icon={sendUpOutlined} title="Send" color={"grey"} />
      </div>
    </div>
  );
});

export default Post;
