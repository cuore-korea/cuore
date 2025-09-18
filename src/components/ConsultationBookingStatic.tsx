import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

const ConsultationBookingStatic = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service_type: '',
    preferred_date: '',
    preferred_time: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const serviceTypes = [
    { value: 'facial', label: '프리미엄 페이셜 케어' },
    { value: 'lifting', label: '골드 리프팅 테라피' },
    { value: 'hydration', label: '아쿠아 하이드레이션' },
    { value: 'brightening', label: '브라이트닝 케어' },
    { value: 'consultation', label: '피부 상담' },
    { value: 'other', label: '기타' }
  ];

  const timeSlots = [
    '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone || !formData.email || !formData.service_type || !formData.preferred_date || !formData.preferred_time) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    // Show success message (in a real app, this would send to a server)
    setShowSuccess(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service_type: '',
      preferred_date: '',
      preferred_time: '',
      message: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (showSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">예약이 접수되었습니다!</h3>
          <p className="text-gray-600 mb-6">
            상담 예약이 성공적으로 접수되었습니다. 곧 담당자가 연락드려 예약을 확정해드리겠습니다.
          </p>
          <button
            onClick={() => setShowSuccess(false)}
            className="bg-rose-600 text-white px-6 py-3 rounded-xl hover:bg-rose-700 transition-colors duration-200"
          >
            새 예약하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Calendar size={24} className="text-rose-600" />
        <h3 className="text-2xl font-semibold text-gray-900">상담 예약하기</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User size={16} className="inline mr-2" />
              이름 *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200"
              placeholder="홍길동"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone size={16} className="inline mr-2" />
              전화번호 *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200"
              placeholder="010-1234-5678"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail size={16} className="inline mr-2" />
            이메일 *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            관심 서비스 *
          </label>
          <select
            name="service_type"
            value={formData.service_type}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200"
          >
            <option value="">서비스를 선택해주세요</option>
            {serviceTypes.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar size={16} className="inline mr-2" />
              희망 날짜 *
            </label>
            <input
              type="date"
              name="preferred_date"
              value={formData.preferred_date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock size={16} className="inline mr-2" />
              희망 시간 *
            </label>
            <select
              name="preferred_time"
              value={formData.preferred_time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200"
            >
              <option value="">시간을 선택해주세요</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare size={16} className="inline mr-2" />
            추가 메시지
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200 resize-none"
            placeholder="특별한 요청사항이나 궁금한 점이 있으시면 적어주세요..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-rose-600 text-white py-4 rounded-xl hover:bg-rose-700 transition-colors duration-200 font-medium flex items-center justify-center gap-2"
        >
          <Calendar size={20} />
          예약하기
        </button>
      </form>
    </div>
  );
};

export default ConsultationBookingStatic;