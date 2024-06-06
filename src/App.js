import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookDetail from "./components/bookDetail/bookDetail";
import Footer from "./components/footer/footer";
import Navbar from "./components/navBar/navbar";
import Home from "./components/home/home";
import { BookContextProvider } from "./components/bookContext/bookContext";

import "./App.css";

function App() {
  return (
    <BookContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookList" element={<books />} />
            <Route path="/books/:id" element={<BookDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </BookContextProvider>
  );
}

export default App;
