'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products, categories, brands, priceRanges } from '@/lib/data';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== 'すべて') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (selectedBrand) {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    if (selectedPriceRange) {
      const range = priceRanges.find(r => r.label === selectedPriceRange);
      if (range) {
        filtered = filtered.filter(product => 
          product.price >= range.min && product.price < range.max
        );
      }
    }

    switch (sortBy) {
      case 'priceAsc':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedBrand, selectedPriceRange, sortBy]);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative h-4 w-4">
            <StarOutlineIcon className="h-4 w-4 text-gray-300 absolute" />
            <StarIcon className="h-4 w-4 text-yellow-400 absolute" style={{ clipPath: 'inset(0 50% 0 0)' }} />
          </div>
        );
      } else {
        stars.push(
          <StarOutlineIcon key={i} className="h-4 w-4 text-gray-300" />
        );
      }
    }
    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">商品一覧</h1>
        <p className="text-gray-600">
          高品質なトライスーツを豊富に取り揃えております。お客様のニーズに合った商品をお探しください。
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">カテゴリ</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">ブランド</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="brand"
                    value=""
                    checked={selectedBrand === ''}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">すべて</span>
                </label>
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="radio"
                      name="brand"
                      value={brand}
                      checked={selectedBrand === brand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">価格帯</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value=""
                    checked={selectedPriceRange === ''}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">すべて</span>
                </label>
                {priceRanges.map((range) => (
                  <label key={range.label} className="flex items-center">
                    <input
                      type="radio"
                      name="priceRange"
                      value={range.label}
                      checked={selectedPriceRange === range.label}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <p className="text-gray-600">
              {filteredProducts.length}件の商品が見つかりました
            </p>
            <div className="flex items-center space-x-2">
              <label htmlFor="sort" className="text-sm text-gray-700">並び替え:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm"
              >
                <option value="default">デフォルト</option>
                <option value="priceAsc">価格の安い順</option>
                <option value="priceDesc">価格の高い順</option>
                <option value="rating">評価の高い順</option>
                <option value="name">名前順</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      セール
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">売り切れ</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 h-14">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      ({product.reviewCount})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-blue-600">
                        ¥{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ¥{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <Link 
                      href={`/products/${product.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                      詳細
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">条件に合う商品が見つかりませんでした。</p>
              <p className="text-gray-400 text-sm mt-2">フィルターを変更して再度お試しください。</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}