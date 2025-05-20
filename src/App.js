import { useState } from 'react';
import './App.css';
import initialBooks from './data/books';

function App() {
  const [books, setBooks] = useState(initialBooks);

  const updateReadPages = (id, value) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, readPages: Number(value) } : book
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
                <span> / {book.totalPages}ページ</span>
              </div>
              <div className="book-title">{book.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
