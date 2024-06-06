import React from "react";
import "./home.css";
import SearchButton from "../searchButton/SearchButton";
import { BookContext } from "../bookContext/bookContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { fetchBooks } = React.useContext(BookContext);

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (event.target.value === "") {
      fetchBooks();
    }
    navigate("/bookList");
  };

  return (
    <div className="home-background">
      <div className="home-overlay"></div>
      <div className="home-content">
        <section className="styled-section">
          <h1 className="heading-style">Welcome to the Book Library</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search for books..."
            onChange={handleSearch}
          />
          <SearchButton />
          <div className="container-style">
            <p className="para-style">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus at architecto omnis perspiciatis pariatur laudantium
              consequatur asperiores sunt, labore repudiandae, excepturi
              consectetur, necessitatibus quisquam enim atque neque nam maxime
              commodi!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
