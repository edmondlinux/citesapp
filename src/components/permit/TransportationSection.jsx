
import React from 'react';

const TransportationSection = ({ formData, handleInputChange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        Transportation Details
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Transport Method
          </label>
          <select
            name="transportMethod"
            value={formData.transportMethod}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select Method</option>
            <option value="air">Air Transport</option>
            <option value="sea">Sea Transport</option>
            <option value="land">Land Transport</option>
            <option value="mail">Mail Transport</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Planned Transport Date
          </label>
          <input
            type="date"
            name="transportDate"
            value={formData.transportDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Origin Address
          </label>
          <textarea
            name="originAddress"
            value={formData.originAddress}
            onChange={handleInputChange}
            rows="2"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Destination Address
          </label>
          <textarea
            name="destinationAddress"
            value={formData.destinationAddress}
            onChange={handleInputChange}
            rows="2"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Expected Transport Date
          </label>
          <input
            type="date"
            name="expectedShipmentDate"
            value={formData.expectedShipmentDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Port of Entry
          </label>
          <input
            type="text"
            name="portOfEntry"
            value={formData.portOfEntry}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default TransportationSection;
