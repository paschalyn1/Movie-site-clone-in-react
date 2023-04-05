import React from "react";
import "./styles.css";

export default function Display(props) {
  return (
    <div className="display">
      {/* <video key={props.video} className="video" controls autoPlay>
        <source src={props.video} />
        <p>Your browser cannot display video</p>
      </video> */}
      {/* <p style={{color:"white"}}>{props.text}</p> */}
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
      <div className="display_div">
        <h1>{props.heading}</h1>
        <p>{props.about}</p>
        <button>Watch Now</button>
      </div>
    </div>
  );
}
