import { useState } from "react";
import { postComment } from "../../utils/api";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const PostComment = ({ article_id, setComments }) => {
  const [username, setUsername] = useState("tickle122");
  const [newComment, setNewComment] = useState("");

  function handleSubmit(event) {
    if (username === "" || newComment === "")
      alert("More information required to add comment");
    else {
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
  }

  return (
    <Box
      sx={{
        margin: "15px",
        width: "100%",
      }}
    >
      <TextField
        sx={{
          margin: "10px",
          width: "50%",
        }}
        id="outlined-multiline-flexible"
        label="Username"
        required
        maxRows={4}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        sx={{
          mx: "5px",
          width: "80%",
        }}
        id="outlined-multiline-flexible"
        label="Add your comment here!"
        fullWidth
        multiline
        required
        maxRows={4}
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
      />
      <Button
        size="large"
        sx={{
          mx: "5px",
          my: "5px",
        }}
        type="submit"
        variant="contained"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default PostComment;
