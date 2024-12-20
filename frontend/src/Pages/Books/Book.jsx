import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Book.css';


function Book() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Book 2', author: 'Author 2', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Book 3', author: 'Author 3', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Book 4', author: 'Author 4', image: 'https://via.placeholder.com/150' },
  ]); // Default 4 books

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Add search logic here if needed
  };

  const handleAddBookClick = () => {
    navigate('/add-book'); // Navigate to the add book page
  };

  return (
    <div className="book-page">
      <h1 className='Book-Top-Text'>Books</h1>
      <div className="top-search-bar">
        <input
          type="text"
          placeholder="Search books..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <button>
          <FaSearch className="search-icon" />
        </button>
      </div>

      <div className="book-cards">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} className="book-image" />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>

      <button className="add-book-button" onClick={handleAddBookClick}>
        Add Book
      </button>

      {/* Additional section for other books */}
      <div className="additional-books">
        <h2>More Books</h2>
        <div className="book-cards">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} className="book-image" />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Book;
