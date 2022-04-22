import { getComments } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PostComment from "./PostComment";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  console.log(comments);

  useEffect(() => {
    getComments(article_id).then((articleComments) => {
      setComments(articleComments);
    });
  }, [article_id]);

  return (
    <div>
      <PostComment
        article_id={article_id}
        setComments={setComments}
        comments={comments}
      />
      <ul>
        {comments.map((comment) => {
          return (
            <li className="articles" key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>Author: {comment.author}</p>
              <p>Created at: {comment.created_at}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
