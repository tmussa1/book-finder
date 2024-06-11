import React, { useState, useEffect } from "react";
import { fetchBooks } from "../../book"; // Import the fetchBooks function from the book module
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form, ListGroup } from "react-bootstrap";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBooks(search || "programming"); // Fetch all books initially
      setBooks(result);
    };

    fetchData();
  }, [search]);

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <Container>
      <h1> Book Finder </h1>
      <Form
        className="mb-3"
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="primary" className="mb-3">
        <Link to="/create" style={{ color: "white", textDecoration: "none" }}>
          Create
        </Link>
      </Button>
      <ListGroup>
        {books.map((book) => (
          <ListGroup.Item key={book.id}>
            <Row className="align-items-center">
              <Col>
                <strong>{book.volumeInfo.title}</strong>
              </Col>
              <Col
                className="text-end flex"
                style={{ display: "flex", gap: "8px" }}
              >
                <Button variant="danger" onClick={() => handleDelete(book.id)}>
                  Delete
                </Button>
                <Button variant="secondary">
                  <Link
                    to={`/edit/${book.id}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Edit
                  </Link>
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default BookList;
