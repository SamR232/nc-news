import { Link } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export const ErrorHandling = ({ status, msg }) => {
  return (
    <div className="ErroHandling">
      <h1>
        Page not found <SentimentVeryDissatisfiedIcon />
      </h1>

      <button>
        <Link to="/">Back to home</Link>
      </button>
    </div>
  );
};
