import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const AgentDetails = () => {
  const [agentData, setAgentData] = useState({ name: "", email: "", phonenumber: "" });
  const [loading, setLoading] = useState(false);
  const [agencies, setAgencies] = useState([]);
  const [selectedAgency, setSelectedAgency] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [existingAgents, setExistingAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/users/agencies");
        setAgencies(response.data);
      } catch (err) {
        toast.error("Failed to fetch agency data!");
      }
    };
    fetchAgencies();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (selectedAgency) {
      navigate("/userConvo");
    } else {
      try {
        await axios.post("http://127.0.0.1:8000/api/v1/users/agencies", agentData);
        toast.success("Agent details submitted successfully!");
        setTimeout(() => navigate("/userConvo"), 2000);
      } catch (err) {
        toast.error(err.response?.data?.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSelectAgent = () => {
    if (selectedAgency) {
      // Set selected agent based on the selected agency or another condition.
      setSelectedAgent(selectedAgency);  // This updates selectedAgent when an agency is chosen.
      navigate("/userConvo");
    } else {
      toast.error("Please select an agent");
    }
  };
  

  return (
    <>
      <ToastContainer />
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#06090f] p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-white text-center">Select Your Profile</h2>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search by agency name"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
                value={selectedAgency}
                onChange={(e) => setSelectedAgency(e.target.value)}
              >
                <option value="">Select Your Agency</option>
                {agencies
                  .filter((agency) =>
                    agency.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((agency) => (
                    <option key={agency.id} value={agency.id}>
                      {agency.name}
                    </option>
                  ))}
              </select>
            </div>
            <button
              className="w-full bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-gray-900 py-2 rounded-lg font-semibold mt-4"
              onClick={handleSelectAgent}
            >
              Continue
            </button>
            <button
              className="w-full mt-2 text-white bg-gray-700 py-2 rounded-lg font-semibold"
              onClick={() => setShowPopup(false)}
            >
              Add New Agent
            </button>
          </div>
        </div>
      )}
      {!showPopup && (
        <section className="p-5 flex items-center justify-center text-white min-h-screen">
          <div className="max-w-lg w-full bg-[#06090f] rounded-xl shadow-lg p-8 my-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Agent Details</h2>
              <p className="text-gray-400 mt-2">Please provide your details</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Search by agency name"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg mb-4"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                  name="agency"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg"
                  onChange={(e) => setSelectedAgency(e.target.value)}
                  value={selectedAgency}
                >
                  <option value="">Select Your Agency</option>
                  {agencies
                    .filter((agency) =>
                      agency.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((agency) => (
                      <option key={agency.id} value={agency.id}>
                        {agency.name}
                      </option>
                    ))}
                </select>
                <input
                  type="text"
                  name="name"
                  placeholder="User Name"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg"
                  value={agentData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg"
                  value={agentData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Phone number"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg"
                  value={agentData.phonenumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-gray-900 py-2 rounded-lg font-semibold hover:shadow-lg transition"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Continue"}
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default AgentDetails;