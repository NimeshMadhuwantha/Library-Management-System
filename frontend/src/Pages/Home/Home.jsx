import React from 'react'
import './Home.css';
import LibraryHome from '../../assets/LibraryHome.jpg'
import { FaSearch } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-section">
        <img 
          src={LibraryHome}
          alt="Background" 
          className="background-image"
        />
        <div className="background-overlay">
          <h1>BookIT Biggest Library</h1>
          <p>Your ultimate destination for endless knowledge and adventure.</p>
        </div>

       
        <div className="top-search-bar">
      <input type="text" placeholder="Search books..." />
      <button>
        <FaSearch className="search-icon" /> 
      </button>
        </div>
      </div>

      {/* Form */}
      <div className="form-section">
        <input type="text" placeholder="Author Name" />
        <input type="text" placeholder="Book Name" />
        <button>Search</button>
      </div>

      {/* Welcome */}
      <div className="welcome-section">
        <h2>Welcome to BookIT</h2>
        <p>Explore a wide range of books across various genres. Discover your next favorite book today!</p>
      </div>

      {/* Categories */}
      <div className="categories-section">
        <div className="category-card">Kids</div>
        <div className="category-card">Youth</div>
        <div className="category-card">Adult</div>
        <div className="category-card">Funny</div>
      </div>
    </div>
  )
}

export default Home