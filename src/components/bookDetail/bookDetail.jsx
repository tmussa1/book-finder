import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: "", authors: "", description: "" });

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        console.log(response);
        setBook(response.data.volumeInfo || {});
      };
      fetchData();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSave = () => {
    // Simulate saving data and redirecting to list
    console.log("Book saved:", book);
    navigate("/");
  };

  return (
    <Container>
      <h1>{id ? "Edit Book" : "Create Book"}</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Title"
            value={book.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Authors</Form.Label>
          <Form.Control
            type="text"
            name="authors"
            placeholder="Authors"
            value={book.authors}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Description"
            value={book.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default BookDetail;
