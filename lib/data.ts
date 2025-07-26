export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  sizes: string[];
  colors: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "エリートトライスーツ Pro",
    brand: "AquaSpeed",
    price: 28800,
    originalPrice: 32000,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    category: "メンズ",
    description: "プロ仕様の高性能トライスーツ。空力性能と水中での抵抗を最小限に抑えた設計で、最高のパフォーマンスを発揮します。",
    features: [
      "高い空力性能",
      "速乾性素材",
      "UVカット機能",
      "3つのポケット付き",
      "チャフィング防止設計"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["ブラック", "ネイビー", "レッド"],
    rating: 4.8,
    reviewCount: 142,
    inStock: true
  },
  {
    id: 2,
    name: "ウィメンズ トライスーツ Elite",
    brand: "HydroFit",
    price: 24900,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=500&fit=crop",
    category: "レディース",
    description: "女性専用設計のトライスーツ。快適な着心地と優れた機能性を両立した一着です。",
    features: [
      "女性専用フィット",
      "吸汗速乾素材",
      "UV50+プロテクション",
      "背面ポケット",
      "フラットロックシーム"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["ピンク", "ホワイト", "ブルー"],
    rating: 4.6,
    reviewCount: 89,
    inStock: true
  },
  {
    id: 3,
    name: "スプリント トライスーツ",
    brand: "VelocityGear",
    price: 19800,
    originalPrice: 22000,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    category: "メンズ",
    description: "スプリント距離に最適化されたトライスーツ。軽量で動きやすく、初心者から上級者まで幅広く対応。",
    features: [
      "軽量設計",
      "ストレッチ素材",
      "クイックドライ",
      "サイドポケット",
      "反射材付き"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["グリーン", "オレンジ", "ブラック"],
    rating: 4.4,
    reviewCount: 67,
    inStock: true
  },
  {
    id: 4,
    name: "ロングディスタンス トライスーツ",
    brand: "Endurance",
    price: 26500,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop",
    category: "ユニセックス",
    description: "長距離レース用に設計されたトライスーツ。長時間の使用でも快適さを保つ高品質素材を使用。",
    features: [
      "長時間快適",
      "チャフィング防止",
      "栄養補給ポケット",
      "高通気性",
      "耐久性素材"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["ブルー", "パープル", "イエロー"],
    rating: 4.7,
    reviewCount: 124,
    inStock: false
  },
  {
    id: 5,
    name: "エントリーレベル トライスーツ",
    brand: "StartLine",
    price: 14800,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    category: "ユニセックス",
    description: "トライアスロン初心者に最適なエントリーモデル。コストパフォーマンスに優れ、基本機能をしっかり備えています。",
    features: [
      "初心者向け",
      "コストパフォーマンス",
      "基本機能完備",
      "洗濯機対応",
      "シンプルデザイン"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["ブラック", "グレー"],
    rating: 4.2,
    reviewCount: 203,
    inStock: true
  },
  {
    id: 6,
    name: "ウェットスーツ対応 トライスーツ",
    brand: "AquaTech",
    price: 31200,
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&h=500&fit=crop",
    category: "レディース",
    description: "ウェットスーツとの組み合わせを考慮した設計。寒冷地でのレースにも対応可能な高機能モデル。",
    features: [
      "ウェットスーツ対応",
      "保温性",
      "耐塩水素材",
      "着脱しやすい",
      "プレミアム品質"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["ブラック", "シルバー"],
    rating: 4.9,
    reviewCount: 56,
    inStock: true
  }
];

export const categories = ["すべて", "メンズ", "レディース", "ユニセックス"];

export const brands = ["AquaSpeed", "HydroFit", "VelocityGear", "Endurance", "StartLine", "AquaTech"];

export const priceRanges = [
  { label: "10,000円未満", min: 0, max: 10000 },
  { label: "10,000円 - 20,000円", min: 10000, max: 20000 },
  { label: "20,000円 - 30,000円", min: 20000, max: 30000 },
  { label: "30,000円以上", min: 30000, max: Infinity }
];