//AddBookPage
//Antonio De la Merced
//03/04/2026
import { useState } from "react";
import AddBookForm from "./AddBookForm";

const AddBookPage = () => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => setBooks([...books, newBook]);

  return (
    <div>
      <h2>Add a New Book</h2>
      <AddBookForm onAddBook={addBook} />
    </div>
  );
};

export default AddBookPage;