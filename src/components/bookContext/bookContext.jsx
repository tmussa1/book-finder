import React, { createContext, useState, useCallback, useEffect } from "react";

export const BookContext = createContext();

/**
 * Provides a context for managing books and search functionality.
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered component.
 */
export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  /**
   * Fetches books from the Google Books API based on the search term.
   * @async
   * @function
   */
  const fetchBooks = useCallback(async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }, [search]);

  // Fetch books whenever the search term changes
  useEffect(() => {
    if (search) {
      fetchBooks();
    }
  }, [fetchBooks, search]);

  return (
    <BookContext.Provider
      value={{ books, setBooks, search, setSearch, fetchBooks }}
    >
      {children}
    </BookContext.Provider>
  );
};
