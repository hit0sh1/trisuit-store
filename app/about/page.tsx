import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">TriSuit Storeについて</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          トライアスロン愛好家のための高品質なトライスーツを提供し、
          皆様のパフォーマンス向上とスポーツライフの充実をサポートします。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">私たちのミッション</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              TriSuit Storeは、トライアスロンというスポーツを愛する全ての人々に、
              最高品質のトライスーツを提供することを使命としています。
            </p>
            <p>
              プロアスリートから週末の愛好家まで、それぞれの目標やレベルに応じた
              最適な製品を厳選し、お客様一人ひとりのパフォーマンス向上をサポートします。
            </p>
            <p>
              私たちは単なる販売業者ではありません。トライアスロンコミュニティの一員として、
              皆様の挑戦を応援し、共に成長していくパートナーでありたいと考えています。
            </p>
          </div>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
            alt="トライアスロン競技の様子"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">私たちの価値観</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">品質第一</h3>
            <p className="text-gray-600">
              世界トップブランドの製品のみを厳選し、品質には絶対に妥協しません。
              全ての商品に自信を持って品質保証をお付けしています。
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">お客様第一</h3>
            <p className="text-gray-600">
              お客様のニーズを第一に考え、購入前から購入後まで、
              専門スタッフが丁寧にサポートいたします。
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">革新性</h3>
            <p className="text-gray-600">
              常に最新のテクノロジーと素材を追求し、
              アスリートのパフォーマンス向上に貢献する革新的な製品をお届けします。
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop"
            alt="トライスーツのデザイン"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">私たちの歴史</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              TriSuit Storeは2015年、トライアスロン愛好家である創業者が、
              「本当に良いトライスーツを多くの人に届けたい」という想いから設立されました。
            </p>
            <p>
              設立当初はオンラインでの小規模な販売からスタートしましたが、
              お客様からの信頼と口コミにより、徐々に事業を拡大してきました。
            </p>
            <p>
              現在では国内外の優れたブランドとのパートナーシップを築き、
              幅広い商品ラインナップでお客様のニーズにお応えしています。
            </p>
            <p>
              これからも、トライアスロンコミュニティの発展に貢献し続けることを約束します。
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">チーム紹介</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">田中 太郎</h3>
            <p className="text-blue-600 font-medium mb-2">創業者・CEO</p>
            <p className="text-gray-600 text-sm">
              トライアスロン歴15年。アイアンマン完走経験を持つ。
              製品選定と品質管理を担当。
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">佐藤 花子</h3>
            <p className="text-blue-600 font-medium mb-2">カスタマーサポート責任者</p>
            <p className="text-gray-600 text-sm">
              お客様サポート歴8年。製品知識豊富で、
              サイズ選びから使用方法まで丁寧にアドバイス。
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">鈴木 一郎</h3>
            <p className="text-blue-600 font-medium mb-2">商品企画・マーケティング</p>
            <p className="text-gray-600 text-sm">
              元プロトライアスリート。競技経験を活かした
              商品企画とマーケティング戦略を担当。
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">お客様の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              「初めてのトライアスロンでTriSuit Storeのスーツを使用しました。
              フィット感が抜群で、レース中も快適でした。スタッフの方のアドバイスも的確で、
              初心者の私にも分かりやすく説明していただけました。」
            </p>
            <p className="text-gray-900 font-semibold">- 東京都 M.Kさん</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              「長年愛用しています。品質の高さと耐久性は他のブランドとは一線を画します。
              特にロングディスタンスでのパフォーマンスは素晴らしく、
              自己ベストを更新することができました。」
            </p>
            <p className="text-gray-900 font-semibold">- 大阪府 S.Tさん</p>
          </div>
        </div>
      </div>
    </div>
  );
}