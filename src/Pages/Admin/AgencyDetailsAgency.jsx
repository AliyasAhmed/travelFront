import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AgencyDetailsAgency = () => {
  const { id } = useParams();  // Get the plan ID from the URL
  const [agencyDetails, setagencyDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch plan details when the component is mounted
    const fetchagencyDetails = async () => {
      try {
        const response = await axios.get(`https://api.maizbaan.ai/api/v1/users/agencies/${id}`);
        // console.log(response.data.message)
        if (response.data.message === 'Agency fetched successfully') {
          setagencyDetails(response.data.data.data);
          console.log(response.data.data.data)
        } else {
          setError('Failed to fetch Agency details.');
        }
      } catch (error) {
        setError('An error occurred while fetching the agency details.');
      } finally {
        setLoading(false);
      }
    };

    fetchagencyDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <section className="max-w-4xl mx-auto p-6 bg-transparent backdrop-blur-xl rounded-lg shadow-2xl mb-4">
      <h2 className="text-2xl font-semibold text-center mb-6 text-white">Agency Details</h2>

      {/* Agency Details */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-white">Agency Name</label>
        <p className="mt-1 text-lg text-gray-200">{agencyDetails.name}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white">Agency Email</label>
        <p className="mt-1 text-lg text-gray-200">{agencyDetails.email}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white">Agency Id</label>
        <p className="mt-1 text-lg text-gray-200">{agencyDetails.id} </p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white">destination id</label>
        <p className="mt-1 text-lg text-gray-200">{agencyDetails.destination_id} </p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white">Itenary id</label>
        <p className="mt-1 text-lg text-gray-200">{agencyDetails.itinerary_id}</p>
      </div>

      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-white">Plan Status</label>
        <p className="mt-1 text-lg text-gray-200">{agencyDetails.plan_status}</p>
      </div> */}

      {/* Optionally, display benefits if available */}
      {agencyDetails.benefits && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Plan Benefits</label>
          <p className="mt-1 text-lg text-gray-200">{agencyDetails.benefits}</p>
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

export default AgencyDetailsAgency;
