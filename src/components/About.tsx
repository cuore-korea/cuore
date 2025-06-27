import React from 'react';
import { Award, Users, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '15+', label: '년의 경험', icon: Award },
    { number: '50,000+', label: '만족한 고객', icon: Users },
    { number: '100%', label: '천연 성분', icon: Heart },
    { number: '20+', label: '프리미엄 제품', icon: Sparkles },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              자연과 과학의
              <span className="block text-rose-600">완벽한 조화</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              큐어 뷰티는 자연에서 찾은 순수한 성분과 첨단 과학 기술을 결합하여 
              피부 본연의 아름다움을 되찾아드리는 것을 목표로 합니다.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-rose-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">자연 친화적 성분</h4>
                  <p className="text-gray-600">
                    화학 성분 대신 자연에서 추출한 순수한 원료만을 사용합니다
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-rose-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">과학적 검증</h4>
                  <p className="text-gray-600">
                    모든 제품은 피부과학 연구를 통해 안전성과 효능이 입증되었습니다
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-rose-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">맞춤형 케어</h4>
                  <p className="text-gray-600">
                    개인의 피부 타입과 고민에 맞는 맞춤형 솔루션을 제공합니다
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-rose-600 text-white px-8 py-4 rounded-full hover:bg-rose-700 transition-colors duration-200 font-medium">
              브랜드 스토리 더보기
            </button>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/7755212/pexels-photo-7755212.jpeg"
                alt="About Cuore Beauty"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-full h-full bg-rose-100 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-gray-100">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition-colors duration-300">
                  <Icon size={24} className="text-rose-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-light">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;