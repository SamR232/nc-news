import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Button } from "@mui/material";
import { patchVotes } from "../utils/api";

export default function LikeButton({ article_id }) {
  const [votes, setVotes] = useState(0);
  const [clicked, setClicked] = useState(false);

  function handleClick(event) {
    event.preventDefault();

    if (!clicked) {
      setVotes((currVotes) => currVotes + 1);
      patchVotes(article_id).then(({ data }) => {
        console.log(data);
        setClicked(true);
      });
    }
  }

  return (
    <Button onClick={handleClick} variant="outlined">
      <ThumbUpIcon />
      {votes}
    </Button>
  );
}
