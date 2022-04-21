const Votes = () => {
  const [votes, setVotes] = useState(0);

  return (
    <Button
      onClick={() => setVotes((currVotes) => currVotes + 1)}
      variant="outlined"
    >
      <ThumbUpIcon />
      {votes}
    </Button>
  );
};

export default Votes;
