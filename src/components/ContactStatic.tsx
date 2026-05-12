import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const ContactStatic = () => {
  return (
    // 모바일에서는 py-12, PC에서는 py-20
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4 md:mb-6">
            연락처 & 위치
          </h2>
          <p className="text-base md:text-xl text-gray-600 font-light max-w-2xl mx-auto px-2">
            궁금한 점이 있으시거나 예약을 원하신다면 언제든지 연락해주세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">연락 정보</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-rose-600 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">주소</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      서울시 강남구 논현로157길 30 <br />
                      꾸오레화장품 2층
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-rose-600 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">전화번호</h4>
                    <p className="text-sm md:text-base text-gray-600 mb-1">(02) 553 – 6035</p>
                    <a 
                      href="tel:02-553-6035" 
                      className="text-rose-600 text-xs md:text-sm font-medium hover:text-rose-800 underline decoration-rose-200 hover:decoration-rose-600 underline-offset-4 transition-all duration-300"
                    >
                      예약 및 상담 문의 &rarr;
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-rose-600 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">이메일</h4>
                    <a 
                      href="mailto:cuore123@hanmail.net" 
                      className="inline-block text-rose-600 text-sm md:text-base font-medium hover:text-rose-800 underline decoration-rose-200 hover:decoration-rose-600 underline-offset-4 transition-all duration-300 mb-1 break-all"
                    >
                      cuore123@hanmail.net
                    </a>
                    <p className="text-xs md:text-sm text-gray-500">24시간 내 답변</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-rose-600 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">운영 시간</h4>
                    <div className="text-sm md:text-base text-gray-600 space-y-1">
                      <p>월-금: 오전 09:00 - 오후 8:00</p>
                      <p>토-일: 이메일을 남겨주세요</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">소셜 미디어</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-rose-50 rounded-full flex items-center justify-center hover:bg-rose-100 transition-colors duration-200">
                  <Instagram size={18} className="text-rose-600 md:w-5 md:h-5" />
                </a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-rose-50 rounded-full flex items-center justify-center hover:bg-rose-100 transition-colors duration-200">
                  <Facebook size={18} className="text-rose-600 md:w-5 md:h-5" />
                </a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-rose-50 rounded-full flex items-center justify-center hover:bg-rose-100 transition-colors duration-200">
                  <MessageCircle size={18} className="text-rose-600 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* 모바일에서는 지도의 최소 높이를 250px로 줄임 */}
          <div className="rounded-2xl h-full overflow-hidden shadow-sm border border-gray-100">
            <iframe
              src="https://naver.me/FpPoeX0p"
              className="w-full h-full min-h-[250px] md:min-h-[400px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStatic;