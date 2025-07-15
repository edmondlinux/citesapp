import React, { useState } from 'react';

const SpotlightSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const spotlightItems = [
    {
      id: 0,
      title: "50 Years of CITES",
      description: "Discover the Convention's origins and 5 decades of milestones",
      link: "Access the timeline here",
      image: "/50years.jpeg"
    },
    {
      id: 1,
      title: "What is CITES?",
      description: "An international agreement between governments...",
      link: "Read more",
      image: "/CITES-SPECIES_600px_itok-bgTRko3w.jpeg"
    },
    {
      id: 2,
      title: "Trade suspensions",
      description: "Countries currently subject to a recommendation to suspend trade",
      link: "Read more",
      image: "/TnXlFFSQ_1_itok-p5Z7a8Ej.jpeg"
    },
    {
      id: 3,
      title: "CITES Virtual College",
      description: "",
      link: "Visit the site to find out more",
      image: "/CITES_Virtual_College_cover (1)_itok-U2sVopOb.png"
    },
    {
      id: 4,
      title: "CITES and Forests",
      description: "",
      link: "Click here to visit the new CITES and Forests webpage",
      image: "/Branching_itok-ZGryz1ho.jpeg"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Spotlight on</h2>

      <div className="grid md:grid-cols-5 gap-4">
        {/* Tabs */}
        <div className="md:col-span-2">
          <ul className="space-y-2">
            {spotlightItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-3 rounded-lg transition-colors flex items-center ${
                    activeTab === index 
                      ? 'bg-green-100 text-green-800' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5v10l7-5-7-5z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <div className="relative">
            <img 
              src={spotlightItems[activeTab].image}
              alt={spotlightItems[activeTab].title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">
                {spotlightItems[activeTab].title}
              </h3>
              {spotlightItems[activeTab].description && (
                <p className="text-gray-600 mb-3">
                  {spotlightItems[activeTab].description}
                </p>
              )}
              <button className="text-green-600 hover:text-green-800 font-medium">
                {spotlightItems[activeTab].link} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightSection;