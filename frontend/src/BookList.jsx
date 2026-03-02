// BookList.jsx
import { useEffect, useState } from "react";
import Book from "./Book";
import AddBookForm from "./AddBookForm";

const BookList = () => {
  const [books, setBooks] = useState([]);

  // GET books from API
  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = async (id) => {
    await fetch(`http://localhost:3000/books/${id}`, { method: "DELETE" });
    setBooks(books.filter((book) => book._id !== id));
  };

  const editBook = async (id, updatedData) => {
    const response = await fetch(`http://localhost:3000/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    const data = await response.json();

    setBooks(
      books.map((book) => (book._id === id ? data.book : book))
    );
  };

  return (
    <div>
      <h2>Books</h2>
      <AddBookForm onAddBook={addBook} />
      <div className="booksList">
        {books.map((book) => (
          <Book
            key={book._id}
            book={book}
            onDelete={deleteBook}
            onEdit={editBook}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;