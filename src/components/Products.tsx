import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';

const Products = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
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
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="w-full h-64 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-600">제품을 불러오는 중 오류가 발생했습니다: {error}</p>
        </div>
      </section>
    );
  }

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

export default Products;