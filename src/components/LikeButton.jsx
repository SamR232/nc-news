import { useEffect, useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Button } from "@mui/material";
import { patchVotes } from "../utils/api";

export const LikeButton = ({ article_id, votes }) => {
  const [newVotes, setNewVotes] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setNewVotes(votes);
    if (!clicked) return;
    setNewVotes((currVotes) => currVotes + 1);
    patchVotes(article_id, { inc_votes: 1 });
  }, [clicked, article_id, votes]);

  return (
    <Button
      onClick={() => setClicked(true)}
      variant="outlined"
      className="likeButton"
    >
      <ThumbUpIcon />
      {newVotes}
    </Button>
  );
};

export const DislikeButton = ({ article_id, votes, setUpdatedVotes }) => {
  const [newVotes, setNewVotes] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setNewVotes(votes);
    if (!clicked) return;
    setNewVotes((currVotes) => currVotes - 1);
    patchVotes(article_id, { inc_votes: -1 });
  }, [clicked, article_id, votes]);

  return (
    <Button
      onClick={() => setClicked(true)}
      variant="outlined"
      className="likeButton"
    >
      <ThumbDownIcon />
      {newVotes}
    </Button>
  );
};
