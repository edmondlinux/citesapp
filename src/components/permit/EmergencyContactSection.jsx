
import React from 'react';

const EmergencyContactSection = ({ formData, errors, handleInputChange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        Emergency Contact & Additional Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Emergency Contact Name
          </label>
          <input
            type="text"
            name="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Emergency Contact Phone
          </label>
          <input
            type="tel"
            name="emergencyContactPhone"
            value={formData.emergencyContactPhone}
            onChange={handleInputChange}
            pattern="[\\+\\-\\s\\(\\)\\d]+"
            minLength="10"
            maxLength="20"
            placeholder="e.g. +1-234-567-8901 or 1234567890"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Additional Information
          </label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows="4"
            placeholder="Any additional information relevant to your permit application"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default EmergencyContactSection;
