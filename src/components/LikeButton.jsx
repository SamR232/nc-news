import { useEffect, useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Button } from "@mui/material";
import { patchVotes } from "../utils/api";

export default function LikeButton({ article_id, votes }) {
  const [newVotes, setNewVotes] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setNewVotes(votes);
    if (!clicked) return;
    setNewVotes((currVotes) => currVotes + 1);
    patchVotes(article_id);
  }, [clicked, article_id, votes]);

  return (
    <Button onClick={() => setClicked(true)} variant="outlined">
      <ThumbUpIcon />
      {newVotes}
    </Button>
  );
}
