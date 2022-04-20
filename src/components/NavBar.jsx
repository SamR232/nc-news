import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="navBarList">
          <li className="navList">
            <Link to="/">
              <h2>Home</h2>
            </Link>
          </li>
          <li className="navList">
            <Link to="/topics">
              <h2>Topics</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
