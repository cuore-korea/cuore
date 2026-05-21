import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/Products';
// 1. 방금 만든 공지사항 페이지 임포트
import NoticesPage from './pages/NoticesPage'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* 2. 공지사항 라우트 추가 */}
          <Route path="/notices" element={<NoticesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;