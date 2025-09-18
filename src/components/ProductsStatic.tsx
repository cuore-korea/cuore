import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const ProductsStatic = () => {
  const products = [
    {
      id: '1',
      name_ko: '퓨어 에센스 세럼',
      category: '에센스',
      description_ko: '깊은 보습과 영양 공급으로 피부를 촉촉하게 가꿔주는 프리미엄 에센스입니다. 자연에서 추출한 순수 성분으로 피부 깊숙이 스며들어 건강한 윤기를 선사합니다.',
      price: 89000,
      original_price: 110000,
      image_url: 'https://images.pexels.com/photos/7755228/pexels-photo-7755228.jpeg',
      benefits: ['깊은 보습', '영양 공급', '탄력 개선'],
      rating: 4.9,
      review_count: 342,
      stock_quantity: 50
    },
    {
      id: '2',
      name_ko: '골든 리프팅 크림',
      category: '크림',
      description_ko: '24K 골드 성분으로 피부 탄력과 윤기를 동시에 선사하는 럭셔리 크림입니다. 콜라겐과 펩타이드가 피부 깊숙이 침투하여 주름을 개선하고 탄력을 강화합니다.',
      price: 120000,
      original_price: 145000,
      image_url: 'https://images.pexels.com/photos/7755241/pexels-photo-7755241.jpeg',
      benefits: ['탄력 강화', '윤기 개선', '주름 완화'],
      rating: 4.8,
      review_count: 256,
      stock_quantity: 30
    },
    {
      id: '3',
      name_ko: '바이탈 클렌징 폼',
      category: '클렌징',
      description_ko: '부드럽고 촘촘한 거품으로 피부에 자극 없이 깊숙한 세정을 도와주는 클렌징 폼입니다. 천연 보습 성분이 세안 후에도 피부를 촉촉하게 유지해줍니다.',
      price: 32000,
      original_price: 42000,
      image_url: 'https://images.pexels.com/photos/7755263/pexels-photo-7755263.jpeg',
      benefits: ['순한 세정', '수분 보존', '모공 케어'],
      rating: 4.7,
      review_count: 189,
      stock_quantity: 80
    },
    {
      id: '4',
      name_ko: '하이드라 토너',
      category: '토너',
      description_ko: '히알루론산과 천연 보습 성분으로 피부 깊숙까지 수분을 공급하는 토너입니다. 세안 후 첫 단계로 사용하여 피부 결을 정돈하고 다음 단계 제품의 흡수를 도와줍니다.',
      price: 65000,
      original_price: 78000,
      image_url: 'https://images.pexels.com/photos/7755224/pexels-photo-7755224.jpeg',
      benefits: ['수분 충전', '피부 진정', '각질 케어'],
      rating: 4.9,
      review_count: 423,
      stock_quantity: 60
    },
    {
      id: '5',
      name_ko: '비타민 C 마스크',
      category: '마스크',
      description_ko: '순수 비타민 C로 피부 톤을 밝혀주고 생기를 불어넣어주는 집중 케어 마스크입니다. 일주일에 2-3회 사용으로 맑고 화사한 피부를 만들어줍니다.',
      price: 45000,
      original_price: 58000,
      image_url: 'https://images.pexels.com/photos/7755235/pexels-photo-7755235.jpeg',
      benefits: ['톤업 효과', '생기 부여', '피부 보호'],
      rating: 4.8,
      review_count: 312,
      stock_quantity: 40
    },
    {
      id: '6',
      name_ko: '콜라겐 부스터 앰플',
      category: '앰플',
      description_ko: '저분자 콜라겐과 펩타이드로 피부 탄력과 복원력을 높여주는 고농축 앰플입니다. 집중 케어가 필요한 부위에 사용하여 즉각적인 효과를 경험할 수 있습니다.',
      price: 95000,
      original_price: 115000,
      image_url: 'https://images.pexels.com/photos/7755243/pexels-photo-7755243.jpeg',
      benefits: ['탄력 복원', '주름 개선', '피부 재생'],
      rating: 4.9,
      review_count: 287,
      stock_quantity: 25
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            프리미엄 제품
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            자연에서 영감을 받은 혁신적인 성분으로 만든 스킨케어 제품들을 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image_url}
                  alt={product.name_ko}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors duration-200">
                    <Heart size={18} className="text-gray-600 hover:text-rose-600" />
                  </button>
                </div>
                {product.original_price && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {Math.round(((product.original_price - product.price) / product.original_price) * 100)}% OFF
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-rose-600 font-medium">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                    <span className="text-sm text-gray-400">({product.review_count})</span>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-rose-600 transition-colors duration-200">
                  {product.name_ko}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description_ko}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="bg-rose-50 text-rose-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price.toLocaleString()}원
                    </span>
                    {product.original_price && (
                      <span className="text-lg text-gray-400 line-through">
                        {product.original_price.toLocaleString()}원
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-rose-600 text-white py-3 rounded-xl hover:bg-rose-700 transition-colors duration-200 font-medium flex items-center justify-center gap-2">
                    <ShoppingCart size={18} />
                    장바구니
                  </button>
                  <button className="px-4 py-3 border border-rose-600 text-rose-600 rounded-xl hover:bg-rose-50 transition-colors duration-200">
                    <Heart size={18} />
                  </button>
                </div>

                {product.stock_quantity <= 10 && product.stock_quantity > 0 && (
                  <p className="text-orange-600 text-sm mt-2 text-center">
                    재고 {product.stock_quantity}개 남음
                  </p>
                )}
                {product.stock_quantity === 0 && (
                  <p className="text-red-600 text-sm mt-2 text-center font-medium">
                    품절
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-200 transition-colors duration-200 font-medium">
            모든 제품 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsStatic;