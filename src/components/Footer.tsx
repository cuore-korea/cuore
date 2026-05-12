import React from 'react';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';
import CuoreLogo from '../assets/logo_cuore.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={CuoreLogo} alt="Cuore Logo" className="h-8 mb-4" />
            <p className="text-gray-300 mb-6 leading-relaxed">
            꾸오레 화장품은 기노시다제약에서 (두피, 헤어, 기초) 제조되는
            화장품으로 <br />1965년 창립된 미용실 전문제품입니다. <br />
            인터넷 판매를 하지 않습니다.
            </p>
            <div className="flex items-center gap-2 text-rose-400">
              <Heart size={16} className="fill-current" />
              <span className="text-sm">자연스러운 아름다움</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">사이트</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  홈
                </a>
              </li>
              <li>
                <a href="products" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  제품
                </a>
              </li>
              <li>
                <a href="about" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  브랜드
                </a>
              </li>
              <li>
                <a href="services" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  서비스
                </a>
              </li>
              <li>
                <a href="contact" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  연락처
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">회사 정보</h4>
            <div className="relative pl-4">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700"></div>
              <div className="mb-4 relative">
                <div className="absolute -left-5 top-1.5 w-2 h-2 rounded-full bg-rose-400"></div>
                <p className="text-sm text-gray-300">1965년</p>
                <p className="text-xs text-gray-400">회사 창립</p>
              </div>
              <div className="mb-4 relative">
                <div className="absolute -left-5 top-1.5 w-2 h-2 rounded-full bg-rose-400"></div>
                <p className="text-sm text-gray-300">1980년</p>
                <p className="text-xs text-gray-400">미용실 전문 제품 출시</p>
              </div>
              <div className="relative">
                <div className="absolute -left-5 top-1.5 w-2 h-2 rounded-full bg-rose-400"></div>
                <p className="text-sm text-gray-300">1990년</p>
                <p className="text-xs text-gray-400">한국 꾸오레(주) 설립</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">연락처</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-rose-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  서울시 강남구 논현로157길 30 <br />
                  꾸오레화장품 2층
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-rose-400 flex-shrink-0" />
                <a 
                  href="tel:02-553-6035" 
                  className="text-gray-300 text-sm hover:text-white hover:underline transition-all duration-200 block w-full py-1"
                >
                  (02) 553 – 6035
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-rose-400 flex-shrink-0" />
                <a 
                  href="mailto:cuore123@hanmail.net" 
                  className="text-gray-300 text-sm hover:text-white hover:underline transition-all duration-200 block w-full py-1"
                >
                  cuore123@hanmail.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;