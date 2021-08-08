import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import ListRepos from "./components/ListRepos";
import Pagination from "./components/Pagination";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(30);
  
  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${currentPage}`
      );
      setRepos(res.data.items);
      console.log(repos);
      // console.log(res.data.items);
      setLoading(false);
    };

    fetchRepos();
  }, []);
  const indexOfLastPost = 31;
  const indexOfFirstPost = 0;
  const DataInCurrentPage = repos.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (page_number) => setCurrentPage(page_number);
  console.log("datacurrent");
  console.log(DataInCurrentPage);
  return (
    <div className="App">
      <div className="card text-center">
        <div className="card-header text-white bg-dark">
          <h2>🌟The Most Starred Github Repos In The Last 30 Days !!🌟</h2>
        </div>
        <div class="card-body mb-5">
          <ListRepos repos={DataInCurrentPage} loading={loading} />
        </div>
        <footer>
          <div class="card-footer text-muted">
            <Pagination paginate={paginate} />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
