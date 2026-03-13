import { useBooks } from "../context/BookContext";
import Book from "./Book";
import AddBookForm from "./AddBookForm";

const BookList = () => {
  const { books, loading, error } = useBooks();

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!books || books.length === 0) return <p>No books found.</p>;

  return (
    <div>
      <h2>Books</h2>
      <AddBookForm />
      <div className="booksList">
        {books.map((book) => (
          <Book key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;