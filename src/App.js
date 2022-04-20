import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ArticleByTopic from "./components/ArticleByTopic";
import SingleTopic from "./components/SingleTopic";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Nc News</h1>
      </header>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<ArticleByTopic />} />
        <Route path="/topics/:topic_slug" element={<SingleTopic />} />
      </Routes>
    </div>
  );
}

export default App;
