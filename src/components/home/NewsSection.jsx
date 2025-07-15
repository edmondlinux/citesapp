import React from 'react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Inaugural CITES Global Youth Summit empowers the next generation of wildlife trade decision-makers",
      tag: "News",
      image: "/CITES_Global_Youth_Summit_CGYS2025 (2)_itok-G92N9gFu.jpeg"
    },
    {
      id: 2,
      title: "UN Ocean Conference (UNOC-3) Side Event on UN Oceans as a mechanism to mobilize multilateral ocean action towards SDG14",
      tag: "SG statements",
      image: "/Image (84-2)_itok-qlmMO3wB.jpeg"
    },
    {
      id: 3,
      title: "UN Ocean Conference (UNOC-3) Launch of the Global Coalition to Halt the Extinction of Sharks and Rays",
      tag: "SG statements",
      image: "/Image (85)_itok-dxdQYpvD.jpeg"
    }
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container-big">
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
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
      </div>
    </section>
  );
};

export default NewsSection;