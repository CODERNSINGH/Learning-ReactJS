import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
// import { fetchHeadlineNews } from '../api/newsService';
import './MainPage.css';

export default function MainPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const newsData = await fetchHeadlineNews();
        setData(newsData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load news. Please try again later.');
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return <div className="loading-state">Loading latest news...</div>;
  }

  if (error) {
    return <div className="error-state">{error}</div>;
  }

  return (
    <div className="main-content">
      <div className="news-feed">
        <h1 className="feed-title">Top Headlines</h1>
        {data.length > 0 ? (
          data.map((article, index) => (
            <Card 
              key={index}
              imageURL={article.urlToImage}
              title={article.title}
              description={article.description}
              time={article.publishedAt}
              author={article.author}
              url={article.url}
            />
          ))
        ) : (
          <div className="no-news">No news articles available at the moment.</div>
        )}
      </div>
    </div>
  );
}