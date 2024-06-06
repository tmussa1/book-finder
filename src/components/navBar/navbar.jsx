import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

/**
 * Renders the navigation bar component.
 *
 * @returns {JSX.Element} The rendered navigation bar.
 */
export const NavBar = () => {
  return (
    <nav className="bookList">
      <h3>📖</h3>
      <ul className="book-list-item">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/book-list">Book List</Link>
        </li>
        <li>
          <Link to="/bookDetail">Book Detail</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
