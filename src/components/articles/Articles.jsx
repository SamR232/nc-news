import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../utils/api";
import CollapsibleArticle from "../../utils/CollapsibleArticle";
import SortSelect from "../Sort";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

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
      <SortSelect setSearchTerm={setSearchTerm} />
      <ul>
        {articles.map((article) => {
          const regex = /\d{4}-\d{2}-\d{2}/g;
          const date = article.created_at.match(regex);
          return (
            <li className="articles" key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h2>{article.title}</h2>
              </Link>
              <CollapsibleArticle article={article} />
              <h3>Topic: {article.topic}</h3>
              <h3>Author: {article.author}</h3>
              <p>
                {article.votes}
                <ArrowCircleUpIcon fontSize={"small"} />
              </p>
              <p>Created at: {date}</p>
              <p>Click title to leave a vote or a comment on this article!</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
