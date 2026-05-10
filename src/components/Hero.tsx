import React, { useState, useEffect } from 'react';
import { ShieldCheck, Factory, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';
import slide1 from '../assets/_top_slide1_01.jpg';
import slide2 from '../assets/_top_slide1_02.jpg';
import slide3 from '../assets/_top_slide1_03.jpg';

const images = [slide1, slide2, slide3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold tracking-wider mb-6 border border-white/30">
          SINCE 1965
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          미용실 점판의 개척기업<br />
          <span className="text-blue-300">꾸오레 화장품</span>
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          1965년 창업 이래 인터넷 판매를 하지 않고 오직 미용 프로에게만 제품을 유통합니다. 기노시다 제약의 기술력으로 안심하고 사용할 수 있는 제품을 만듭니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="px-8 py-4 bg-international-klein-blue text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            제품 전체보기
          </Link>
        </div>

        <div className="mt-20 pt-10 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <FlaskConical size={32} className="text-blue-300" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">60년 연구 및 개발</h3>
              <p className="text-gray-300 font-light text-sm">노화방지, 탈모, 미백 연구</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <Factory size={32} className="text-blue-300" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">기노시다 제약 제조</h3>
              <p className="text-gray-300 font-light text-sm">제약회사가 만드는 안심/안전</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <ShieldCheck size={32} className="text-blue-300" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">100% 미용실 전매</h3>
              <p className="text-gray-300 font-light text-sm">인터넷 판매 금지 원칙</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;