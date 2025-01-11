import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AdminDashboardWrapper from './AdminDashboardWrapper';

import TravelAi from './TravelAi';
import Try from './Try';
import PlanDetails from './PlanDetails';


function AdminRoutes() {
  const token = localStorage.getItem('jwtToken');

  // if (!token) {
  //   return <Navigate to="/admin/login" replace />;
  // }

  return (
    <Routes>
      <Route path="/" element={<AdminDashboardWrapper />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="/dashboard" element={<Outlet />} />
        <Route path='/travelAi' element={<TravelAi />} />
        <Route path='/planDetails' element={<PlanDetails />} />
        <Route path='/try' element={<Try/>}/>

      </Route>
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
}

export default AdminRoutes;