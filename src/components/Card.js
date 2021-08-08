import React from "react";
const Card = ({repo}) => {
  let now = new Date();
  const date_created = Math.ceil((now - new Date(repo.created_at)) / (1000 * 3600 * 24));
  return (
    <div className="mainInfo">
      <ul className="ul-card">
        <li className="li">
          <img
            className="image"
            src={repo.owner.avatar_url}
            alt="Avatar"
          ></img>
        </li>
        <li className="li">
          <div className="margin">
            <p className="title">{repo.name}</p>
            <div className="description"><h5 className="pcard">{repo.description?repo.description:"No description provided."}</h5></div>
            
            <span className="borderSpan" >
              Stars: {repo.stargazers_count}
            </span>
            <span className="borderSpan">Issues: {repo.open_issues} </span>
            <span>Submitted {date_created} days ago by {repo.owner.login}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Card;
