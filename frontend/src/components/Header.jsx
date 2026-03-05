import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>Book Review- Homework 7</h1>
      <nav>
        <Link to="/">All Books</Link> | <Link to="/add">Add Book</Link>
      </nav>
    </header>
  );
};

export default Header;