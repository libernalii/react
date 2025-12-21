import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import { booksData } from "./data/booksData";

import "./App.scss"



function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [books, setBooks] = useState(booksData);


  return (
    <>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} isAuth={isAuth} />} />
        <Route path="/books/:id" element={<BookDetails books={books} />} />

        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        <Route
          path="/books/new"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <AddBook setBooks={setBooks} />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
