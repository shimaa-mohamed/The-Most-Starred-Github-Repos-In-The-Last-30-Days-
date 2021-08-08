import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import ListRepos from "./ListRepos";
import Pagination from "./Pagination";
import {thirtyDaysAgo} from "../utils/helpers"

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=created:>${thirtyDaysAgo()}&sort=stars&order=desc&page=${currentPage}`
      );
      setRepos(res.data.items);
      setLoading(false);
    };

    fetchRepos();
  }, [currentPage]);

  const paginate = (page_number) => {setCurrentPage(page_number);
};

  return (
    <div className="App">
      <div className="card text-center">
        <div className="card-header text-white bg-dark">
          <h2>🌟The Most Starred Github Repos In The Last 30 Days !!🌟</h2>
        </div>
        <div className="card-body mb-5">
          <ListRepos repos={repos} loading={loading} />
        </div>
        <footer>
          <div className="card-footer text-muted">
            <Pagination paginate={paginate} />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
