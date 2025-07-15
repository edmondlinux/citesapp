
import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';

const ReptileTransportRequirements = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Reptile Transport Requirements', href: '/reptile-transport-requirements' }
  ];

  return (
    <div>
      <div className="container-big py-6">
        <Breadcrumb items={breadcrumbItems} />
        
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              New Reptile Transportation Requirements: Enhanced Protection for Vulnerable Species
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Due to recent increases in illegal reptile smuggling, new federal regulations now require CITES permits for the transportation of specific reptile species within the United States.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Important Notice:</strong> These requirements are effective immediately and apply to all transportation of listed species, regardless of the source or breeding status of the animals.
                  </p>
                </div>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>Background: The Growing Threat of Reptile Smuggling</h2>
            <p>
              Recent investigations have uncovered extensive illegal smuggling networks targeting rare and endangered reptile species. These operations have resulted in significant threats to wild populations and have prompted immediate action from federal wildlife authorities. In response to this crisis, CITES, in partnership with the U.S. Fish and Wildlife Service (FWS) and other enforcement agencies, has implemented enhanced regulations for reptile transportation.
            </p>

            <h2>New Transportation Requirements</h2>
            <p>
              Effective immediately, any individual or organization planning to transport any of the species listed below within the United States must obtain a valid CITES permit before transportation occurs. This requirement applies to:
            </p>
            <ul>
              <li>All interstate transportation of listed species</li>
              <li>Transportation from legal breeders to purchasers</li>
              <li>Transfers between licensed facilities</li>
              <li>Transportation for veterinary care or other legitimate purposes</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
                Critical Requirement:
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300">
                <strong>ALL buyers must apply for and obtain a CITES permit directly from our website through the official CITES Application Portal before taking possession of any listed species.</strong> This requirement applies regardless of whether the animals are from legal breeders or other legitimate sources.
              </p>
            </div>

            <h2>Covered Species</h2>
            <p>
              The following reptile and turtle species are now subject to mandatory CITES permit requirements for all domestic transportation:
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold mb-4">Species Requiring CITES Transportation Permits:</h3>
              <ul className="space-y-3 text-blue-700 dark:text-blue-300">
             
                <li>• Cave geckos (<em>Goniurosaurus</em> spp.)</li>
                <li>• Armadillo lizards (<em>Ouroborus cataphractus</em>)</li>
                <li>• Ploughshare tortoise (<em>Astrochelys yniphora</em>)</li>
                <li>• Radiated tortoise (<em>Astrochelys radiata</em>)</li>
                <li>• Philippine forest turtle (<em>Siebenrockiella leytensis</em>)</li>
                <li>• Central American river turtle (<em>Dermatemys mawii</em>)</li>           
                
                 <li>• Abronia lizards (Genus <em>Abronia</em>)</li>
                <li>• Big-headed turtle (<em>Platysternon megacephalum</em>)</li>
                <li>• Chinese alligator (<em>Alligator sinensis</em>)</li>
                <li>• Jamaican iguana (<em>Cyclura collei</em>)</li>
                <li>• Grand Cayman blue iguana (<em>Cyclura lewisi</em>)</li>
                <li>• Fiji banded iguana (<em>Brachylophus fasciatus</em>)</li>
                <li>• Komodo dragon (<em>Varanus komodoensis</em>)</li>
                <li>• Boelen's python (<em>Simalia boeleni</em>)</li>
                <li>• Saint Lucia racer (<em>Erythrolamprus ornatus</em>)</li>
                <li>• Galápagos pink land iguana (<em>Conolophus marthae</em>)</li>
                <li>• Burmese roofed turtle (<em>Batagur trivittata</em>)</li>
                <li>• Roti Island snake-necked turtle (<em>Chelodina mccordi</em>)</li>
                <li>• McCord's box turtle (<em>Cuora mccordi</em>)</li>
                <li>• Vietnamese pond turtle (<em>Mauremys annamensis</em>)</li>
                <li>• Flattened musk turtle (<em>Sternotherus depressus</em>)</li>
                <li>• Geometric tortoise (<em>Psammobates geometricus</em>)</li>
                <li>• Chinese three-striped box turtle (<em>Cuora trifasciata</em>)</li>
                <li>• Spiny-tailed iguana (<em>Ctenosaura bakeri</em>)</li>
                <li>• Western swamp tortoise (<em>Pseudemydura umbrina</em>)</li>
              </ul>
            </div>

            <h2>How to Obtain a CITES Transportation Permit</h2>
            <p>
              All permits must be obtained through our official CITES Application Portal. The process involves:
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">
                Application Process:
              </h3>
              <ol className="space-y-2 text-green-700 dark:text-green-300 list-decimal list-inside">
                <li>Visit the official CITES Application Portal on our website</li>
                <li>Complete the Transportation Permit Application (Form CITES-TP)</li>
                <li>Provide documentation of legal acquisition or breeding</li>
                <li>Submit proof of destination facility and purpose</li>
                <li>Pay the required processing fee</li>
                <li>Wait for permit approval (typically 5-10 business days)</li>
                <li>Receive digital permit with unique tracking number</li>
              </ol>
            </div>

            <h2>Partnership with Enforcement Agencies</h2>
            <p>
              This initiative represents a collaborative effort between CITES and multiple enforcement agencies:
            </p>
            <ul>
              <li><strong>U.S. Fish and Wildlife Service (FWS):</strong> Primary enforcement and inspection authority</li>
              <li><strong>U.S. Customs and Border Protection:</strong> Border security and smuggling prevention</li>
              <li><strong>State Wildlife Agencies:</strong> Local enforcement and compliance monitoring</li>
              <li><strong>INTERPOL Wildlife Crime Unit:</strong> International coordination and intelligence</li>
            </ul>

            <h2>Penalties for Non-Compliance</h2>
            <p>
              Failure to obtain proper CITES permits before transportation or ownership of listed species will result in serious legal consequences. Violators will face the full range of penalties outlined in our <Link to="/cites-violation-fines" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">CITES Violation Fines</Link> page, including:
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-4">
                Penalties for Violations:
              </h3>
              <ul className="space-y-2 text-red-700 dark:text-red-300">
                <li>• <strong>Criminal charges:</strong> Up to 10 years imprisonment</li>
                <li>• <strong>Monetary fines:</strong> Minimum $20,000 USD per violation</li>
                <li>• <strong>Asset forfeiture:</strong> Immediate confiscation of animals and equipment</li>
                <li>• <strong>Lifetime bans:</strong> Permanent prohibition from reptile trade activities</li>
                <li>• <strong>Criminal records:</strong> Felony convictions with lasting consequences</li>
              </ul>
            </div>

            <h2>Recent Enforcement Actions</h2>
            <p>
              The urgency of these new requirements is underscored by recent high-profile cases of reptile smuggling:
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">Recent Cases:</h3>
              <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                <li>• Seizure of 47 illegally imported Abronia lizards from Guatemala, resulting in 8 arrests</li>
                <li>• Conviction of smuggling ring trafficking rare cave geckos from Southeast Asia</li>
                <li>• International operation targeting illegal Komodo dragon trade networks</li>
                <li>• Coordinated raids on facilities housing undocumented endangered tortoises</li>
              </ul>
            </div>

            <h2>Legitimate Breeding and Trade</h2>
            <p>
              These regulations are designed to support legitimate reptile breeding and trade while preventing illegal smuggling. Legal breeders and dealers are encouraged to:
            </p>
            <ul>
              <li>Maintain detailed records of all breeding activities</li>
              <li>Ensure all customers obtain proper permits before transportation</li>
              <li>Report suspicious requests or activities to authorities</li>
              <li>Participate in CITES compliance training programs</li>
            </ul>

            <h2>Resources and Support</h2>
            <p>
              For assistance with the permit application process or questions about compliance:
            </p>
            <ul>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">CITES Application Portal</a> - Apply for transportation permits</li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Species Identification Guide</a> - Verify if your species requires permits</li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Compliance Assistance Hotline</a> - 1-800-CITES-HELP</li>
              <li><a href="mailto:permits@cites.us" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">permits@cites.us</a> - Email support for permit applications</li>
            </ul>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">
                Remember:
              </h3>
              <p className="text-green-700 dark:text-green-300">
                These enhanced requirements protect vulnerable reptile species from exploitation while supporting responsible conservation efforts. By obtaining proper permits, you contribute to the preservation of these magnificent creatures for future generations. When in doubt, always contact CITES authorities before transporting any protected species.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ReptileTransportRequirements;
