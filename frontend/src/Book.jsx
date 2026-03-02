// Book.jsx
// Antonio De la Merced

import { useState } from "react";

const Book = ({ book, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(book.title);
  const [newAuthor, setNewAuthor] = useState(book.author);

  const saveChanges = () => {
    onEdit(book._id, { title: newTitle, author: newAuthor });
    setEditing(false);
  };

  return (
    <div className="book">
      {editing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
          <button onClick={saveChanges}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(book._id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Book;