import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import Collapsible from "../utils/CollapsibleArticle";

const SingleTopic = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(true);
  const { topic_slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(topic_slug)
      .then((result) => {
        setArticles(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
        console.log(error);
      });
  }, [topic_slug]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <ul>
      {articles.map((article) => {
        return (
          <>
            <li key={article.id} className="articles">
              <Link to={`/articles/${article.article_id}`}>
                <h2>{article.title}</h2>
              </Link>
              <Collapsible article={article} />
              <h3>Topic: {article.topic}</h3>
              <h3>Author: {article.author}</h3>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default SingleTopic;
