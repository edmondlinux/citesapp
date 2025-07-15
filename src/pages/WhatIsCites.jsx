
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';

const WhatIsCites = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'What is CITES?', href: '/disc/what' }
  ];

  return (
    <div>
      <div className="container-big py-6">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">What is CITES?</h1>
        
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="prose max-w-none">
              <p className="text-lg font-semibold mb-6">
                <strong>CITES (the Convention on International Trade in Endangered Species of Wild Fauna and Flora)</strong> is an international agreement between governments. Its aim is to ensure that international trade in specimens of wild animals and plants does not threaten the survival of the species.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Convention text</h2>
              <p>
                CITES was drafted as a result of a resolution adopted in 1963 at a meeting of members of IUCN (The World Conservation Union). The text of the Convention was finally agreed at a meeting of representatives of 80 countries in Washington, D.C., United States of America, on 2 March 1973, and was opened for signature on 3 March 1973. On 1 July 1975 CITES entered in force. The original of the Convention was deposited with the Depositary Government in the English, French and Spanish languages, each version being equally authentic. The Convention is also available in Chinese and Russian.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">The need for CITES</h2>
              <p>
                Widespread information about the endangered status of many prominent species, such as the tiger and elephants, might make the need for such a convention seem obvious. But at the time when the ideas for CITES were first formed, in the 1960s, international discussion of the regulation of wildlife trade for conservation purposes was something relatively new. With hindsight, the need for CITES is clear. Annually, international wildlife trade is estimated to be worth billions of dollars and to include hundreds of millions of plant and animal specimens. The trade is diverse, ranging from live animals and plants to a vast array of wildlife products derived from them, including food products, exotic leather goods, wooden musical instruments, timber, tourist curios and medicines. Levels of exploitation of some animal and plant species are high and the trade in them, together with other factors, such as habitat loss, is capable of heavily depleting their populations and even bringing some species close to extinction. Many wildlife species in trade are not endangered, but the existence of an agreement to ensure the sustainability of the trade is important in order to safeguard these resources for the future.
              </p>

              <p>
                Because the trade in wild animals and plants crosses borders between countries, the effort to regulate it requires international cooperation to safeguard certain species from over-exploitation. CITES was conceived in the spirit of such cooperation. Today, it accords varying degrees of protection to more than 40,000 species of animals and plants, whether they are traded as live specimens, fur coats or dried herbs.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Parties of the Convention</h2>
              <p>
                CITES is an international agreement to which States and regional economic integration organizations adhere voluntarily. States that have agreed to be bound by the Convention ('joined' CITES) are known as Parties. Although CITES is legally binding on the Parties – in other words they have to implement the Convention – it does not take the place of national laws. Rather it provides a framework to be respected by each Party, which has to adopt its own domestic legislation to ensure that CITES is implemented at the national level.
              </p>
              <p>
                For many years CITES has been among the conservation agreements with the largest membership, with now 185 Parties.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">CITES Origins and Milestones</h2>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-center text-gray-600">
                  [Interactive timeline would be embedded here showing CITES history from 1963 to present]
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4">Download the <a href="#" className="text-green-600 hover:text-green-800">CITES Brochure</a> here.</p>
              <div className="flex justify-center">
                <img 
                  src="/api/placeholder/171/245" 
                  alt="CITES Brochure" 
                  className="border rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsCites;
