

import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'
import LeftNav from './LeftNav'

function AdminDashboardWrapper() {
  const [isNavVisible, setIsNavVisible] = useState(false)

  return (
    <div className='pt-16'>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsNavVisible(!isNavVisible)}
        className="fixed top-9 left-1/3 z-50 lg:hidden bg-gray-800 p-2 rounded-lg shadow-md"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isNavVisible ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>

      <div className='grid grid-cols-1 lg:grid-cols-4'>
        {/* Left Navigation */}
        <div className={`
          fixed lg:relative
          inset-0 lg:inset-auto
        
          z-40 lg:z-auto
          transform transition-transform duration-300 ease-in-out
          ${isNavVisible ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0
        `}>
          <div className="h-full pt-16 lg:pt-0">
            <LeftNav setIsNavVisible={setIsNavVisible}/>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-1 lg:col-span-3">
          <Outlet />
        </div>

        {/* Overlay for mobile */}
        {isNavVisible && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsNavVisible(false)}
          />
        )}
      </div>
    </div>
  )
}

export default AdminDashboardWrapper