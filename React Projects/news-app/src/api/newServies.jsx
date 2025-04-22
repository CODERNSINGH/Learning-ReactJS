import DummyData from '../DummyData/data';

// Replace with your actual API key when ready
const API_KEY = 'YOUR_NEWS_API_KEY';
const BASE_URL = 'https://newsapi.org/v2';

// Use this for production with real API
export async function fetchFromAPI(endpoint, params = {}) {
  try {
    const queryParams = new URLSearchParams({
      ...params,
      apiKey: API_KEY
    });
    
    const response = await fetch(`${BASE_URL}/${endpoint}?${queryParams}`);
    
    if (!response.ok) {
      throw new Error(`News API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching from News API:', error);
    // Return dummy data as fallback
    return DummyData.articles;
  }
}

// Fetch headline news
export async function fetchHeadlineNews(country = 'us') {
  // Uncomment to use real API
  // return fetchFromAPI('top-headlines', { country });
  
  // Using dummy data for development
  return DummyData.articles;
}

// Fetch news by category
export async function fetchCategoryNews(category, country = 'us') {
  // Uncomment to use real API
  // return fetchFromAPI('top-headlines', { category, country });
  
  // Using dummy data filtered by category for development
  // In a real app, this would be filtered by the API
  return DummyData.articles.filter(article => 
    article.category === category || 
    article.title.toLowerCase().includes(category.toLowerCase())
  );
}

// Fetch trending news
export async function fetchTrendingNews() {
  // Uncomment to use real API
  // return fetchFromAPI('top-headlines', { sortBy: 'popularity' });
  
  // Using dummy data for development
  // Sort by publishedAt date to simulate trending
  return [...DummyData.articles].sort((a, b) => 
    new Date(b.publishedAt) - new Date(a.publishedAt)
  );
}

// Search news by keyword
export async function searchNews(query) {
  // Uncomment to use real API
  // return fetchFromAPI('everything', { q: query });
  
  // Using dummy data filtered by query for development
  if (!query) return [];
  
  return DummyData.articles.filter(article => 
    article.title.toLowerCase().includes(query.toLowerCase()) || 
    article.description?.toLowerCase().includes(query.toLowerCase())
  );
}