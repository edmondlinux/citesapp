import React from 'react';

const DocumentsSection = ({ formData, handleFileChange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        Supporting Documents
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Upload Supporting Documents
          </label>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Please upload multiple supporting documents such as breeding certificates, purchase receipts, veterinary health certificates, or images.
          </p>
          <input
            type="file"
            name="documents"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.txt"
            multiple
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Supported formats: PDF, DOC, DOCX, JPG, JPEG, PNG, GIF, TXT (Max 10MB per file)
          </p>
          {formData.documents && formData.documents.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-2">
                Selected files ({formData.documents.length}):
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                {Array.from(formData.documents).map((file, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentsSection;