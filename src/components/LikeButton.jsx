import { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Button } from "@mui/material";
import { patchIncreaseVote, patchDecreaseVote } from "../utils/api";

export const LikeButton = ({ article_id, votes }) => {
  const [newVotes, setNewVotes] = useState(votes);
  const [clicked, setClicked] = useState(false);

  const handleLike = () => {
    if (clicked) return;
    setNewVotes((currVotes) => currVotes + 1);
    patchIncreaseVote(article_id);
    setClicked(true);
    alert("Thank you for voting!");
  };
  const handleDislike = () => {
    if (clicked) return;
    setNewVotes((currVotes) => currVotes - 1);
    patchDecreaseVote(article_id);
    setClicked(true);
    alert("Thank you for voting!");
  };

  return (
    <>
      <Button onClick={handleLike} variant="outlined">
        <ArrowCircleUpIcon fontSize={"small"} />
      </Button>
      <Button onClick={handleDislike} variant="outlined">
        <ArrowCircleDownIcon fontSize={"small"} />
      </Button>
      <p>Total votes: {newVotes}</p>
    </>
  );
};
