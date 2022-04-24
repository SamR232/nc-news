import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";
import CollapsibleArticle from "../utils/CollapsibleArticle";

const Articles = () => {
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
    return <h3>Loading...</h3>;
  }

  return (
    <ul>
      {articles.map((article) => {
        return (
          <li className="articles" key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <h2>{article.title}</h2>
            </Link>
            <CollapsibleArticle article={article} />
            <h3>Topic: {article.topic}</h3>
            <h3>Author: {article.author}</h3>
            <p>Votes: {article.votes}</p>
            <p>Click title to leave a vote or a comment on this article!</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
