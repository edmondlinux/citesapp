import React from 'react';

const InitiativesSection = () => {
  const initiatives = [
    {
      id: 1,
      title: "The International Consortium on Combating Wildlife Crime",
      image: "/ICCWC_LogoBlack 12.png"
    },
    {
      id: 2,
      title: "Monitoring the Illegal Killing of Elephants",
      image: "/mike.png"
    },
    {
      id: 3,
      title: "Supporting sustainable management of endangered tree species",
      image: "/logo-large 1.png"
    }
  ];

  const resources = [
    {
      id: 1,
      title: "InforMEA E-learning",
      image: "/e-learning-4180573.png"
    },
    {
      id: 2,
      title: "CITES Virtual College",
      image: "/online-course-4180675.png"
    },
    {
      id: 3,
      title: "CITES Checklist",
      image: "/planning-3040340.png"
    },
    {
      id: 4,
      title: "CITES Wildlife TradeView",
      image: "/increase-3147200.png"
    }
  ];

  return (
    <section className="py-12">
      <div className="container-big">
        {/* Initiatives */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Initiatives</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {initiatives.map((initiative) => (
              <button 
                key={initiative.id}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img 
                  src={initiative.image}
                  alt={initiative.title}
                  className="mb-4"
                />
                <span className="text-gray-800 font-medium">{initiative.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8">Resources</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {resources.map((resource) => (
              <button 
                key={resource.id}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img 
                  src={resource.image}
                  alt={resource.title}
                  className="mb-4"
                />
                <span className="text-gray-800 font-medium">{resource.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;