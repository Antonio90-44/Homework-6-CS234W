//Antonio De la Merced
//03/11/2026

import { useState } from "react";
import { useBooks } from "./context/BookContext";

const AddBookForm = () => {

  const { addBook } = useBooks();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const newBook = { title, author, genre };

    try {

      const res = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      });

      const data = await res.json();

      addBook(data.book);

      setTitle("");
      setAuthor("");
      setGenre("");

    } catch (err) {
      console.error("Error adding book:", err);
    }
  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <button type="submit">Add Book</button>

    </form>

  );
};

export default AddBookForm;