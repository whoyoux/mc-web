import React from "react";
import "../App.css";

const Teaser = props => (
  <div className="container-fluid my-5 embed text-center">
    <h4>Sprawdź nasz teaser!</h4>
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        title="teaser"
        className="embed-responsive-item"
        src={props.link}
        allowfullscreen
      ></iframe>
    </div>
  </div>
);

export default Teaser;
