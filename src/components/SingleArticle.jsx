import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import LikeButton from "../components/LikeButton";
import Comments from "./Comments";

const SingleArticle = () => {
  const [article, setArticle] = useState();
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then((articleById) => {
      setArticle(articleById);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <ul>
      <li className="articles" key={article.article_id}>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <LikeButton article_id={article.article_id} votes={article.votes} />
        <Comments />
        <h3>Topic: {article.topic}</h3>
        <h3>Author: {article.author}</h3>
      </li>
    </ul>
  );
};

export default SingleArticle;
