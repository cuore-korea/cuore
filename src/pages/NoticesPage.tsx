import React, { useState, useEffect } from 'react';
import { Bell, ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '../components/Footer';

// 임시 공지사항 데이터 (isUrgent 속성이 추가되었습니다)
const noticesData = [
  {
    id: 1,
    title: "꾸오레 화장품 '미치테(michite)' 헤어케어 신제품 출시 안내",
    date: "2026.05.20",
    isNew: true,
    isUrgent: false,
    content: "안녕하세요. 미용실 점판의 개척기업 꾸오레 주식회사입니다.\n\n고객님들의 많은 사랑에 힘입어, 전문 모발 클리닉 제품인 '미치테(michite)' 라인의 새로운 샴푸와 트리트먼트가 출시되었습니다.\n자세한 제품 정보는 [제품] 탭에서 확인하실 수 있습니다.\n\n앞으로도 기노시다 제약의 기술력을 바탕으로 더욱 안전하고 유효한 제품을 선보이겠습니다. 감사합니다."
  },
  {
    id: 2,
    title: "꾸오레 공식 홈페이지 리뉴얼 오픈 안내",
    date: "2026.05.15",
    isNew: true,
    isUrgent: false,
    content: "꾸오레 주식회사의 공식 홈페이지가 새롭게 단장했습니다.\n\n새로운 홈페이지에서는 모바일 환경에서도 더욱 편리하게 제품 정보를 확인하실 수 있으며, 스킨케어, 헤드스파, 헤어제품 3가지 주요 카테고리로 개편하여 접근성을 높였습니다.\n\n이용 중 불편하신 점은 언제든지 고객센터로 문의해 주시기 바랍니다."
  },
  {
    id: 3,
    title: "인터넷 불법 유통 제품 주의 안내",
    date: "2024.08.10",
    isNew: false,
    isUrgent: true, // 긴급 공지 설정
    content: "꾸오레 화장품은 '100% 미용실 전매품'으로, 인터넷 쇼핑몰 등을 통한 온라인 판매를 절대 엄격히 금지하고 있습니다.\n\n최근 출처가 불분명한 인터넷 판매 제품으로 인한 피해 사례가 보고되고 있습니다. 온라인에서 구매하신 제품은 정품을 보장할 수 없으며, 품질 이상에 대한 어떠한 보상이나 A/S도 불가능하오니 반드시 정식 입점된 미용실에서만 구매해 주시기 바랍니다."
  },
  {
    id: 4,
    title: "다가오는 2025년 5월, 꾸오레 창립 60주년 사전 안내",
    date: "2024.12.01",
    isNew: false,
    isUrgent: false,
    content: "1965년 일본에서 첫 발을 내디딘 꾸오레 주식회사가 다가오는 2025년 5월, 창립 60주년을 맞이합니다.\n\n지난 60년간 한결같이 100% 미용실 전매 원칙을 지키며 프로를 위한 진정한 화장품을 만들어 올 수 있었던 것은 모두 고객님과 미용 관계자 여러분의 성원 덕분입니다. \n\n60주년을 기념하여 다양한 이벤트와 신제품을 준비 중이오니 많은 기대 부탁드립니다."
  }
];

const NoticesPage = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleNotice = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="font-sans pt-24 min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* 헤더 섹션 */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Bell size={28} className="text-rose-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">공지사항</h2>
          <div className="w-16 h-1 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-gray-600 font-light">꾸오레의 새로운 소식과 중요 안내를 전해드립니다.</p>
        </div>

        {/* 공지사항 리스트 (심플 버전) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {noticesData.map((notice) => (
              <div key={notice.id} className="group">
                <button
                  onClick={() => toggleNotice(notice.id)}
                  className="w-full flex flex-col md:flex-row items-start md:items-center px-6 py-5 hover:bg-rose-50/50 transition-colors duration-200 focus:outline-none text-left gap-4"
                >
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {/* 긴급(URGENT) 배지 추가 */}
                      {notice.isUrgent && (
                        <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider">
                          긴급
                        </span>
                      )}
                      {notice.isNew && (
                        <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider">
                          NEW
                        </span>
                      )}
                      <span className={`text-base md:text-lg font-medium transition-colors duration-200 ${expandedId === notice.id ? 'text-rose-600' : 'text-gray-800 group-hover:text-rose-600'}`}>
                        {notice.title}
                      </span>
                    </div>
                  </div>
                  
                  {/* 날짜 및 화살표 */}
                  <div className="flex items-center gap-4 text-gray-400 flex-shrink-0 w-full md:w-auto justify-between md:justify-end">
                    <span className="text-sm font-light">{notice.date}</span>
                    {expandedId === notice.id ? <ChevronUp size={20} className="text-rose-600" /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                {/* 펼쳐지는 내용 영역 */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                    expandedId === notice.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 md:p-8 text-gray-600 leading-relaxed whitespace-pre-wrap font-light border-l-2 border-rose-600 ml-6 my-4 bg-white rounded-r-xl shadow-sm">
                    {notice.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default NoticesPage;