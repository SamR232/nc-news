import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import NavBar from "./components/NavBar";
import Topics from "./components/Topics";
import SingleTopic from "./components/SingleTopic";
import "@fontsource/roboto/300.css";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <h1>Nc News</h1>
      </header>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic_slug" element={<SingleTopic />} />
      </Routes>
    </div>
  );
}

export default App;
