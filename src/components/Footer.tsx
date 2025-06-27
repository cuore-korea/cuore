import React from 'react';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light mb-4">큐어 뷰티</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              자연과 과학의 완벽한 조화로 피부 본연의 아름다움을 되찾아드리는 프리미엄 뷰티 브랜드입니다.
            </p>
            <div className="flex items-center gap-2 text-rose-400">
              <Heart size={16} className="fill-current" />
              <span className="text-sm">자연스러운 아름다움</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">빠른 링크</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  홈
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  제품
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  브랜드
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  서비스
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  연락처
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4">서비스</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  프리미엄 페이셜
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  골드 리프팅
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  수분 케어
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  브라이트닝
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors duration-200">
                  맞춤 상담
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">연락처</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-rose-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  서울특별시 강남구 청담동 123-45<br />
                  청담 뷰티 플라자 3층
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-rose-400" />
                <span className="text-gray-300 text-sm">02-1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-rose-400" />
                <span className="text-gray-300 text-sm">hello@cuore-beauty.co.kr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 큐어 뷰티. 모든 권리 보유.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-200">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-200">
                이용약관
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-200">
                사업자정보
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;