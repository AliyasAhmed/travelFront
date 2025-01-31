import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BookOpenText, Edit2, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AgencyDetails = () => {
    const [agencies, setAgencies] = useState([]);
    const [newAgencies, setNewAgencies] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');
    
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        agency_name: '',
        agency_email: '',
        agency_phoneNumber: '',
        id: ''
    });

    const navigate = useNavigate();

    // Fetch Agencies
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.warn('No auth token found in localStorage');
            return;
        }

        setToken(token);
        fetchAgencies();
    }, []);

    const fetchAgencies = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://api.maizbaan.ai/api/v1/users/agencies');
            console.log("newAgencies" ,response)

            setAgencies(Array.isArray(response.data) ? response.data: []); // Ensure agencies is always an array
            setNewAgencies(response.data.data)
        } catch (error) {
            console.error('Error fetching agencies:', error);
            setError('Error fetching agencies.');
        } finally {
            setLoading(false);
        }
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { agency_name, agency_email, agency_phoneNumber } = formData;

        if (!agency_name || !agency_email || !agency_phoneNumber) {
            alert('Please fill in all fields.');
            return;
        }

        setLoading(true);

        try {
            if (isEditing) {
                // Update existing agency
                const response = await axios.put(
                    `https://api.maizbaan.ai/api/v1/users/agencies/${formData.id}`,
                    { name: agency_name, email: agency_email, phonenumber: agency_phoneNumber },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token.trim()}`,
                        },
                    }
                );
                alert(response.data.message || 'Agency updated successfully!');
            } else {
                // Create new agency
                const response = await axios.post(
                    'https://api.maizbaan.ai/api/v1/users/agencies',
                    { name: agency_name, email: agency_email, phonenumber: agency_phoneNumber },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token.trim()}`,
                        },
                    }
                );
                alert(response.data.message || 'Agency added successfully!');
            }
            fetchAgencies(); // Refresh the agency list after creation or update
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
            setFormData({ agency_name: '', agency_email: '', agency_phoneNumber: '', id: null });
            setIsEditing(false);
        }
    };


    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this agency?')) {
            setLoading(true);
            try {
                await axios.delete(`https://api.maizbaan.ai/api/v1/users/agencies/${id}`);
                alert('Agency deleted successfully!');
                fetchAgencies();
            } catch (error) {
                console.error('Error deleting agency:', error);
                setError('An error occurred while deleting the agency.');
            } finally {
                setLoading(false);
            }
        }
    };

    // Handle plan view
    const handleView = (id) => {
        navigate(`/admin/agencyDetailsAgency/${id}`);
        // console.log(`View plan with ID: ${id}`);
    };
    // console.log("my agencies", agencies)

    return (
        <>
            {loading && <div className="text-center text-white">Loading...</div>}

            <section className="max-w-4xl mx-auto p-6 bg-transparent backdrop-blur-xl rounded-lg shadow-2xl mb-4">
                <h2 className="text-2xl font-semibold text-center mb-6 text-white">
                    {isEditing ? 'Edit Agency' : 'Add Agency'}
                </h2>
                {error && <div className="text-red-500 text-center">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="agency_name" className="block text-sm font-medium text-white">
                            Agency Name
                        </label>
                        <input
                            type="text"
                            name="agency_name"
                            id="agency_name"
                            value={formData.agency_name}
                            onChange={handleInputChange}
                            placeholder="Enter Agency name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="agency_email" className="block text-sm font-medium text-white">
                            Agency Email
                        </label>
                        <input
                            type="email"
                            name="agency_email"
                            id="agency_email"
                            value={formData.agency_email}
                            onChange={handleInputChange}
                            placeholder="Enter agency email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="agency_phoneNumber" className="block text-sm font-medium text-white">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name="agency_phoneNumber"
                            id="agency_phoneNumber"
                            value={formData.agency_phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Enter phone number"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                        {isEditing ? 'Update Agency' : 'Save Agency'}
                    </button>
                </form>
            </section>

            <section className="max-w-4xl mx-auto p-6 bg-transparent backdrop-blur-xl rounded-lg shadow-2xl mt-4">
                <h2 className="text-2xl font-semibold text-center mb-6 text-white">Existing Agencies</h2>
                <ul className="divide-y divide-gray-200">
                    {agencies.map((agency) => (
                        <li key={agency.id} className="py-4 flex justify-between items-center">
                            <span className="text-lg text-white">{agency.name}</span>
                            <div>
                                {/* <button
                                    onClick={() => handleEdit(agency)}
                                    className="bg-yellow-500 text-white rounded-md p-2 mr-2"
                                >
                                    <Edit2 size={18} />
                                </button> */}
                                <button onClick={() => handleView(agency.id)} className="bg-blue text-white rounded-md p-2 mr-2 hover:bg-yellow-900 transition duration-300">
                                    <BookOpenText size={18} />
                                </button>
                                <button
                                    onClick={() => handleDelete(agency.id)}
                                    className="bg-red-500 text-white rounded-md p-2"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default AgencyDetails;
