import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  padding: 2rem;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-image: url("https://unsplash.com/photos/white-wooden-shelf-with-books-FKqxZ58bVjU");
  background-size: cover;
  background-position: center;
`;

const Button = styled.button`
  background-color: #17a2b8;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #138496;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: -0.5rem;
`;

const Col = styled.div`
  padding: 0.5rem;
  width: 100%;
`;

const HorizontalCard = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  overflow: hidden;
  margin: 0.5rem 0;
  flex-direction: row;
`;

const CardImg = styled.img`
  width: 150px;
  height: auto;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardTitle = styled.h5`
  margin: 0 0 0.5rem 0;
`;

const CardText = styled.p`
  margin: 0;
`;

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [showBooks, setShowBooks] = useState(false);

  useEffect(() => {
    // Fetching books from Google Books API
    const fetchBooks = async () => {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=javascript"
      );
      setBooks(response.data.items);
    };
    fetchBooks();
  }, []);

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <h1>Discover New Books</h1>
        <p>
          Explore a wide range of books on various topics. Find your next read
          and dive into the world of knowledge and imagination.
        </p>
        <Button onClick={() => setShowBooks(true)}>Explore Books</Button>
      </HeroSection>

      {showBooks && (
        <>
          <h2>Book Collection</h2>
          <Row>
            {books.map((book, index) => (
              <Col key={index}>
                <HorizontalCard>
                  <CardImg
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                  <CardBody>
                    <CardTitle>{book.volumeInfo.title}</CardTitle>
                    <CardText>{book.volumeInfo.authors?.join(", ")}</CardText>
                  </CardBody>
                </HorizontalCard>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default HomePage;
