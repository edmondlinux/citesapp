
import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';

const HowCitesWorks = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About CITES', href: '#' },
    { label: 'How CITES works?', href: '/disc/how' }
  ];

  return (
    <div>
      <div className="container-big py-6">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-8">How CITES works</h1>
        
        <div className="prose max-w-none">
          <p>
            CITES works by subjecting international trade in specimens of selected species to certain controls. All import, export, re-export and introduction from the sea of species covered by the Convention has to be authorized through a licensing system. Each Party to the Convention must designate one or more Management Authorities in charge of administering that licensing system and one or more Scientific Authorities to advise them on the effects of trade on the status of the species.
          </p>

          <p>
            The species covered by CITES are listed in <a href="#" className="text-green-600 hover:text-green-800">three Appendices</a>, according to the degree of protection they need.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Appendices I and II</h2>
          
          <p>
            <strong>Appendix I</strong> includes species threatened with extinction. Trade in specimens of these species is permitted only in exceptional circumstances.
          </p>

          <p>
            <strong>Appendix II</strong> includes species not necessarily threatened with extinction, but in which trade must be controlled in order to avoid utilization incompatible with their survival.
          </p>

          <p>
            The Conference of the Parties (CoP), which is the supreme decision-making body of the Convention and comprises all its Parties, has agreed in Resolution Conf. 9.24 (Rev. CoP17) on a set of biological and trade criteria to help determine whether a species should be included in Appendices I or II. At each regular meeting of the CoP, Parties submit proposals based on those criteria to amend these two Appendices. Those amendment proposals are discussed and then submitted to a vote. The Convention also allows for amendments by a postal procedure between meetings of the CoP (see Article XV, paragraph 2, of the Convention), but this procedure is rarely used.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Appendix III</h3>
          
          <p>
            This Appendix contains species that are protected in at least one country, which has asked other CITES Parties for assistance in controlling the trade. Changes to Appendix III follow a distinct procedure from changes to Appendices I and II, as each Party's is entitled to make unilateral amendments to it.
          </p>

          <p>
            A specimen of a CITES-listed species may be imported into or exported (or re-exported) from a State party to the Convention only if the appropriate document has been obtained and presented for clearance at the port of entry or exit. There is some variation of the requirements from one country to another and it is always necessary to check on the national laws that may be stricter, but the basic conditions that apply for Appendices I and II are described below.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Appendix-I specimens</h3>
          
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              An import permit issued by the Management Authority of the State of import is required. This may be issued only if the specimen is not to be used for primarily commercial purposes and if the import will be for purposes that are not detrimental to the survival of the species. In the case of a live animal or plant, the Scientific Authority must be satisfied that the proposed recipient is suitably equipped to house and care for it.
            </li>
            <li>
              <p>An export permit or re-export certificate issued by the Management Authority of the State of export or re-export is also required.</p>
              <p>An export permit may be issued only if the specimen was legally obtained; the trade will not be detrimental to the survival of the species; and an import permit has already been issued.</p>
              <p>A re-export certificate may be issued only if the specimen was imported in accordance with the provisions of the Convention and, in the case of a live animal or plant, if an import permit has been issued.</p>
              <p>In the case of a live animal or plant, it must be prepared and shipped to minimize any risk of injury, damage to health or cruel treatment.</p>
            </li>
          </ol>

          <h3 className="text-xl font-bold mt-6 mb-3">Appendix-II specimens</h3>
          
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <p>An export permit or re-export certificate issued by the Management Authority of the State of export or re-export is required.</p>
              <p>An export permit may be issued only if the specimen was legally obtained and if the export will not be detrimental to the survival of the species.</p>
              <p>A re-export certificate may be issued only if the specimen was imported in accordance with the Convention.</p>
            </li>
            <li>In the case of a live animal or plant, it must be prepared and shipped to minimize any risk of injury, damage to health or cruel treatment.</li>
            <li>No import permit is needed unless required by national law.</li>
          </ol>

          <h3 className="text-xl font-bold mt-6 mb-3">Appendix-III specimens</h3>
          
          <ol className="list-decimal pl-6 space-y-4">
            <li>In the case of trade from a State that included the species in Appendix III, an export permit issued by the Management Authority of that State is required. This may be issued only if the specimen was legally obtained and, in the case of a live animal or plant, if it will be prepared and shipped to minimize any risk of injury, damage to health or cruel treatment.</li>
            <li>In the case of export from any other State, a certificate of origin issued by its Management Authority is required.</li>
            <li>In the case of re-export, a re-export certificate issued by the State of re-export is required</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Exemptions and special procedures</h2>
          
          <p>
            In its Article VII, the Convention allows or requires Parties to make certain exceptions to the general principles described above, notably in the following cases:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>for specimens in transit or being transhipped;</li>
            <li>for specimens that were acquired before CITES provisions applied to them (known as pre-Convention specimens);</li>
            <li>for specimens that are personal or household effects;</li>
            <li>for animals that were 'bred in captivity';</li>
            <li>for plants that were 'artificially propagated';</li>
            <li>for specimens that are destined for scientific research;</li>
            <li>for animals or plants forming part of a travelling collection or exhibition, such as a circus.</li>
          </ul>

          <p>
            There are special rules in these cases and a permit or certificate will generally still be required. Anyone planning to import or export/re-export specimens of a CITES species should contact the national CITES Management Authorities of the countries of import and export/re-export for information on the rules that apply.
          </p>

          <p>
            When a specimen of a CITES-listed species is transferred between a country that is a Party to CITES and a country that is not, the country that is a Party may accept documentation equivalent to the permits and certificates described above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowCitesWorks;
