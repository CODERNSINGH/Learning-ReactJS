// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// // import MainPage from './pages/MainPage'; 
// // import TrendingPage from './pages/TrendingPage';
// // import TechNewsPage from './pages/TechNewsPage';
// // import BusinessPage from './pages/BusinessPage';
// // import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Navbar />
//         <div className="content-wrapper">
//           <Sidebar />
//           <main className="main-section">
//             {/* <Routes>
//               <Route path="/" element={<MainPage />} />
//               <Route path="/trending" element={<TrendingPage />} />
//               <Route path="/tech" element={<TechNewsPage />} />
//               <Route path="/business" element={<BusinessPage />} />
//               Add more routes as needed
//             </Routes> */}
//           </main>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/SideBar'
import Note from './Note'
import NewsCard from './Newsop'

export default function App() {
  return (
    <div>
      {/* <Navbar/> */}
      
      {/* <Sidebar/> */}
      <NewsCard/>
      {/* <Note/> */}
    </div>
  )
}
