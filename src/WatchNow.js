import React from "react";
import "./styles.css";
import { Link, Outlet } from "react-router-dom";

export default function WatchNow(props) {
  return (
    <div className="watchnow">
      <Link to="/">
        <button className="close">x</button>
      </Link>
      <iframe
        className="video"
        key={props.video}
        src={props.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; 
gyroscope; picture-in-picture; 
web-share"
        allowfullscreen
      ></iframe>
      <Outlet />
    </div>
  );
}
