import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar

function Navbar({ isLoggedIn }) {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/todos">Todo List</Link>
      {isLoggedIn ? (
        <>
          <Link to="/ecommerce/products">Products</Link>
          <Link to="/ecommerce/cart">Cart</Link>
          <Link to="/logout">Logout</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </div>
  );
}

export default Navbar;

