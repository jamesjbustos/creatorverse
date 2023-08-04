import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="Header-title">
        💫 creatorverse
      </Link>
      <nav className="Header-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-creator">Add Creator</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
