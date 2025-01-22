import React from 'react'
import SideBar from '../../components/SideBar'
import Main from '../../components/Main'

const UserConvo = () => {
  return (
    <div className="flex animate-fadeIn duration-1000 flex-col lg:flex-row">
      {/* Sidebar */}
      <SideBar className="w-full lg:w-1/4" />
      
      {/* Main content */}
      <Main className="w-full lg:w-3/4" />
    </div>
  )
}

export default UserConvo
