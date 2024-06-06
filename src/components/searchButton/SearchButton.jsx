import styled from "styled-components";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../bookContext/bookContext";

const ButtonContainer = styled.div`
  display: flex;
  gap: 1em;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: white;

  &.primary {
    background-color: #007bff;
  }

  &.secondary {
    background-color: #6c757d;
  }
`;

function SearchButton() {
  const { fetchBooks } = useContext(BookContext);
  const [search] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (event.target.value === "") {
      fetchBooks();
    }
    navigate("/bookList");
  };
  return (
    <ButtonContainer>
      <Button className="primary">Search</Button>
      <Button className="secondary">I Like to Read </Button>
    </ButtonContainer>
  );
}

export default SearchButton;
