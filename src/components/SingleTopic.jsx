import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import Collapsible from "../utils/Collapsible";

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
    <>
      <main>
        <ul>
          {articles.map((article) => {
            return (
              <>
                <li key={article.id} className="articles">
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

export default SingleTopic;
