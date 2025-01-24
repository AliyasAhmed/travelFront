import React, { useContext } from 'react';
import { Settings, User, Crown, Search, LogOut } from 'lucide-react';
import Logout from './Logout';
import { AppContext } from '../context/AppContext';

const UserProfileDetails = () => {
      const { signedIn, user, setSignedIn, setUser ,showProfile, setShowProfile,userName,userId, userNumber} = useContext(AppContext);
  
  return (
    <div className="bg-[#2A2B32] rounded-lg shadow-lg w-[240px] py-2 text-sm text-gray-200">
      {/* User Info Section */}
      <div className="px-4 py-2 border-b border-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
            AI
          </div>
          <div className="flex-1">
            <p className="font-semibold">{userName}</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-2">
        <button className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-700">
          <User size={16} />
          <span>{userName}</span>
        </button>

        <button className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-700">
          <Settings size={16} />
          User ID:<span>{userId}</span>
        </button>

        <button className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-700">
          <Settings size={16} />
          User Number:<span>{userNumber}</span>
        </button>

        {/* <button className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-700">
          <Crown size={16} />
          <span>Upgrade Plan</span>
        </button>

        <button className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-700">
          <Search size={16} />
          <span>Get ChatGPT search extension</span>
        </button> */}

        <div className="border-t border-gray-600 mt-2"></div>

        <button className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-700">
          <LogOut size={16} />
          <Logout/>
        </button>
      </div>
    </div>
  );
};

export default UserProfileDetails;