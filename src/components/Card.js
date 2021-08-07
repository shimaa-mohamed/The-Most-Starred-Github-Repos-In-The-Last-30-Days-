import React, { useState, useEffect } from "react";
const Card = () => {
  return (
    <div className="mainInfo">
      <ul className="ul-card">
        <li className="li">
          <img
            className="image"
            src="https://image.flaticon.com/icons/png/512/147/147144.png"
            alt="Avatar"
          ></img>
          <div className="username-div"></div>
        </li>
        <li className="li">
          <div className="margin">
            <p className="title">Repository name</p>
            <h5 className="pcard">Repository description</h5>
            <span className="borderSpan" >
              Stars: 118k
            </span>
            <span className="borderSpan">Issues: 118k</span>
            <span>Submitted 30 days ago by tensorflow</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Card;
