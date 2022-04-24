import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import NavBar from "./components/NavBar";
import Topics from "./components/Topics";
import SingleTopic from "./components/SingleTopic";
import IconLinks from "./components/IconLinks";
import Footer from "./components/Footer";
import SingleArticle from "./components/SingleArticle";
import User from "./components/User";
import "@fontsource/roboto/300.css";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <h1>Nc News</h1>
        <IconLinks />
      </header>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic_slug" element={<SingleTopic />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/users/:username" element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
