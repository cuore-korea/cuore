import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, ChevronDown } from 'lucide-react';
import logo from '../assets/logo_cuore.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const productCategories = [
    { name: '스킨케어', path: '/products#skincare' },
    { name: '헤어케어', path: '/products#haircare' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="CUORE" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-light">
              홈
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
                <Link to="/products" className="flex items-center gap-1 text-gray-700 hover:text-rose-600 transition-colors duration-200 font-light">
                    제품
                    <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} 
                    />
                </Link>
              
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 transition-all duration-200 ${
                isProductsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {productCategories.map((category, index) => (
                  <Link
                    key={index}
                    to={category.path}
                    className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors duration-200 font-light"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <a href="/#about" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-light">
              브랜드
            </a>
            <a href="/#services" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-light">
              서비스
            </a>
            <a href="/#contact" className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-light">
              연락처
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-rose-600 transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-rose-600 transition-colors duration-200">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-rose-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-rose-600 font-light">
                홈
              </Link>
              
              <div className="px-3 py-2">
                <Link to="/products" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-light mb-2">제품</Link>
                <div className="pl-4 space-y-1">
                  {productCategories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1 text-sm text-gray-600 hover:text-rose-600 font-light"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              <a href="/#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-rose-600 font-light">
                브랜드
              </a>
              <a href="/#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-rose-600 font-light">
                서비스
              </a>
              <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-rose-600 font-light">
                연락처
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
