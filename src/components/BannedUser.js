import React from "react";

const BannedUser = props => (
  <div>
    <a>{props.name}</a>
    <a>{props.reason}</a>
    <a>{props.date}</a>
  </div>
);

export default BannedUser;
