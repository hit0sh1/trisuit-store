'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "エリートトライスーツ Pro",
      brand: "AquaSpeed",
      price: 28800,
      originalPrice: 32000,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      size: "M",
      color: "ブラック",
      quantity: 1
    },
    {
      id: 2,
      name: "ウィメンズ トライスーツ Elite",
      brand: "HydroFit",
      price: 24900,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=500&fit=crop",
      size: "S",
      color: "ピンク",
      quantity: 2
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.floor(subtotal * 0.1);
  const shipping = subtotal >= 10000 ? 0 : 800;
  const total = subtotal + tax + shipping;

  const savings = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + ((item.originalPrice - item.price) * item.quantity);
    }
    return sum;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-3M13 13v6a2 2 0 002 2h.01a2 2 0 002-2v-6m-4.01 0V9a2 2 0 012-2h.01a2 2 0 012 2v4.01" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">カートは空です</h1>
          <p className="text-gray-600 mb-8">お気に入りの商品をカートに追加してください</p>
          <Link 
            href="/products"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            商品を見る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">ショッピングカート</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                カート内商品 ({cartItems.length}点)
              </h2>
            </div>
            
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {item.name}
                          </h3>
                          <div className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">{item.brand}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <span>サイズ: {item.size}</span>
                            <span>カラー: {item.color}</span>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                          >
                            <MinusIcon className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-1 border border-gray-300 rounded min-w-[50px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                          >
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-1 sm:space-y-0">
                            <span className="text-lg font-bold text-blue-600">
                              ¥{(item.price * item.quantity).toLocaleString()}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                ¥{(item.originalPrice * item.quantity).toLocaleString()}
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">
                            単価: ¥{item.price.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 flex justify-between">
            <Link 
              href="/products"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← 買い物を続ける
            </Link>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">注文サマリー</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">小計</span>
                <span className="text-gray-900">¥{subtotal.toLocaleString()}</span>
              </div>
              
              {savings > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">割引</span>
                  <span className="text-green-600">-¥{savings.toLocaleString()}</span>
                </div>
              )}
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">消費税 (10%)</span>
                <span className="text-gray-900">¥{tax.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">送料</span>
                <span className={shipping === 0 ? "text-green-600" : "text-gray-900"}>
                  {shipping === 0 ? "無料" : `¥${shipping.toLocaleString()}`}
                </span>
              </div>
              
              {subtotal < 10000 && (
                <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                  ¥{(10000 - subtotal).toLocaleString()}以上で送料無料
                </div>
              )}
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">合計</span>
                <span className="text-2xl font-bold text-blue-600">
                  ¥{total.toLocaleString()}
                </span>
              </div>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3">
              レジに進む
            </button>
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>SSL暗号化による安全な決済</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">配送・返品について</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 平日15時までのご注文で翌日配送</li>
              <li>• 30日間返品保証</li>
              <li>• 送料：10,000円以上で無料</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}