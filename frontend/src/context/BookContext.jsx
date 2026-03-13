import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const { data: books, setData: setBooks, loading, error } = useFetch(
    "http://localhost:3000/books"
  );

  const addBook = (newBook) => setBooks((prev) => [...prev, newBook]);

  const deleteBook = async (id) => {
    try {
      await fetch(`http://localhost:3000/books/${id}`, { method: "DELETE" });
      setBooks((prev) => prev.filter((book) => book._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const editBook = async (id, updatedData) => {
    try {
      const res = await fetch(`http://localhost:3000/books/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      const data = await res.json();
      setBooks((prev) => prev.map((book) => (book._id === id ? data.book : book)));
    } catch (err) {
      console.error("Edit error:", err);
    }
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook, editBook, loading, error }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error("useBooks must be used inside a BookProvider");
  return context;
};