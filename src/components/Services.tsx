import React from 'react';
import CuoreLogo from '../assets/logo_cuore.png';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <img src={CuoreLogo} alt="Cuore Logo" className="mx-auto mb-6 h-12" />
          <h3 className="text-3xl md:text-4xl font-light mb-4">
            특별한 케어를 경험해보세요
          </h3>
          <p className="text-xl mb-8 text-rose-100 max-w-2xl mx-auto">
            전문가와의 1:1 상담을 통해 당신만의 맞춤 케어 프로그램을 설계해드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:02-553-6035" className="bg-white text-rose-600 px-8 py-4 rounded-full hover:bg-rose-50 transition-colors duration-200 font-medium">
              미용실 운영 상담
            </a>
            <a href="mailto:cuore123@hanmail.net" className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-rose-600 transition-all duration-200 font-medium">
              서비스 문의
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
