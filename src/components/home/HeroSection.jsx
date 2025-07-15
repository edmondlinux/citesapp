import React from 'react';

const HeroSection = () => {
  const heroItems = [
    {
      id: 1,
      title: "CITES Highlights Marine Conservation and Trade Commitments at UN Ocean Conference 2025",
      tag: "News",
      image: "/AdobeStock_180639191_itok-zYj82B2N.jpeg"
    },
    {
      id: 2,
      title: "Reflections on the Fiftieth Anniversary of the Entry into Force of the World Wildlife Treaty",
      tag: "News",
      image: "/1_Dendrobium_AdobeStock_itok-GZhHnHn3.jpeg"
    },
    {
      id: 3,
      title: "United Against Poaching and Trafficking Affecting Rhinoceroses",
      tag: "News",
      image: "/54579847285_b7cb756f5c_c_itok-_nd3QtGs.jpeg"
    }
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 transition-colors">
      {/* Mobile: Stack vertically */}
      <div className="flex flex-col lg:hidden">
        {heroItems.map((item, index) => (
          <div
            key={item.id}
            className="relative overflow-hidden h-60"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block bg-orange-500 px-3 py-1 text-sm rounded mb-3">
                {item.tag}
              </span>
              <h2 className="text-xl font-bold line-clamp-2">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: 2/3 + 1/3 column layout */}
      <div className="hidden lg:flex h-96">
        {/* Main (Left) Div - 2/3 width */}
        <div className="w-2/3 relative overflow-hidden">
          <img 
            src={heroItems[0].image} 
            alt={heroItems[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <span className="inline-block bg-orange-500 px-4 py-2 text-sm rounded mb-4">
              {heroItems[0].tag}
            </span>
            <h2 className="text-2xl font-bold line-clamp-2">
              {heroItems[0].title}
            </h2>
          </div>
        </div>

        {/* Right Sidebar - 1/3 width */}
        <div className="w-1/3 flex flex-col">
          {/* Top Right Div */}
          <div className="flex-1 relative overflow-hidden">
            <img 
              src={heroItems[1].image} 
              alt={heroItems[1].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block bg-orange-500 px-3 py-1 text-sm rounded mb-3">
                {heroItems[1].tag}
              </span>
              <h3 className="text-lg font-bold line-clamp-2">
                {heroItems[1].title}
              </h3>
            </div>
          </div>

          {/* Bottom Right Div */}
          <div className="flex-1 relative overflow-hidden">
            <img 
              src={heroItems[2].image} 
              alt={heroItems[2].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block bg-orange-500 px-3 py-1 text-sm rounded mb-3">
                {heroItems[2].tag}
              </span>
              <h3 className="text-lg font-bold line-clamp-2">
                {heroItems[2].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;