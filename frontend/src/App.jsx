import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <dir>
    <NavBar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </Router>
    </dir>
  )
}

export default App
