import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const Home = () => {
  const [articles, setArticles] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getArticles()
      .then((result) => {
        setArticles(result);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, []);

  if (!articles) {
    return null;
  }

  return (
    <>
      <main>
        <ul>
          {articles.map((article) => {
            return (
              <>
                <li key={article.id}>
                  <h2>{article.title}</h2>
                  <p>{article.body}</p>
                  <h3>topic: {article.topic}</h3>
                  <h3>Author: {article.author}</h3>
                </li>
              </>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Home;
