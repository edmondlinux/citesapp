
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';

const CitesViolationFines = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'CITES Violation Fines', href: '/cites-violation-fines' }
  ];

  return (
    <div>
      <div className="container-big py-6">
        <Breadcrumb items={breadcrumbItems} />
        
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              CITES Violation Fines: Understanding the Penalties for Wildlife Trade Violations
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Learn about the severe legal consequences and financial penalties for transporting or trading CITES-listed species without proper documentation.
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700 dark:text-red-300">
                    <strong>Legal Warning:</strong>  This page provides information on the penalties for CITES violation. It is not legal advice. Email <a href="mailto:cites@cites.us" className="text-red-600 hover:text-red-800" >cites@cites.us</a>
                  </p>
                </div>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>What Are CITES Violations?</h2>
            <p>
              CITES (Convention on International Trade in Endangered Species of Wild Fauna and Flora) violations occur when individuals or organizations transport, trade, import, or export species listed in the CITES appendices without proper permits and documentation. These violations represent serious crimes against wildlife conservation and can result in severe legal penalties.
            </p>

            <h2>Understanding CITES Appendices</h2>
            <p>
              CITES protects over 38,000 species through three appendices:
            </p>
            <ul>
              <li><strong>Appendix I:</strong> Species threatened with extinction (e.g., tigers, elephants, rhinoceros)</li>
              <li><strong>Appendix II:</strong> Species not necessarily threatened but requiring trade regulation (e.g., many orchids, parrots)</li>
              <li><strong>Appendix III:</strong> Species protected in at least one country requesting international cooperation</li>
            </ul>

            <h2>Severe Legal Penalties</h2>
            <p>
              The penalties for CITES violations are among the most severe in environmental law, reflecting the critical importance of wildlife protection:
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
                Typical Penalties Include:
              </h3>
              <ul className="space-y-2 text-yellow-700 dark:text-yellow-300">
                <li>• <strong>Prison sentences:</strong> Up to 10 years imprisonment</li>
                <li>• <strong>Monetary fines:</strong> Minimum $20,000 USD (varies by jurisdiction)</li>
                <li>• <strong>Asset forfeiture:</strong> Confiscation of specimens and equipment</li>
                <li>• <strong>Criminal records:</strong> Permanent criminal history</li>
              </ul>
            </div>

            <h2>Country-Specific Penalties</h2>
            <p>
              Penalties vary significantly depending on the country where the offense is committed. Here are examples from major jurisdictions:
            </p>

            <h3>United States</h3>
            <p>
              Under the <a href="https://www.law.cornell.edu/uscode/text/16/chapter-53" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Endangered Species Act (16 U.S.C. §1538)</a> and <a href="https://www.law.cornell.edu/uscode/text/16/chapter-54" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Lacey Act (16 U.S.C. §3372)</a>:
            </p>
            <ul>
              <li>Criminal fines up to $50,000 per violation</li>
              <li>Up to 1 year imprisonment for first offense</li>
              <li>Up to 5 years for subsequent violations</li>
              <li>Civil penalties up to $25,000 per violation</li>
            </ul>

            <h3>European Union</h3>
            <p>
              Under <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32006R0865" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Council Regulation (EC) No 865/2006</a>:
            </p>
            <ul>
              <li>Fines up to €500,000 or more</li>
              <li>Prison sentences up to 5 years</li>
              <li>Immediate confiscation of specimens</li>
              <li>Lifetime bans from wildlife trade</li>
            </ul>

            <h3>Australia</h3>
            <p>
              Under the <a href="https://www.legislation.gov.au/Details/C2016C00629" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Environment Protection and Biodiversity Conservation Act 1999</a>:
            </p>
            <ul>
              <li>Fines up to AUD $222,000 for individuals</li>
              <li>Up to 10 years imprisonment</li>
              <li>Corporate penalties up to AUD $2.22 million</li>
            </ul>

            <h2>Common Violations and Their Consequences</h2>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold mb-4">Typical Violation Scenarios:</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-300">Importing exotic pets without permits</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Result: Species confiscation, $20,000+ fine, potential imprisonment</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-300">Transporting ivory or rhino horn</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Result: Mandatory prosecution, asset forfeiture, 5-10 years imprisonment</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-300">Commercial trade in protected orchids</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Result: Business closure, hefty fines, criminal charges</p>
                </div>
              </div>
            </div>

            <h2>Legal Framework and Enforcement</h2>
            <p>
              CITES violations are prosecuted under various national and international laws:
            </p>
            <ul>
              <li><a href="https://www.cites.org/eng/disc/text.php" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">CITES Convention Text</a> - The foundational international agreement</li>
              <li><a href="https://www.unodc.org/unodc/en/wildlife-and-forest-crime/overview.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">UN Office on Drugs and Crime</a> - International enforcement coordination</li>
              <li><a href="https://www.interpol.int/en/Crimes/Environmental-crime/Wildlife-crime" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">INTERPOL Wildlife Crime</a> - Global law enforcement cooperation</li>
            </ul>

            <h2>Recent Case Studies</h2>
            <p>
              Recent prosecutions demonstrate the seriousness with which authorities treat CITES violations:
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">Notable Cases:</h3>
              <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                <li>• Wildlife trafficker sentenced to 18 months and $96,000 fine for smuggling reptiles</li>
                <li>• Ivory dealer received 5 years imprisonment and $2.5 million forfeiture</li>
                <li>• Exotic pet trader fined $150,000 and banned from animal trade for life</li>
                <li>• Abronia Smuggler was sentenced to 15 years in prison and ordered to forfeit $40,000 for illegally transporting Abronia Vasco</li>
                <li>• Pangolin trafficker sentenced to 6 years in prison for illegal possession of over 100 pangolin scales</li>
                <li>• Tiger parts dealer received 8 years imprisonment and a $500,000 fine</li>
                <li>• Parrot smuggler fined $75,000 and sentenced to 2 years probation for trafficking endangered Amazon parrots</li>
                <li>• Marine life exporter sentenced to 4 years and $300,000 forfeiture for illegal coral and seahorse trade</li>
              </ul>
            </div>

            <h2>How to Avoid Violations</h2>
            <p>
              Prevention is always better than prosecution. Here's how to stay compliant:
            </p>
            <ol>
              <li><strong>Research before you buy:</strong> Check if species are CITES-listed</li>
              <li><strong>Obtain proper permits:</strong> Always secure required documentation</li>
              <li><strong>Use authorized dealers:</strong> Purchase only from licensed sources</li>
              <li><strong>Declare at borders:</strong> Always declare wildlife items when traveling</li>
              <li><strong>Consult experts:</strong> Seek advice from CITES authorities when in doubt</li>
            </ol>

            <h2>Resources for Compliance</h2>
            <p>
              Stay informed and compliant with these official resources:
            </p>
            <ul>
              <li><a href="https://www.cites.org/eng/resources/species.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">CITES Species Database</a> - Check if species are protected</li>
              <li><a href="https://www.cites.org/eng/cms/index.php/component/cp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Country Profiles</a> - Find your national CITES authority</li>
              <li><a href="https://www.cites.org/eng/resources/trade_database.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Trade Database</a> - Monitor legal trade patterns</li>
            </ul>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">
                Remember:
              </h3>
              <p className="text-green-700 dark:text-green-300">
                Wildlife trafficking is a serious crime that threatens endangered species and ecosystems worldwide. 
                The severe penalties reflect the importance of protecting our planet's biodiversity. When in doubt, 
                always consult with CITES authorities or legal experts before engaging in any wildlife trade activities.
              </p>
            </div>

            
          </div>
        </article>
      </div>
    </div>
  );
};

export default CitesViolationFines;
