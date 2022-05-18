import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="navBarList">
        <li className="navList">
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </li>
        <li className="navList">
          <Link to="/topics">
            <h3>Topics</h3>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
