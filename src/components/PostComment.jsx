import { useState, useEffect } from "react";
import { postComment } from "../utils/api";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const PostComments = ({ article_id }) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    postComment(username, comment, article_id).then((result) => {
      console.log(result);
    });
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-multiline-flexible"
          label="Username"
          multiline
          maxRows={4}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Add your comment here!"
          multiline
          maxRows={4}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <input type="submit" />
      </form>
    </Box>
  );
};

export default PostComments;
