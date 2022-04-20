import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const SingleTopic = () => {
  const [articles, setArticles] = useState();
  const [error, setError] = useState();
  const { topic_slug } = useParams();

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
    return <h1>{error}</h1>;
  }
  return (
    <>
      <main>
        <ul>
          {articles.map((article) => {
            if (article.topic === topic_slug)
              return (
                <>
                  <li key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.body}</p>
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
