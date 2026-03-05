//BookListPage
//Antonio De la Merced
//03/04/2026
import { useEffect, useState } from "react";
import Book from "./Book";

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

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
    setBooks(books.map((book) => (book._id === id ? data.book : book)));
  };

  const filteredBooks = filter
    ? books.filter((b) =>
        b.genre?.toLowerCase().includes(filter.toLowerCase())
      )
    : books;

  return (
    <div>
      <h2>All Books</h2>
      <input
        type="text"
        placeholder="Filter by genre..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="booksList">
        {filteredBooks.map((book) => (
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

export default BookListPage;