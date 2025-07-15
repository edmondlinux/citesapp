
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';

const Financing = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About CITES', href: '#' },
    { label: 'How is CITES financed?', href: '/disc/fund' }
  ];

  return (
    <div>
      <div className="container-big py-6">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">How is CITES financed?</h1>
        
        {/* Banner Image */}
        <div className="mb-8">
          <img 
            src="/api/placeholder/1231/159" 
            alt="Finance banner" 
            className="w-full rounded-lg"
          />
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Core and External Funding</h2>
            <div className="prose max-w-none mb-8">
              <p>The Convention is financed by core and external funds.</p>
              <p>
                The core funding, known as the CITES Trust Fund (CTL), finances the administrative costs of the Secretariat, the Conference of the Parties and its subsidiary bodies, the Standing Committee and other permanent committees. The CITES Trust Fund is replenished from contributions of the Parties to the Convention based on the United Nations scale of assessment, adjusted to take account of the fact that not all members of the United Nations are Parties to the Convention.
              </p>
              <p>
                The external funds, known as the CITES External Trust Fund (QTL) funds the voluntary programmes/projects activities costs. The CITES External Trust Fund consists of extrabudgetary contributions from Parties and other entities on a purely voluntary basis. Each offer of funding to the CITES External Trust Fund is negotiated and vetted by the Secretariat.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Resolutions / Decisions</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-green-600 hover:text-green-800">Resolution 18.1</a> - 
                    <em> Financing and the costed programme of work of the Secretariat for the triennium 2020-2022</em>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:text-green-800">Resolution 18.1. Annex 1</a> - 
                    <em> Costed programme of work for the Secretariat for the triennium 2020-2022</em>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:text-green-800">Resolution Conf. 18.1 Annex 5</a> - 
                    <em> The scale of contributions to the Trust Fund for 2020-2022</em>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Certified financial statements</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-green-600 hover:text-green-800">
                      Certified financial statement of CITES Trust Fund (CTL)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:text-green-800">
                      Certified financial statement for CITES External Trust Fund (QTL)
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Financial regulations and rules of the United Nations</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-green-600 hover:text-green-800">
                      Financial regulations and rules of the United Nations dated 1 July 2013
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:text-green-800">
                      Supplement to the Financial regulations and rules of the United Nations dated 1 July 2015
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:text-green-800">
                      Amended Financial regulations and rules of the United Nations dated 4 December 2018
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:text-green-800">
                      Amended Supplement to the Financial regulations and rules of the United Nations dated 4 December 2018
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Status of contributions</h2>
              <p className="mb-4">
                The information on the status of contributions to the CITES Trust Fund and External Trust Fund is updated on a monthly basis.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-green-600 hover:text-green-800">
                    Status of contributions to the CITES Trust Fund (CTL)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-800">
                    Annual distribution of unpaid contributions of the Parties (CTL)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-800">
                    2023-2025 Status of external contributions to the CITES External Trust Fund (QTL)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-800">
                    2020-2022 Status of external contributions to the CITES External Trust Fund (QTL)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Audited Reports</h2>
              <p className="mb-4">
                An audit of the Secretariat of CITES to assess the adequacy and effectiveness of the Secretariat's governance, risk management and control processes in providing reasonable assurance regarding the effective administrative management by UNEP of the CITES Secretariat, covering the period 2008-2010, was conducted during the period 29 April to 27 July 2011.
              </p>
              
              <h4 className="text-lg font-semibold mb-3">Relevant Documents</h4>
              <p className="mb-2">OIOS and BOA audit reports:</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-green-600 hover:text-green-800">
                    CITES audit report 2011/220/05 (OIOS)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-800">
                    CITES audit report 2021/051 (OIOS)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-800">
                    UNEP audit report (BOA)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Finance and Budget Sub-committee</h2>
              <p className="mb-4">
                The Finance and Budget Subcommittee (FSBC) assists the Standing Committee with the implementation of the Resolutions of the Conference of the Parties on financing and the costed programme of work for the Secretariat.
              </p>
              
              <h4 className="text-lg font-semibold mb-3">Relevant Documents</h4>
              <ul className="space-y-2 text-sm mb-6">
                <li>
                  <a href="#" className="text-green-600 hover:text-green-800">
                    Terms of Reference for FBSC
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-800">
                    Members of FBSC for the triennium 2020-2022
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-800">
                    CITES allocation and utilization of Programme Support Cost_UNEP
                  </a>
                </li>
              </ul>

              <h4 className="text-lg font-semibold mb-3">Quarterly report of FBSC for the triennium 2020-2022</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-green-600 hover:text-green-800">Report as of 31 March 2020</a></li>
                <li><a href="#" className="text-green-600 hover:text-green-800">Report as of 30 June 2020</a></li>
                <li><a href="#" className="text-green-600 hover:text-green-800">Report as of 30 September 2020</a></li>
                <li><a href="#" className="text-green-600 hover:text-green-800">Report as of 31 March 2021</a></li>
                <li><a href="#" className="text-green-600 hover:text-green-800">Report as of 30 June 2021</a></li>
                <li><a href="#" className="text-green-600 hover:text-green-800">Report as of 30 September 2021</a></li>
                <li><a href="#" className="text-green-600 hover:text-green-800">Report as of 30 June 2022</a></li>
                <li><a href="#" className="text-green-600 hover:text-green-800">Report as of 30 September 2022</a></li>
                <li><a href="#" className="text-green-600 hover:text-green-800">Report as of 30 September 2023</a></li>
                <li><a href="#" className="text-green-600 hover:text-green-800">Report as of 31 December 2023</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financing;
