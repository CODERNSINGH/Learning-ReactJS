import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Navbar.css';

export default function Navbar() {
  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    // Implement search functionality
  };

  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className="logo">NewsApp</Link>
          
          <div className="search-container">
            <SearchBar onSearch={handleSearch} />
          </div>
          
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}