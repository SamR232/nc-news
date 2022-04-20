import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import Collapsible from "../utils/Collapsible";


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((result) => {
        setArticles(result);
        setIsLoading(false);
        console.log(result);
      })
      .catch((err) => {
        setError(true);
      });
  });

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <main>
        <ul>
          {articles.map((article) => {
            return (
              <>
                <li className="articles" key={article.id}>
                  <h2>{article.title}</h2>
                  <Collapsible article={article} />
                  <h3>Topic: {article.topic}</h3>
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

export default Articles;
