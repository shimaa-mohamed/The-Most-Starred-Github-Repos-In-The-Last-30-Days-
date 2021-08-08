import React from 'react';
import Card from "./Card";

const ListRepos = ({ repos, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="ul-card">
      {repos.map(repo => (
        <li key={repo.id}>
          <Card repo={repo}/>
        </li>
      ))}
    </ul>
  );
};

export default ListRepos;
