
import React from 'react';
import Footer from '../components/Footer';

const products = [
  // 헤어케어
  {
    category: '헤어케어',
    name: 'AXI 컨트롤セラム',
    description: 'ボリュームアップ',
    imageUrl: 'https://cuore-beauty.co.jp/products/images/axi_ct_serum_p.png',
  },
  {
    category: '헤어케어',
    name: 'AXI 컨트롤ローション',
    description: 'ボリュームアップ',
    imageUrl: 'https://cuore-beauty.co.jp/products/images/axi_ct_lotion_p.png',
  },
  {
    category: '헤어케어',
    name: 'AXI シャンプーⅢ',
    description: 'カラー・パーマ・縮毛矯正をされている方',
    imageUrl: 'https://cuore-beauty.co.jp/products/images/axi_shampoo3_p.png',
  },
  {
    category: '헤어케어',
    name: 'AXI トリートメントⅢ',
    description: 'カラー・パーマ・縮毛矯正をされている方',
    imageUrl: 'https://cuore-beauty.co.jp/products/images/axi_treatment3_p.png',
  },
  // 스킨케어
  {
    category: '스킨케어',
    name: 'AXI スパークリングアクア',
    description: '炭酸美容化粧水',
    imageUrl: 'https://cuore-beauty.co.jp/products/images/axi_s_aqua_p.png',
  },
  {
    category: '스킨케어',
    name: 'AXI ホワイトニングクリームNA',
    description: 'シミ・ソバカス',
    imageUrl: 'https://cuore-beauty.co.jp/products/images/axi_wh_cream_p.png',
  },
  {
    category: '스킨케어',
    name: 'AXI ホワイトニングローションNA',
    description: 'シミ・ソバカス',
    imageUrl: 'https://cuore-beauty.co.jp/products/images/axi_wh_lotion_p.png',
  },
  {
    category: '스킨케어',
    name: 'AXI ホワイトニングエマルジョンNA',
    description: 'シミ・ソバカス',
    imageUrl: 'https://cuore-beauty.co.jp/products/images/axi_wh_emulsion_p.png',
  },
];

const ProductsPage = () => {
  const skincareProducts = products.filter(p => p.category === '스킨케어');
  const haircareProducts = products.filter(p => p.category === '헤어케어');

  return (
    <div className="font-sans pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center">
            {/* Text content */}
            <div className="w-full md:w-5/12 p-8 lg:p-12 text-center order-2 md:order-1">
                <div className="flex justify-center mb-6">
                    <img
                        className="h-auto"
                        src="https://cuore-beauty.co.jp/products/img/series/logo_axi.png"
                        alt="AXI"
                        style={{ height: '80px' }}
                    />
                </div>
                <p className="text-2xl lg:text-3xl font-light leading-relaxed mb-4" style={{ letterSpacing: '0.1em' }}>
                    나이에 좌우되지 않는<br/>
                    새로운 힘을 이끌어내
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                    건강한 맨살과 미용으로 이끄는 스킨 케어 헤어 케어 화장품
                </p>
            </div>

            {/* Image content */}
            <div className="w-full md:w-7/12 order-1 md:order-2">
                 <picture>
                    <source
                        media="(min-width: 768px)"
                        srcSet="https://cuore-beauty.co.jp/products/img/series/main_axi.png"
                    />
                    <img
                        src="https://cuore-beauty.co.jp/products/img/series/main_axi_sp.png"
                        alt="AXI main visual"
                        className="w-full h-auto"
                    />
                </picture>
            </div>
        </div>

        {/* Product Categories Section */}
        <div className="py-12">
            <div className="flex flex-col md:flex-row -mx-4">
                {/* 스킨케어 */}
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <div className="border-t-2 border-b-2 border-gray-400 py-6">
                        <h3 className="text-xl font-light text-purple-900 mb-6 tracking-widest">
                            <a href="#skincare">› 스킨케어 프로페셔널 시리즈</a>
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 text-sm">
                            <div className="space-y-3">
                                <p><a href="#skincare" className="text-gray-700 hover:text-purple-900">› 브라이트닝 시리즈</a></p>
                                <p><a href="#skincare" className="text-gray-700 hover:text-purple-900">› 퍼스널 케어(데일리 유스)</a></p>
                                <p><a href="#skincare" className="text-gray-700 hover:text-purple-900">› 퍼스널 케어(프리미엄 유스)</a></p>
                            </div>
                            <div className="space-y-3">
                                <p><a href="#skincare" className="text-gray-700 hover:text-purple-900">› 리프레시 시리즈</a></p>
                                <p><a href="#skincare" className="text-gray-700 hover:text-purple-900">› 퍼스널 케어(스페셜 유스)</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 헤어케어 */}
                <div className="w-full md:w-1/2 px-4">
                    <div className="border-t-2 border-b-2 border-gray-400 py-6">
                        <h3 className="text-xl font-light text-purple-900 mb-6 tracking-widest">
                            <a href="#haircare">› 헤어케어 프로페셔널 시리즈</a>
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 text-sm">
                            <div className="space-y-3">
                                <p><a href="#haircare" className="text-gray-700 hover:text-purple-900">› michite by AXI</a></p>
                            </div>
                            <div className="space-y-3">
                                <p><a href="#haircare" className="text-gray-700 hover:text-purple-900">› 스컬프 어시스트 라인</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-16">
            {/* 스킨케어 섹션 */}
            <section id="skincare" className="mb-20 scroll-mt-20">
              <h2 className="text-4xl font-light text-center mb-12 tracking-widest">스킨케어</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
                {skincareProducts.map((product) => (
                  <div key={product.name} className="text-center flex flex-col items-center">
                    <div className="w-full h-auto mb-4">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-base font-bold mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 헤어케어 섹션 */}
            <section id="haircare" className="scroll-mt-20">
              <h2 className="text-4xl font-light text-center mb-12 tracking-widest">헤어케어</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
                {haircareProducts.map((product) => (
                  <div key={product.name} className="text-center flex flex-col items-center">
                    <div className="w-full h-auto mb-4">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-base font-bold mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                  </div>
                ))}
              </div>
            </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
