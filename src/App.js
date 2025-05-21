import React, { useState, useEffect } from 'react';
import './App.css';
import defaultBooks from './data/books';

const STORAGE_KEY = 'bookshelf-data';

function App() {
  // 初期読み込み：localStorageがあればそれを使う
  const [books, setBooks] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultBooks;
  });

  // booksが変わるたびに保存
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  const updateReadPages = (id, value) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, readPages: Number(value) } : book
      )
    );
  };

  const updateNote = (id, value) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, note: value } : book
      )
    );
  };

  return (
    <div className="app">
      <h1>bookshelf</h1>
      <div className="book-list">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} />
            <div className="book-info">
              <div className="progress">
                <input
                  type="number"
                  min="0"
                  max={book.totalPages}
                  value={book.readPages}
                  onChange={(e) => updateReadPages(book.id, e.target.value)}
                />
                <span> / {book.totalPages}</span>
              </div>
              <div className="book-title">{book.title}</div>
              <textarea
                className="note-area"
                placeholder="enter notes..."
                value={book.note || ''}
                onChange={(e) => updateNote(book.id, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
