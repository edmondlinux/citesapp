
import React from 'react';

const SpeciesInfoSection = ({ formData, handleInputChange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        Species Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Species Common Name
          </label>
          <input
            type="text"
            name="commonName"
            value={formData.commonName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Scientific Name
          </label>
          <input
            type="text"
            name="scientificName"
            value={formData.scientificName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            CITES Appendix
          </label>
          <select
            name="citesAppendix"
            value={formData.citesAppendix}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select Appendix</option>
            <option value="I">Appendix I</option>
            <option value="II">Appendix II</option>
            <option value="III">Appendix III</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Purpose
          </label>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select Purpose</option>
            <option value="commercial research">Commercial Research</option>
            <option value="scientific research">Scientific Research</option>
            <option value="educational">Educational</option>
            <option value="breeding in captivity">Breeding in Captivity</option>
            <option value="personal">Personal</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Source Status
          </label>
          <select
            name="sourceCode"
            value={formData.sourceCode}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select Source</option>
            <option value="WC">Wild (WC)</option>
            <option value="CB">Captive-bred (C)</option>
            <option value="R">Ranched (R)</option>
            <option value="O">Pre-Convention (O)</option>
            <option value="I">Confiscated (I)</option>
            <option value="U">Unknown (U)</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description of Specimens
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default SpeciesInfoSection;
