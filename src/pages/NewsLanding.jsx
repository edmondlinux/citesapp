import React from 'react';
import HeroSection from '../components/home/HeroSection';
import NewsSection from '../components/home/NewsSection';

const NewsLanding = () => {
  const additionalNews = [
    {
      id: 4,
      title: "CARICOM and CITES Secretariats Partner to Launch Electronic CITES Permitting System in The Bahamas",
      tag: "News",
      image: "/Strombus_gigas_queen_conch_credit_ftlaudgirl_AdobeStock_53727496_itok-2Xsp1thE.jpeg"
    },
    {
      id: 5,
      title: "UN Ocean Conference 2025 (UNOC-3) Side Event on Achieving SDG14 Through SDG16",
      tag: "News",
      image: "/Image (72)_itok-yjn_gJbA.jpeg"
    },
    {
      id: 6,
      title: "World Environment Day 2025: Message from CITES Secretary-General Ivonne Higuero",
      tag: "News",
      image: "/WED2025-CITES_itok-bO95w9ai.jpeg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-green-800 text-white">
        <div className="absolute inset-0">
          <img 
            src="/news_banner_1_itok-BheDaeHR.jpeg" 
            alt="News banner" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative container-big py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">News, Speeches & Stories</h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <button className="text-gray-300 hover:text-white transition-colors">News</button>
              <span>|</span>
              <button className="text-gray-300 hover:text-white transition-colors">Press releases</button>
              <span>|</span>
              <button className="text-gray-300 hover:text-white transition-colors">SG Statements</button>
              <span>|</span>
              <button className="text-gray-300 hover:text-white transition-colors">Tributes</button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero Items */}
      <HeroSection />

      {/* News Grid */}
      <section className="bg-gray-50 py-12">
        <div className="container-big">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {additionalNews.map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded mb-3">
                    {item.tag}
                  </span>
                  <h3 className="font-semibold text-gray-900 mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <button className="text-green-600 hover:text-green-800 font-medium text-sm">
                    Read more →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <button 
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              See all news
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLanding;