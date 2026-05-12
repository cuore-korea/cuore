import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/productData';
import Footer from '../components/Footer';
import * as assets from '../assets';

const groupByKey = (array: any[], key: string) =>
  array.reduce((result: any, currentValue: any) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
    return result;
  }, {});

const ProductsPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.replace('#', ''));
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const productsByMainCategory = groupByKey(products, 'mainCategory');
  
  // 순서 변경: 헤어제품 -> 헤드스파 제품 -> 스킨케어
  const mainCategories = ['헤어제품', '헤드스파 제품', '스킨케어'];

  return (
    <div className="font-sans pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center py-12">
            <div className="w-full md:w-5/12 p-8 text-center order-2 md:order-1">
                <img src={assets.logoAxi} alt="AXI" className="h-20 mx-auto mb-6" />
                <p className="text-2xl font-light leading-relaxed mb-4">
                  나이에 좌우되지 않는<br/>새로운 힘을 이끌어내다
                </p>
                <p className="text-gray-500 text-sm">건강한 피부와 모발을 위한 전문 화장품</p>
            </div>
            <div className="w-full md:w-7/12 order-1 md:order-2">
                 <img src={assets.mainAxi} alt="AXI main" className="w-full h-auto rounded-2xl shadow-sm" />
            </div>
        </div>

        {/* 3대 카테고리 바로가기 (변경된 순서 적용) */}
        <div className="py-12 border-t border-b border-gray-100 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mainCategories.map(cat => (
                  <a key={cat} href={`#${cat.replace(/\s+/g, '-')}`} className="group p-6 bg-gray-50 rounded-xl text-center hover:bg-rose-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-rose-600 transition-colors">› {cat}</h3>
                  </a>
                ))}
            </div>
        </div>
        
        {/* 제품 리스트 (변경된 순서 적용) */}
        <div className="py-8">
            {mainCategories.map((mainCategory) => {
              const categoryProducts = productsByMainCategory[mainCategory] || [];
              const productsBySubCategory = groupByKey(categoryProducts, 'subCategory');
              const categoryId = mainCategory.replace(/\s+/g, '-');

              // 영문 타이틀 설정
              let englishTitle = '';
              if (mainCategory === '스킨케어') englishTitle = 'SKIN CARE';
              else if (mainCategory === '헤드스파 제품') englishTitle = 'HEAD SPA';
              else if (mainCategory === '헤어제품') englishTitle = 'HAIR CARE';

              return (
                <section key={mainCategory} id={categoryId} className="mb-24 scroll-mt-24">
                  <div className="pb-4 mb-8 border-b-2 border-gray-900 flex justify-between items-baseline">
                    <h2 className="text-3xl font-bold text-gray-900">{mainCategory}</h2>
                    <span className="text-gray-400 uppercase tracking-widest text-sm">{englishTitle}</span>
                  </div>

                  {Object.entries(productsBySubCategory).map(([subCategory, subCategoryProducts]: [string, any]) => (
                    <div key={subCategory} className="mb-12">
                      <h3 className="text-xl font-bold text-rose-600 mb-8 flex items-center">
                        <span className="w-2 h-2 bg-rose-600 rounded-full mr-3"></span>
                        {subCategory}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {subCategoryProducts.map((product: any) => (
                          <div key={product.id} className="group flex gap-6 pb-8 border-b border-gray-100 relative">
                            <div className="w-1/3 flex-shrink-0">
                              <img 
                                src={`/products/${product.id}.png`} 
                                alt={product.name} 
                                className="w-full h-auto object-contain rounded-lg hover:scale-105 transition-transform"
                                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/200?text=Cuore'; }}
                              />
                            </div>
                            <div className="w-2/3">
                              <span className="inline-block bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded mb-2">{product.tag}</span>
                              <h4 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-3">{product.description}</p>
                              <p className="text-xs font-medium text-gray-400">{product.spec}</p>
                            </div>
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-rose-600 transition-all duration-300 group-hover:w-full"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;