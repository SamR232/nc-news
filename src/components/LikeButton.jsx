import { useState, useEffect } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Button } from "@mui/material";
import { getArticleById, patchVotes } from "../utils/api";

export default function LikeButton() {
  const [votes, setVotes] = useState(0);
  const [clicked, setClicked] = useState(false);
  function handleClick(event) {
    event.preventDefault();
    setVotes((currVotes) => currVotes + 1);
    patchVotes().then((result) => {
      setClicked(true);
    });
  }

  return (
    <Button onClick={handleClick} variant="outlined">
      <ThumbUpIcon />
      {votes}
    </Button>
  );
}
