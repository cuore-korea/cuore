import React from 'react';
import { Award, Users, Heart, Sparkles } from 'lucide-react';
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';

const About = () => {
  const stats = [
    { number: '60+', label: '년의 경험', icon: Award },
    { number: '50,000+', label: '미용실 갯수', icon: Users },
    { number: '100%', label: '천연 성분', icon: Heart },
    { number: '20+', label: '프리미엄 제품', icon: Sparkles },
  ];

  const features = [
    {
      image: f1,
      title: '직판 체제이기 때문에 친밀하고 신속한 서포트',
      description: '판매 대리점 경유가 아니라 화장품 메이커인 꾸오레의 스탭이 직접 담당하기 때문에, 미용실의 곤란과 요망에 신속하게 응할 수 있습니다.',
      number: '01',
    },
    {
      image: f2,
      title: '헤어 케어 + 스킨 케어 + 메이크업의 총 뷰티 제안',
      description: '꾸오레의 미용실 전매품은 스킨 케어도 전개. 페이셜 에스테틱이나 핸드 마사지 등으로 메뉴의 확충도 할 수 있어 경쟁사와의 차별화로 연결됩니다.',
      number: '02',
    },
    {
      image: f3,
      title: '꾸오레 전임의 미용 스탭에 의한 실천적인 강습',
      description: '미용 기술과 지식을 가진 영업 프로모션 스탭(SP)이 마사지와 메이크업 기술, 매출로 이어지는 상점 노하우를 스탭 여러분께 직접 지도합니다.',
      number: '03',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-20 relative">
          <h1 className="text-8xl md:text-9xl font-extrabold text-gray-100 absolute inset-0 flex items-center justify-center" style={{ letterSpacing: '0.1em' }}>
            TOTAL SUPPORT
          </h1>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              꾸오레이기 때문에 할 수 있는 일
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              꾸오레는 항상 미용실을 둘러싼 최신 동향을 분석하고 다양한 각도에서 미용실을 지원했습니다. 창업보다 축적한 노하우와 실적을 바탕으로 미용실의 과제를 발견하고 해결 방법을 함께 생각해 집객으로 이끌어 갑니다.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-32">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                <div className="w-28 h-28 bg-indigo-900 text-white rounded-full flex flex-col items-center justify-center text-center p-2">
                  <span className="text-xs leading-tight">꾸오레의<br/>총 지원</span>
                  <span className="font-bold text-3xl mt-1">{feature.number}</span>
                </div>
              </div>
              <div className="pt-12">
                <img src={feature.image} alt={feature.title} className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"/>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
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
