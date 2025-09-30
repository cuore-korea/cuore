import React from 'react';
import { ArrowRight, FlaskConical, Sparkles, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-pink-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            CONTINUE TO BE
            <span className="block text-rose-600">BEAUTIFUL</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            꾸오레는 미용실 전매를 목적으로 한 <a href="https://cuore-beauty.co.jp/kinoshita/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">기노시다제약</a>에서 제조되는 화장품 메이커입니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-rose-600 text-white px-8 py-4 rounded-full hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              제품 둘러보기
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-rose-600 hover:text-rose-600 transition-all duration-300 transform hover:scale-105">
              상담 예약하기
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition-colors duration-300">
                <FlaskConical size={32} className="text-rose-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                <a href="https://cuore-beauty.co.jp/kinoshita/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">
                  연구개발: 기노시다제약
                </a>
              </h3>
              <p className="text-gray-600 font-light">새로운 " 아름다움 " 과
              " 건강함 " 의 창조</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition-colors duration-300">
                <Sparkles size={32} className="text-rose-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                <a href="https://cuore-beauty.co.jp/kinoshita/factory" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">
                  공장·생산설비
                </a>
              </h3>
              <p className="text-gray-600 font-light">충실한 제조 설비와 독자적인 품질 관리</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition-colors duration-300">
                <ShieldCheck size={32} className="text-rose-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                <a href="/products" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">
                  미용실 전매품
                </a>
              </h3>
              <p className="text-gray-600 font-light">프로페셔널이 인정하는 퀄리티</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
