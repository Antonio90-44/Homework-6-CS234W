// App.jsx
import "./App.css";
import React from "react";
import BookList from "./BookList";

const App = () => {
  return (
    <div className="app-container">
      <h1>Book Review App</h1>
      <BookList />
    </div>
  );
};

export default App;