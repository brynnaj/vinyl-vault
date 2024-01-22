import React from 'react';
import Home from './home';
import Contact from './contact'
import Shop from './shop'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <footer>
        <h3>Subscribe to our newsletter for updates!</h3>
        <form className="subscribe">
          <input type="text" id="footer-email" name="footer-email" required />
          <button style = {{marginLeft: '10px'}}>Submit</button>
        </form>
        <a href="https://www.facebook.com/brynnaj">Facebook</a>
        <a href="https://www.instagram.com/brynn.aj/">Instagram</a>
      </footer>
    </>
  );
}



export default App;



