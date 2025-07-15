import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import ApplicantInfoSection from '../components/permit/ApplicantInfoSection';
import PermitInfoSection from '../components/permit/PermitInfoSection';
import SpeciesInfoSection from '../components/permit/SpeciesInfoSection';
import SourceInfoSection from '../components/permit/SourceInfoSection';
import TransportationSection from '../components/permit/TransportationSection';
import DocumentsSection from '../components/permit/DocumentsSection';

const PermitApplication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState('');
  const [successData, setSuccessData] = useState(null);
  const [redirectCountdown, setRedirectCountdown] = useState(null);

  const [formData, setFormData] = useState({
    // Applicant info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',

    // Permit info
    permitType: 'transportation',

    // Species info
    commonName: '',
    scientificName: '',
    citesAppendix: '',
    quantity: '',
    purpose: '',
    sourceCode: '',
    description: '',

    // Source info
    sourceType: '',
    acquisitionDate: '',
    sourceDetails: '',

    // Transportation info
    transportMethod: '',
    transportDate: '',
    originAddress: '',
    destinationAddress: '',
    expectedShipmentDate: '',
    portOfEntry: '',

    // Documents
    documents: []
  });

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Apply for CITES Permit', href: '/apply-permit' }
  ];

  // Auto-redirect countdown effect
  useEffect(() => {
    if (submitStatus === 'success' && successData) {
      setRedirectCountdown(10);
      
      const countdown = setInterval(() => {
        setRedirectCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdown);
            window.location.href = `/payment?application=${successData.applicationNumber}`;
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [submitStatus, successData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset previous status
    setSubmitStatus(null);
    setErrorMessage('');
    setIsSubmitting(true);
    
    try {
      // Create FormData for file upload
      const submitData = new FormData();
      
      // Add all form fields to FormData
      Object.keys(formData).forEach(key => {
        if (key === 'documents' && formData[key] && formData[key].length > 0) {
          // Add multiple files
          Array.from(formData[key]).forEach((file, index) => {
            submitData.append('documents', file);
          });
        } else if (formData[key] !== null && formData[key] !== '' && key !== 'documents') {
          submitData.append(key, formData[key]);
        }
      });

      console.log('Submitting application...');
      
      const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const apiUrl = `${baseUrl}/api/permits/apply`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setSuccessData(result.data);
        
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          organization: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          country: '',
          permitType: 'transportation',
          commonName: '',
          scientificName: '',
          citesAppendix: '',
          quantity: '',
          purpose: '',
          sourceCode: '',
          description: '',
          sourceType: '',
          acquisitionDate: '',
          sourceDetails: '',
          transportMethod: '',
          transportDate: '',
          originAddress: '',
          destinationAddress: '',
          expectedShipmentDate: '',
          portOfEntry: '',
          documents: []
        });
        
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Application submission failed. Please check your information and try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container-big py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Apply for CITES Transportation Permit
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Complete this form to apply for a CITES permit for transporting protected species.
            </p>
          </header>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-green-800 dark:text-green-200">
                    Application Submitted Successfully!
                  </h3>
                  <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                    <p className="mb-2">
                      Your CITES permit application has been received and is being processed.
                    </p>
                    {successData && (
                      <div className="bg-white dark:bg-gray-800 p-4 rounded border mb-4">
                        <p><strong>Application Number:</strong> {successData.applicationNumber}</p>
                        <p><strong>Status:</strong> {successData.status}</p>
                        <p><strong>Submitted:</strong> {new Date(successData.submittedAt).toLocaleString()}</p>
                        <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                          Please save your application number for future reference. You will receive email updates on your application status.
                        </p>
                      </div>
                    )}
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-4 mt-4">
                      <p className="text-blue-800 dark:text-blue-200 font-medium mb-2">
                        <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Payment Required
                      </p>
                      <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
                        To complete your CITES permit application, a processing fee of <strong>$200.00</strong> is required. 
                        {redirectCountdown > 0 ? (
                          <span className="block mt-2 font-medium">
                            Redirecting to payment portal in <span className="text-blue-800 dark:text-blue-200 font-bold">{redirectCountdown}</span> seconds...
                          </span>
                        ) : (
                          "You will now be redirected to our secure payment portal to complete the transaction."
                        )}
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => {
                            window.location.href = `/payment?application=${successData?.applicationNumber || 'temp'}`;
                          }}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                          Proceed to Payment Now
                        </button>
                        {redirectCountdown > 0 && (
                          <button
                            onClick={() => {
                              setRedirectCountdown(null);
                              setSubmitStatus(null);
                            }}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                          >
                            Cancel Auto-Redirect
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-red-800 dark:text-red-200">
                    Application Submission Failed
                  </h3>
                  <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                    <p>{errorMessage}</p>
                    <p className="mt-2">Please review your information and try submitting again.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <ApplicantInfoSection 
                formData={formData} 
                handleInputChange={handleInputChange} 
              />
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <PermitInfoSection 
                formData={formData} 
                handleInputChange={handleInputChange} 
              />
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <SpeciesInfoSection 
                formData={formData} 
                handleInputChange={handleInputChange} 
              />
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <SourceInfoSection 
                formData={formData} 
                handleInputChange={handleInputChange} 
              />
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <TransportationSection 
                formData={formData} 
                handleInputChange={handleInputChange} 
              />
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <DocumentsSection 
                formData={formData} 
                handleFileChange={handleFileChange} 
              />
            </div>

            <div className="flex justify-end pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Application...
                  </div>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PermitApplication;