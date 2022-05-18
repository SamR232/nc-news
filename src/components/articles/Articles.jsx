import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../utils/api";
import CollapsibleArticle from "../../utils/CollapsibleArticle";
import SortSelect from "../Sort";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getArticles(searchTerm)
      .then((result) => {
        setArticles(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <SortSelect className="articles" setSearchTerm={setSearchTerm} />
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
              <p>Created at {article.created_at}</p>
              <p>Click title to leave a vote or a comment on this article!</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
