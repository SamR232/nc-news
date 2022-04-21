import { getComments } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, SetComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((articleComments) => {
      SetComments(articleComments);
    });
  });

  return (
    <ul>
      {comments.map((comment) => {
        return (
          <>
            <li className="articles" key={comment.comment_id}>
              <p>{comment.body}</p>
              <h3>Author: {comment.author}</h3>
              <h3>Created at: {comment.created_at}</h3>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default Comments;
