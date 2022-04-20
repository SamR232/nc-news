import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((result) => {
        setArticles(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading</h1>;
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
