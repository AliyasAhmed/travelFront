import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PlusCircle, Edit2, Trash2, BookOpenText } from 'lucide-react';

const PlanDetails =  () => {
    const [plans, setPlans] = useState()

    //handleSubmit
    const handleSubmit=(e)=>{
        e.preventDefault()
        try {
            
        } catch (error) {
            
        }
    }


    // Fetch data using useEffect
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/plans/plans');
        setPlans(response.data.data);  // Store the data in state
        // setLoading(false);  // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching plans:', error);
        setLoading(false);  // Set loading to false even if there is an error
      }
    };

    fetchPlans();
  }, []); // Empty dependency array to run only once after the initial render

  console.log("plans", plans)

  return (
    <>
        <section className="max-w-4xl mx-auto p-6 bg-transparent backdrop-blur-xl rounded-lg  shadow-2xl mb-4">
      <h2 className="text-2xl font-semibold text-center mb-6 text-white ">Plan Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Plan Name */}
        <div className="mb-4">
          <label htmlFor="PlanName" className="block text-sm font-medium text-white">Plan Name</label>
          <input
            type="text"
            name="PlanName"
            id="PlanName"
            placeholder="Enter plan name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Plan Description */}
        <div className="mb-4">
          <label htmlFor="PlanDescription" className="block text-sm font-medium text-white">Plan Description</label>
          <input
            type="text"
            name="PlanDescription"
            id="PlanDescription"
            placeholder="Enter plan description"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Plan Price */}
        <div className="mb-4">
          <label htmlFor="plan_price" className="block text-sm font-medium text-white">Plan Price</label>
          <input
            type="text"
            name="plan_price"
            id="plan_price"
            placeholder="Enter plan price"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Plan Duration */}
        <div className="mb-4">
          <label htmlFor="plan_duration" className="block text-sm font-medium text-white">Plan Duration</label>
          <input
            type="text"
            name="plan_duration"
            id="plan_duration"
            placeholder="Enter plan duration"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Plan Type (Dropdown) */}
        <div className="mb-4">
          <label htmlFor="plan_type" className="block text-sm font-medium text-white">Plan Type</label>
          <select
            name="plan_type"
            id="plan_type"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>Select Plan Type</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="lifetime">Lifetime</option>
          </select>
        </div>

        {/* Plan Status (Dropdown) */}
        <div className="mb-4">
          <label htmlFor="plan_status" className="block text-sm font-medium text-white">Plan Status</label>
          <select
            name="plan_status"
            id="plan_status"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>Select Plan Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        {/* User ID (Dropdown) */}
        <div className="mb-4">
          <label htmlFor="user_id" className="block text-sm font-medium text-white">User ID</label>
          <select
            name="user_id"
            id="user_id"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>Select User</option>
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
            <option value="user3">User 3</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Plan
          </button>
        </div>
      </form>
    </section>

    {/* another section */}
    <section className="max-w-4xl mx-auto p-6 bg-transparent backdrop-blur-xl rounded-lg shadow-2xl mt-4">
  <div className="border border-gray-300 p-6 rounded-lg bg-opacity-50">
    <h2 className="text-2xl font-semibold text-center mb-6 text-white">Existing Plans</h2>

    {/* Displaying Plan Information */}
    {/* <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Existing Villas</h3> */}
      <ul className="divide-y divide-gray-200">
        {plans?.map((v,i)=><li key={i} className="py-4 flex justify-between items-center">
            <span className="text-lg text-gray-200">{v.id}        {v.plan_name}</span>
            <div>
              
              <button onClick='' className="bg-blue text-white rounded-md p-2 mr-2 hover:bg-yellow-900  transition duration-300">
              <BookOpenText size={18}/>
              </button>
              <button onClick='' className="bg-yellow-500 text-white rounded-md p-2 mr-2 hover:bg-yellow-600 transition duration-300">
                <Edit2 size={18} />
              </button>
              <button onClick='' className="bg-red-500 text-white rounded-md p-2 hover:bg-red-600 transition duration-300">
                <Trash2 size={18} />
              </button>

            </div>
          </li>)}
          
        
      </ul>
  </div>
</section>

    </>
    

    
  );
};

export default PlanDetails;
