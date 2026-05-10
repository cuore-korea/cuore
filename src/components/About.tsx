import React from 'react';
import { Award, ShieldCheck, Building2, FlaskConical } from 'lucide-react';

// 기존 이미지들
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';
import timelineImg from '../assets/timeline.png';

// 역사 이미지 4장 (모두 .png 확장자로 통일)
import history1 from '../assets/history_1.png';
import history2 from '../assets/history_2.png';
import history3 from '../assets/history_3.png';
import history4 from '../assets/history_4.png';

const About = () => {
  const stats = [
    { number: '1965', label: '일본 꾸오레 창업', icon: Building2 },
    { number: '1990', label: '한국 법인 설립', icon: Award },
    { number: '60년+', label: '노화방지 연구', icon: FlaskConical },
    { number: '100%', label: '미용실 전매품', icon: ShieldCheck },
  ];

  const features = [
    {
      image: f1,
      title: '미용실 점판의 개척기업',
      description: '꾸오레 주식회사는 1965년 일본에서 창업되어, 화장품 업계 최초로 미용실 전문 판매 방식을 채택했습니다. 1990년 설립된 한국 꾸오레 역시 일본과 마찬가지로 압구정동에 본사를 두고 오로지 미용실에만 유통하고 있습니다. 인터넷 판매를 절대 하지 않으며, 미용 프로에 의해서만 전달되는 진정한 화장품입니다.',
    },
    {
      image: f2,
      title: '제약회사가 만드는 안심, 안전한 제품',
      description: '꾸오레는 제조부문을 담당하는 제약회사인 \'기노시다 제약(木下製薬)\'을 계열회사로 두고 있습니다. 제약회사의 축적된 개발력과 기술력을 최대한으로 살려 피부와 두피에 가장 유효하고 안전한 제품만을 개발 및 생산합니다.',
    },
    {
      image: f3,
      title: '60년의 노화방지 연구 (2025년 60주년)',
      description: '꾸오레 기초화장품의 개발 및 연구는 1965년부터 시작되었습니다. 피부의 프로인 화장품 회사가 만드는 노화방지를 최우선으로 하는 제품으로, 다가오는 2025년 5월 창립 60주년을 맞이하여 더욱 발전된 기술력을 선보입니다.',
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">꾸오레 철학 및 역사</h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            1965년부터 이어져 온 미용 프로를 위한 약속. 꾸오레는 안전하고 혁신적인 기술력으로 미용실과 고객의 신뢰를 지켜갑니다.
          </p>
        </div>

        {/* 4가지 주요 지표 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <stat.icon className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 연혁 타임라인 및 갤러리 섹션 */}
        <div className="mb-24 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* 좌측: 텍스트 및 타임라인 이미지 */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">꾸오레 60년의 발자취</h3>
                <div className="w-16 h-1 bg-rose-600"></div>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  1965년 창립 이래, 꾸오레는 오직 미용 프로와 고객의 아름다움을 위해 끊임없이 연구해왔습니다. 
                  다가오는 2025년 창립 60주년을 맞이하여, 지나온 영광의 순간들을 돌아보며 앞으로도 변치 않는 품질과 철학을 약속드립니다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-center">
                <img
                  src={timelineImg}
                  alt="꾸오레 역사 타임라인 (1965-2025)"
                  className="max-w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
            
            {/* 우측: 4장의 이미지를 2x2 그리드로 배치 */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src={history1} alt="꾸오레 역사 1" className="w-full h-48 object-cover rounded-xl shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300" />
                <img src={history2} alt="꾸오레 역사 2" className="w-full h-48 object-cover rounded-xl shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300" />
                <img src={history3} alt="꾸오레 역사 3" className="w-full h-48 object-cover rounded-xl shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300" />
                <img src={history4} alt="꾸오레 역사 4" className="w-full h-48 object-cover rounded-xl shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

          </div>
        </div>

        {/* 회사 철학 상세 (기존 사진 + 텍스트) */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-rose-600 rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="relative rounded-2xl shadow-xl w-full object-cover h-[400px] z-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;