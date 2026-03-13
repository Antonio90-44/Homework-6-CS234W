//Book.jsx
 import { useState } from "react";
import { useBooks } from "./context/BookContext";

const Book = ({ book }) => {

  const { deleteBook, editBook } = useBooks();

  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(book.title);
  const [newAuthor, setNewAuthor] = useState(book.author);
  const [newGenre, setNewGenre] = useState(book.genre || "");

  const saveChanges = () => {
    editBook(book._id, {
      title: newTitle,
      author: newAuthor,
      genre: newGenre
    });

    setEditing(false);
  };

  return (
    <div className="book">

      {editing ? (
        <>
          <input value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)} />

          <input value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)} />

          <input value={newGenre}
            onChange={(e) => setNewGenre(e.target.value)} />

          <button onClick={saveChanges}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.genre}</p>

          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteBook(book._id)}>Delete</button>
        </>
      )}

    </div>
  );
};

export default Book;