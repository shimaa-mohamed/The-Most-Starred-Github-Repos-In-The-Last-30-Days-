import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div class="card text-center">
        <div class="card-header text-white bg-dark">
          <h2>🌟The Most Starred Github Repos In The Last 30 Days !!🌟</h2>
        </div>
        <div class="card-body mb-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <footer>
          <div class="card-footer text-muted">pagging footer</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
