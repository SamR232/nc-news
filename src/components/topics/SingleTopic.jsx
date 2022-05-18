import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../../utils/api";
import Collapsible from "../../utils/CollapsibleArticle";

const SingleTopic = () => {
  const [articles, setArticles] = useState([]);
  const { topic_slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticlesByTopic(topic_slug)
      .then((result) => {
        setArticles(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
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
              <p>Click title to leave a vote or a comment on this article!</p>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default SingleTopic;
