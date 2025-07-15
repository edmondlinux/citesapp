
import React from 'react';

const PermitInfoSection = ({ formData, handleInputChange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        Permit Information
      </h2>

      <div className="grid md:grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Permit Type
          </label>
          <select
            name="permitType"
            value={formData.permitType}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="transportation">Transportation Permit</option>
            <option value="import">Import Permit</option>
            <option value="export">Export Permit</option>
            <option value="re-export">Re-export Permit</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PermitInfoSection;
