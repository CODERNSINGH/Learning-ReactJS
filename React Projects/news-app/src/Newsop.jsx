// NewsCard.jsx
import React, { useState } from 'react';
import './Newop.css';

const NewsCard = () => {
//   const [showOptions, setShowOptions] = useState(false);
  
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { 
//       month: 'short', 
//       day: 'numeric',
//       year: 'numeric'
//     });
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: article.title,
//         text: article.description,
//         url: article.url
//       });
//     } else {
//       // Fallback for browsers that don't support the Web Share API
//       navigator.clipboard.writeText();
//       alert('Link copied to clipboard!');
//     }
//   };

  return (
    <div className="news-card">
      <div className="news-card-header">
        <div className="source-info">
          <img 
            src={`https://images.unsplash.com/photo-1559116315-702b0b4774ce?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} 
            alt='' 
            className="source-icon"
          />
          <span className="source-name">jai Hree</span>
          <span className="publish-date">Hello</span>
        </div>
        <div className="more-options">
          <button  className="options-button">
            •••
          </button>
          
            <div className="options-dropdown">
              <button>Not interested</button>
              <button>Block this source</button>
              <button>Report</button>
            </div>
          
        </div>
      </div>
      
      <div className="news-card-content">
        <h2 className="news-title">
          <a href='/' target="_blank" rel="noopener noreferrer">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, alias ex ipsum expedita dicta dolorum aliquam, laudantium consequatur aperiam possimus dolorem deserunt quisquam voluptatem quos debitis tenetur sapiente ut suscipit quo! Earum, quasi incidunt.
          </a>
        </h2>
        
          <div className="news-image-container">
            <img src={``} alt={``} className="news-image" />
          </div>
        
        <p className="news-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam recusandae dolorem excepturi reprehenderit, ipsa rem, non expedita ad assumenda, nulla sunt. Velit enim incidunt, voluptate voluptatibus perferendis distinctio consectetur explicabo iusto rem earum tempora consequuntur quam, autem quae! Placeat aperiam voluptas temporibus pariatur natus est quisquam animi, molestiae provident.</p>
      </div>
      
      <div className="news-card-actions">
        <button 
          className={`action-button like-button `}
          
        >
          <span className="icon">♥</span>
          <span className="count"></span>
        </button>
        <button 
          className={`action-button favorite-button `}
         
        >
          <span className="icon"></span>
        </button>
        <button className="action-button share-button" >
          <span className="icon">↗</span>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;