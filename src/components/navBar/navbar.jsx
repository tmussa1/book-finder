import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./navbar.css";

// Styled components
const Navbar = styled.nav`
  background-color: #f8f9fa;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarBrand = styled(Link)`
  font-size: 1.25rem;
  color: #000;
  text-decoration: none;
  &:hover {
    color: #0056b3;
  }
`;

const NavbarNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 1rem;
`;

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  &:hover {
    color: #0056b3;
  }
`;

export const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand to="/">Book Finder</NavbarBrand>
      <NavbarNav>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/book-list">Book List</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/create">Add Book</NavLink>
        </NavItem>
      </NavbarNav>
    </Navbar>
  );
};

export default NavBar;
