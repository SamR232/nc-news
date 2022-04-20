import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <header>
        <h1>Marketplace</h1>

        <ul class="topics">
          <li>
            <Link to="/">
              <h2>Home</h2>
            </Link>
            <Link to="/topics">
              <h2>Topics</h2>
            </Link>
          </li>
        </ul>
      </header>
    </nav>
  );
};

export default NavBar;
