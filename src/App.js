// Code to render the BookList and BookDetail components using react-router-dom is provided.
//The BookList component is rendered when the path is /, the BookDetail component is rendered when the path is /create or /edit/:id.
// The BookDetail component is rendered with the id parameter when the path is /edit/:id.
//The BookDetail component is rendered without the id parameter when the path is /create.

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/homePage";
import BookList from "./components/bookLIst/bookList";
import BookDetail from "./components/bookDetail/bookDetail";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="book-list" element={<BookList />} />
        <Route path="/create" element={<BookDetail />} />
        <Route path="/edit/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
