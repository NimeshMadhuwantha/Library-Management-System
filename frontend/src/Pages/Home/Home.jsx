import React from 'react'
import './Home.css';
import LibraryHome from '../../assets/LibraryHome.jpg'
import { FaSearch } from 'react-icons/fa';
import Book1 from '../../assets/Books/Book1.jpeg'
import Book2 from '../../assets/Books/Book2.jpeg'
import Book3 from '../../assets/Books/Book3.jpeg'
import Book4 from '../../assets/Books/Book4.jpeg'
// import Footer from '../../Components/Footer/Footer';


const Home = () => {
  return (
    <>
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
          <div className="Home-Screen-buttons">
            <button className="ViewBook-btn">View Books</button>
            <button className="AddBook-btn">Add Books</button>
          </div>
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
        <input type="number" placeholder="Year" min="1000" max="9999" /> 
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

      <div className="top-categories-section">
        <h2>Our Top Categories</h2>
        <p>Explore our curated selection of top books across various genres.</p>
        
        <div className="top-categories-cards">
          <div className="category-Book">
            <img src={Book1} alt="Book 1" />
            <div className="card-content">
            </div>
          </div>
          <div className="category-Book">
            <img src={Book2} alt="Book 2" />
            <div className="card-content">
            </div>
          </div>
          <div className="category-Book">
            <img src={Book3} alt="Book 3" />
            <div className="card-content">
            </div>
          </div>
          <div className="category-Book">
            <img src={Book4} alt="Book 4" />
            <div className="card-content">
            </div>
          </div>
        </div>
      </div>

   
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Home