import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PlanDetailsPlan = () => {
  const { id } = useParams();  // Get the plan ID from the URL
  const [planDetails, setPlanDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch plan details when the component is mounted
    const fetchPlanDetails = async () => {
      try {
        const response = await axios.get(`https://api.maizbaan.ai/api/v1/plans/plans/${id}`);
        if (response.data.message === 'Plan fetched successfully') {
          setPlanDetails(response.data.data);
        } else {
          setError('Failed to fetch plan details.');
        }
      } catch (error) {
        setError('An error occurred while fetching the plan details.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlanDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <section className="max-w-4xl mx-auto p-6 bg-transparent backdrop-blur-xl rounded-lg shadow-2xl mb-4">
      <h2 className="text-2xl font-semibold text-center mb-6 text-white">Plan Details</h2>

      {/* Plan Details */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-white">Plan Name</label>
        <p className="mt-1 text-lg text-gray-200">{planDetails.plan_name}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white">Plan Description</label>
        <p className="mt-1 text-lg text-gray-200">{planDetails.plan_description}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white">Plan Price</label>
        <p className="mt-1 text-lg text-gray-200">{planDetails.plan_price} USD</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white">Plan Duration</label>
        <p className="mt-1 text-lg text-gray-200">{planDetails.plan_duration} days</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white">Plan Type</label>
        <p className="mt-1 text-lg text-gray-200">{planDetails.plan_type}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white">Plan Status</label>
        <p className="mt-1 text-lg text-gray-200">{planDetails.plan_status}</p>
      </div>

      {/* Optionally, display benefits if available */}
      {planDetails.benefits && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Plan Benefits</label>
          <p className="mt-1 text-lg text-gray-200">{planDetails.benefits}</p>
        </div>
      )}

      {/* Back Button */}
      <div className="flex justify-start mt-6">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default PlanDetailsPlan;
