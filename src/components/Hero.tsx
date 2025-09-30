import React, { useState, useEffect } from 'react';
import { ArrowRight, FlaskConical, Sparkles, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import slide1 from '../assets/_top_slide1_01.jpg';
import slide2 from '../assets/_top_slide1_02.jpg';
import slide3 from '../assets/_top_slide1_03.jpg';

const images = [slide1, slide2, slide3];

const Hero = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow Background */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Decorative elements - reducing opacity */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose-100 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-100 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto bg-white/30 backdrop-blur-md rounded-2xl p-10 shadow-lg">
          <h1 className="font-lato text-5xl md:text-7xl text-white mb-6 uppercase italic">
            WILL CONTINUE
            <span className="block text-rose-600">
              TO BE BEAUTIFUL.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            전문 헤어케어 & 스킨케어
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button onClick={() => navigate('/products')} className="group bg-rose-600 text-white px-8 py-4 rounded-full hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              제품 둘러보기
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:border-rose-600 hover:text-rose-600 transition-all duration-300 transform hover:scale-105">
              상담 예약하기
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/50 transition-colors duration-300">
                <FlaskConical size={32} className="text-rose-600" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                <a href="https://cuore-beauty.co.jp/kinoshita/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">
                  연구개발: 기노시다제약
                </a>
              </h3>
              <p className="text-gray-200 font-light">새로운 " 아름다움 " 과
              " 건강함 " 의 창조</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/50 transition-colors duration-300">
                <Sparkles size={32} className="text-rose-600" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                <a href="https://cuore-beauty.co.jp/kinoshita/factory" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">
                  공장·생산설비
                </a>
              </h3>
              <p className="text-gray-200 font-light">충실한 제조 설비와 독자적인 품질 관리</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/50 transition-colors duration-300">
                <ShieldCheck size={32} className="text-rose-600" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                <Link to="/products" className="text-rose-600 hover:underline">
                  미용실 전매품
                </Link>
              </h3>
              <p className="text-gray-200 font-light">프로페셔널이 인정하는 퀄리티와 지원</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
