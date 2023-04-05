import React from "react";
import "./styles.css";
import { Outlet, Link } from "react-router-dom";

export default function Popup(props) {
  return (
    <div className={props.close ? "popup" : "nopopup"}>
      <div>
        <button onClick={props.onclick} className="close">
          x
        </button>
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
        <h1>{props.heading}</h1>
        <p>{props.about}</p>
        <Link to="/watchnow">
          <button className="watch_now">Watch Now</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
