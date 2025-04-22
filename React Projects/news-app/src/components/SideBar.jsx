import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, TrendingUp, Cpu, Briefcase, Newspaper, Hash, Bell, Bookmark, User } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">
      <div className="sidebar-logo">NewsApp</div>
      
      <nav className="sidebar-nav">
        <Link to="/" className={`sidebar-link ${isActive('/') ? 'active' : ''}`}>
          <Home className="sidebar-icon" />
          <span className="sidebar-link-text">Home</span>
        </Link>
        
        <Link to="/trending" className={`sidebar-link ${isActive('/trending') ? 'active' : ''}`}>
          <TrendingUp className="sidebar-icon" />
          <span className="sidebar-link-text">Trending</span>
        </Link>
        
        <Link to="/tech" className={`sidebar-link ${isActive('/tech') ? 'active' : ''}`}>
          <Cpu className="sidebar-icon" />
          <span className="sidebar-link-text">Tech News</span>
        </Link>
        
        <Link to="/business" className={`sidebar-link ${isActive('/business') ? 'active' : ''}`}>
          <Briefcase className="sidebar-icon" />
          <span className="sidebar-link-text">Business</span>
        </Link>
      </nav>
      
      <div className="sidebar-categories">
        <h3 className="category-title">Discover</h3>
        <nav className="sidebar-nav">
          <Link to="/latest" className={`sidebar-link ${isActive('/latest') ? 'active' : ''}`}>
            <Newspaper className="sidebar-icon" />
            <span className="sidebar-link-text">Latest News</span>
          </Link>
          
          <Link to="/topics" className={`sidebar-link ${isActive('/topics') ? 'active' : ''}`}>
            <Hash className="sidebar-icon" />
            <span className="sidebar-link-text">Topics</span>
          </Link>
          
          <Link to="/notifications" className={`sidebar-link ${isActive('/notifications') ? 'active' : ''}`}>
            <Bell className="sidebar-icon" />
            <span className="sidebar-link-text">Notifications</span>
          </Link>
          
          <Link to="/bookmarks" className={`sidebar-link ${isActive('/bookmarks') ? 'active' : ''}`}>
            <Bookmark className="sidebar-icon" />
            <span className="sidebar-link-text">Bookmarks</span>
          </Link>
          
          <Link to="/profile" className={`sidebar-link ${isActive('/profile') ? 'active' : ''}`}>
            <User className="sidebar-icon" />
            <span className="sidebar-link-text">Profile</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}