import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useContactMessages, ContactFormData } from '../hooks/useContactMessages';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const { createContactMessage, loading, error } = useContactMessages();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    const result = await createContactMessage(data);
    if (result.success) {
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    }
  };

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
                      서울특별시 강남구 청담동 123-45<br />
                      청담 뷰티 플라자 3층
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">전화번호</h4>
                    <p className="text-gray-600">02-1234-5678</p>
                    <p className="text-sm text-gray-500">예약 및 상담 문의</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">이메일</h4>
                    <p className="text-gray-600">hello@cuore-beauty.co.kr</p>
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
                      <p>월-금: 오전 10:00 - 오후 8:00</p>
                      <p>토요일: 오전 10:00 - 오후 6:00</p>
                      <p>일요일: 오후 1:00 - 오후 6:00</p>
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

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">문의하기</h3>
            
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircle size={20} className="text-green-600" />
                <p className="text-green-700">문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.</p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                <AlertCircle size={20} className="text-red-600" />
                <p className="text-red-700">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: '이름을 입력해주세요' })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200"
                    placeholder="홍길동"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    전화번호
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: '이메일을 입력해주세요',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: '올바른 이메일 형식을 입력해주세요'
                    }
                  })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200"
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="service_interest" className="block text-sm font-medium text-gray-700 mb-2">
                  관심 서비스
                </label>
                <select
                  {...register('service_interest')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200"
                >
                  <option value="">서비스를 선택해주세요</option>
                  <option value="facial">프리미엄 페이셜 케어</option>
                  <option value="lifting">골드 리프팅 테라피</option>
                  <option value="hydration">아쿠아 하이드레이션</option>
                  <option value="brightening">브라이트닝 케어</option>
                  <option value="consultation">상담</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  메시지 *
                </label>
                <textarea
                  {...register('message', { required: '메시지를 입력해주세요' })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200 resize-none"
                  placeholder="궁금한 점이나 요청사항을 적어주세요..."
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-rose-600 text-white py-4 rounded-xl hover:bg-rose-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    전송 중...
                  </>
                ) : (
                  '문의 보내기'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">지도는 실제 구현 시 Google Maps 또는 Naver Map API를 연동합니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;