import { useState } from "react";
import { postComment } from "../../utils/api";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const PostComment = ({ article_id, setComments }) => {
  const [username, setUsername] = useState("tickle122");
  const [newComment, setNewComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert("click ok to post comment!");
    setNewComment("");

    postComment(article_id, { body: newComment, username: username }).then(
      (comment) => {
        setComments((comments) => {
          return [comment, ...comments];
        });
      }
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-multiline-flexible"
        label="Username"
        required
        maxRows={4}
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Add your comment here!"
        fullWidth
        multiline
        required
        maxRows={4}
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default PostComment;
