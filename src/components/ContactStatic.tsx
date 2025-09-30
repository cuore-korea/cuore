import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const ContactStatic = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            연락처 & 위치
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            궁금한 점이 있으시거나 예약을 원하신다면 언제든지 연락해주세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">연락 정보</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">주소</h4>
                    <p className="text-gray-600">
                      서울시 강남구 논현로157길 30 <br />
                      꾸오레화장품 2층
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">전화번호</h4>
                    <p className="text-gray-600">(02) 553 – 6035</p>
                    <p className="text-sm text-gray-500">예약 및 상담 문의</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">이메일</h4>
                    <p className="text-gray-600">cuore123@hanmail.net</p>
                    <p className="text-sm text-gray-500">24시간 내 답변</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">운영 시간</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>월-금: 오전 09:00 - 오후 8:00</p>
                      <p>토-일: 이메일을 남겨주세요</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">소셜 미디어</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center hover:bg-rose-200 transition-colors duration-200"
                >
                  <Instagram size={20} className="text-rose-600" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center hover:bg-rose-200 transition-colors duration-200"
                >
                  <Facebook size={20} className="text-rose-600" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center hover:bg-rose-200 transition-colors duration-200"
                >
                  <MessageCircle size={20} className="text-rose-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Naver Map */}
          <div className="rounded-2xl h-full overflow-hidden">
            <iframe
              src="https://naver.me/FpPoeX0p"
              className="w-full h-full border-0"
              allowFullScreen=""
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
