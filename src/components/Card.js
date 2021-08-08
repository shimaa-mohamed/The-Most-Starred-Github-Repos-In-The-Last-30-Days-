import React from "react";
const Card = ({repo}) => {
  return (
    <div className="mainInfo">
      <ul className="ul-card">
        <li className="li">
          <img
            className="image"
            src={repo.owner.avatar_url}
            alt="Avatar"
          ></img>
          <div className="username-div"></div>
        </li>
        <li className="li">
          <div className="margin">
            <p className="title">{repo.name}</p>
            <h5 className="pcard">{repo.description}</h5>
            <span className="borderSpan" >
              Stars: {repo.stargazers_count}
            </span>
            <span className="borderSpan">Issues: {repo.open_issues} </span>
            <span>Submitted 30 days ago by tensorflow</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Card;
