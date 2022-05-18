import {
  SportsSoccerOutlined,
  Computer,
  Restaurant,
  Home,
  AccountCircle,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const IconLinks = () => {
  return (
    <>
      <Link to={`/`}>
        <Home className="icons" style={{ fontSize: 50 }} />
      </Link>
      <Link to={`/topics/coding`}>
        <Computer className="icons" style={{ fontSize: 50 }} />
      </Link>
      <Link to={`/topics/football`}>
        <SportsSoccerOutlined className="icons" style={{ fontSize: 50 }} />
      </Link>
      <Link to={`/topics/cooking`}>
        <Restaurant className="icons" style={{ fontSize: 50 }} />
      </Link>
      <Link to={`/users/:username`}>
        <AccountCircle className="icons" style={{ fontSize: 50 }} />
      </Link>
    </>
  );
};

export default IconLinks;
