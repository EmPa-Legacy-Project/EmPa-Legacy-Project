import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/Book/About";
import BookDetail from "./components/Book/BookDetail";
import Auth from "./components/Book/auth";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
          <Route path="/auth" element={<Auth />} exact />
          
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
