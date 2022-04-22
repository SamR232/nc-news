import Button from "@mui/material/Button";
import { deleteComment, getComments } from "../../utils/api";

const DeleteComment = ({ comment_id, article_id }) => {
  function handleClick(event) {
    event.preventDefault();
    alert("Are you sure you want to delete this comment?");
    deleteComment(comment_id);
    getComments(article_id).then((articleComments) => {
      return [articleComments];
    });
  }

  return (
    <>
      <Button onClick={handleClick} variant="contained">
        Delete Comment
      </Button>
    </>
  );
};

export default DeleteComment;
