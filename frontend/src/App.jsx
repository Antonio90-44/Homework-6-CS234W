import React from "react";
import { Routes, Route } from "react-router-dom"; 
import BookListPage from "./BookListPage";
import AddBookPage from "./AddBookPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<BookListPage />} />
          <Route path="/add" element={<AddBookPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;