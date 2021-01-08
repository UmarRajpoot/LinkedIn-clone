import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import "./Wiget.css";

const Wiget = () => {
  const newsArticles = (heading, subtitle) => (
    <div className="widget__article">
      <div className="widgetArticle__left">
        <FiberManualRecord />
      </div>
      <div className="widgetArticle__right">
        <h5>{heading}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widget">
      <div className="widget__header">
        <h3>LinkedIn News</h3>
        <InfoIcon />
      </div>
      {newsArticles("Umar Dev is Back", "Top news - 99989 readers")}
      {newsArticles("Umar Dev is Back", "Top news - 99989 readers")}
      {newsArticles("Umar Dev is Back", "Top news - 99989 readers")}
    </div>
  );
};

export default Wiget;
