import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { useConsultations, ConsultationFormData } from '../hooks/useConsultations';

const ConsultationBooking = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ConsultationFormData>();
  const { createConsultation, loading, error } = useConsultations();
  const [success, setSuccess] = useState(false);

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

  const onSubmit = async (data: ConsultationFormData) => {
    const result = await createConsultation(data);
    if (result.success) {
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">예약이 완료되었습니다!</h3>
          <p className="text-gray-600 mb-6">
            상담 예약이 성공적으로 접수되었습니다. 곧 담당자가 연락드려 예약을 확정해드리겠습니다.
          </p>
          <button
            onClick={() => setSuccess(false)}
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

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
          <AlertCircle size={20} className="text-red-600" />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User size={16} className="inline mr-2" />
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone size={16} className="inline mr-2" />
              전화번호 *
            </label>
            <input
              type="tel"
              {...register('phone', { required: '전화번호를 입력해주세요' })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200"
              placeholder="010-1234-5678"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail size={16} className="inline mr-2" />
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            관심 서비스 *
          </label>
          <select
            {...register('service_type', { required: '서비스를 선택해주세요' })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200"
          >
            <option value="">서비스를 선택해주세요</option>
            {serviceTypes.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          {errors.service_type && (
            <p className="text-red-600 text-sm mt-1">{errors.service_type.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar size={16} className="inline mr-2" />
              희망 날짜 *
            </label>
            <input
              type="date"
              {...register('preferred_date', { required: '날짜를 선택해주세요' })}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200"
            />
            {errors.preferred_date && (
              <p className="text-red-600 text-sm mt-1">{errors.preferred_date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock size={16} className="inline mr-2" />
              희망 시간 *
            </label>
            <select
              {...register('preferred_time', { required: '시간을 선택해주세요' })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200"
            >
              <option value="">시간을 선택해주세요</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.preferred_time && (
              <p className="text-red-600 text-sm mt-1">{errors.preferred_time.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare size={16} className="inline mr-2" />
            추가 메시지
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-200 resize-none"
            placeholder="특별한 요청사항이나 궁금한 점이 있으시면 적어주세요..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-rose-600 text-white py-4 rounded-xl hover:bg-rose-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              예약 중...
            </>
          ) : (
            <>
              <Calendar size={20} />
              예약하기
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ConsultationBooking;