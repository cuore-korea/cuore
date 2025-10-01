
import React from 'react';
import { products } from '../data/productData';
import Footer from '../components/Footer';
import * as assets from '../assets';

// Helper to group products by a key (e.g., mainCategory, subCategory)
const groupByKey = (array, key) =>
  array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
    return result;
  }, {});

const ProductsPage = () => {
  // Group products by main category (Skincare, Haircare)
  const productsByMainCategory = groupByKey(products, 'mainCategory');

  // Get the subcategories for the divider links
  const skincareSubCategories = [...new Set(products.filter(p => p.mainCategory === '스킨케어 프로페셔널 시리즈').map(p => p.subCategory))];
  const haircareSubCategories = [...new Set(products.filter(p => p.mainCategory === '헤어케어 프로페셔널 시리즈').map(p => p.subCategory))];


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
                        src={assets.logoAxi}
                        alt="AXI"
                        style={{ height: '100px' }}
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
                        srcSet={assets.mainAxi}
                    />
                    <img
                        src={assets.mainAxiSp}
                        alt="AXI main visual"
                        className="w-full h-auto"
                    />
                </picture>
            </div>
        </div>

        {/* Product Categories Section Divider */}
        <div className="py-12">
            <div className="flex flex-col md:flex-row -mx-4">
                {/* 스킨케어 */}
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <div className="border-t-2 border-b-2 border-gray-400 py-6">
                        <h3 className="text-xl font-light text-international-klein-blue mb-6 tracking-widest">
                            <a href="#스킨케어-프로페셔널-시리즈">› 스킨케어 프로페셔널 시리즈</a>
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 text-sm">
                            <div className="space-y-3">
                                {skincareSubCategories.slice(0, Math.ceil(skincareSubCategories.length / 2)).map(subCat => (
                                     <p key={subCat}><a href={`#${subCat.replace(/\s+/g, '-').toLowerCase()}`} className="text-gray-700 hover:text-purple-900">› {subCat}</a></p>
                                ))}
                            </div>
                            <div className="space-y-3">
                                {skincareSubCategories.slice(Math.ceil(skincareSubCategories.length / 2)).map(subCat => (
                                     <p key={subCat}><a href={`#${subCat.replace(/\s+/g, '-').toLowerCase()}`} className="text-gray-700 hover:text-purple-900">› {subCat}</a></p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* 헤어케어 */}
                <div className="w-full md:w-1/2 px-4">
                    <div className="border-t-2 border-b-2 border-gray-400 py-6">
                        <h3 className="text-xl font-light text-international-klein-blue mb-6 tracking-widest">
                            <a href="#헤어케어-프로페셔널-시리즈">› 헤어케어 프로페셔널 시리즈</a>
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 text-sm">
                            <div className="space-y-3">
                                {haircareSubCategories.map(subCat => (
                                     <p key={subCat}><a href={`#${subCat.replace(/\s+/g, '-').toLowerCase()}`} className="text-gray-700 hover:text-purple-900">› {subCat}</a></p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Main Product Grid Section */}
        <div className="py-16">
            {Object.entries(productsByMainCategory).map(([mainCategory, mainCategoryProducts]) => {
              const productsBySubCategory = groupByKey(mainCategoryProducts, 'subCategory');
              const englishTitle = mainCategory === '스킨케어 프로페셔널 시리즈' ? 'SKINCARE PROFESSIONAL series' : 'HAIRCARE PROFESSIONAL series';

              return (
                <section key={mainCategory} id={mainCategory.replace(/\s+/g, '-').toLowerCase()} className="mb-16 scroll-mt-20">
                  <div className="pb-4 mb-8 border-b border-international-klein-blue flex justify-between items-baseline">
                    <h2 className="text-2xl font-semibold text-international-klein-blue tracking-wider">{mainCategory}</h2>
                    <span className="text-base font-light text-international-klein-blue tracking-widest">{englishTitle}</span>
                  </div>

                  {Object.entries(productsBySubCategory).map(([subCategory, subCategoryProducts]) => (
                    <div key={subCategory} id={subCategory.replace(/\s+/g, '-').toLowerCase()} className="mb-12 scroll-mt-20">
                      <h3 className="text-xl font-normal text-blue-600 mb-6">{subCategory}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                        {subCategoryProducts.map((product) => (
                          <div key={product.id} className="flex items-start gap-4">
                            <div className="w-1/3 flex-shrink-0">
                              <img 
                                src={`https://via.placeholder.com/200x200.png/f0f0f0/333333?text=${product.name.substring(0, 10)}`} 
                                alt={product.name} 
                                className="w-full h-auto object-cover border"
                              />
                            </div>
                            <div className="w-2/3">
                              <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded mb-2">{product.tag}</span>
                              <h4 className="text-md font-semibold text-gray-800 mb-1">{product.name}</h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-2">{product.description}</p>
                              <p className="text-xs text-gray-500">{product.spec}</p>
                            </div>
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
