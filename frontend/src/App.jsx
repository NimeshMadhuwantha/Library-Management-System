import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Book from './Pages/Books/Book';
import AddBookPage from './Pages/AddBook/AddBookPage';
import LoginPage from './Pages/LoginPage/LoginPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <NavBar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Book />} />
        <Route path="/add-book" element={<AddBookPage />} /> 
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>

    </Router>
    {/* <Footer/> */}
    </div>
  )
}

export default App
