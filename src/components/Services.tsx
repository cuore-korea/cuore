import React from 'react';
import { Clock, Star, Users, Sparkles } from 'lucide-react';
import ConsultationBooking from './ConsultationBooking';

const Services = () => {
  const services = [
    {
      id: 1,
      name: '프리미엄 페이셜 케어',
      duration: '90분',
      price: '150,000원',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3997982/pexels-photo-3997982.jpeg',
      description: '개인의 피부 타입에 맞춘 맞춤형 페이셜 케어로 깊은 클렌징부터 영양 공급까지',
      features: ['피부 진단', '딥 클렌징', '마사지', '마스크 팩', '모이스처라이징']
    },
    {
      id: 2,
      name: '골드 리프팅 테라피',
      duration: '120분',
      price: '220,000원',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg',
      description: '24K 골드와 콜라겐을 활용한 안티에이징 집중 케어로 탄력 있는 피부로',
      features: ['골드 마스크', '콜라겐 팩', '리프팅 마사지', '초음파 케어', 'LED 테라피']
    },
    {
      id: 3,
      name: '아쿠아 하이드레이션',
      duration: '75분',
      price: '120,000원',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg',
      description: '건조하고 민감한 피부를 위한 집중 수분 공급 케어 프로그램',
      features: ['수분 진단', '하이드로 필링', '수분 마스크', '쿨링 케어', '보습 팩']
    },
    {
      id: 4,
      name: '브라이트닝 케어',
      duration: '100분',
      price: '180,000원',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3985365/pexels-photo-3985365.jpeg',
      description: '비타민 C와 천연 추출물로 칙칙한 피부톤을 밝고 화사하게',
      features: ['톤 분석', '비타민 케어', '브라이트닝 마스크', '광채 마사지', '톤업 팩']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            전문 케어 서비스
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            숙련된 전문가의 개인 맞춤 케어로 피부 본연의 아름다움을 되찾아보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-rose-600 transition-colors duration-200">
                    {service.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock size={16} />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-medium text-gray-900">포함 서비스:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-rose-50 text-rose-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                  <button className="bg-rose-600 text-white px-6 py-3 rounded-xl hover:bg-rose-700 transition-colors duration-200 font-medium">
                    예약하기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Booking Form */}
        <div className="mb-16">
          <ConsultationBooking />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <Sparkles size={48} className="mx-auto mb-6 text-rose-200" />
          <h3 className="text-3xl md:text-4xl font-light mb-4">
            특별한 케어를 경험해보세요
          </h3>
          <p className="text-xl mb-8 text-rose-100 max-w-2xl mx-auto">
            전문가와의 1:1 상담을 통해 당신만의 맞춤 케어 프로그램을 설계해드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-rose-600 px-8 py-4 rounded-full hover:bg-rose-50 transition-colors duration-200 font-medium">
              무료 상담 예약
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-rose-600 transition-all duration-200 font-medium">
              서비스 문의
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;