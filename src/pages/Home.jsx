
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import SpotlightSection from '../components/home/SpotlightSection';
import NotificationsSection from '../components/home/NotificationsSection';
import NewsSection from '../components/home/NewsSection';
import InitiativesSection from '../components/home/InitiativesSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="container-big py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SpotlightSection />
          </div>
          <div>
            <NotificationsSection />
          </div>
        </div>
      </div>
      <NewsSection />
      <InitiativesSection />
    </div>
  );
};

export default Home;
