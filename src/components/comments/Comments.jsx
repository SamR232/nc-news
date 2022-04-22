import { getComments } from "../../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PostComment from "./PostComment";
import DeleteComment from "./DeleteComment";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((articleComments) => {
      setComments(articleComments);
    });
  }, [article_id]);

  return (
    <div>
      <PostComment
        article_id={article_id}
        s
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
              <DeleteComment
                comment_id={comment.comment_id}
                article_id={article_id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
