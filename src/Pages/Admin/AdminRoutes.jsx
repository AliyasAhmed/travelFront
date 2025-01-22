import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AdminDashboardWrapper from './AdminDashboardWrapper';

import TravelAi from './TravelAi';
import Try from './Try';
import PlanDetails from './PlanDetails';
import PlanDetailsPlan from './PlanDetailsPlan';
import AgencyDetails from './AgencyDetails';
import AgencyDetailsAgency from './AgencyDetailsAgency';


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
        <Route path='/agencyDetails' element={<AgencyDetails />} />
        <Route path="/planDetailsPlan/:id" element={<PlanDetailsPlan />} />
        <Route path="/agencyDetailsAgency/:id" element={<AgencyDetailsAgency />} />
        <Route path='/try' element={<Try/>}/>

      </Route>
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
}

export default AdminRoutes;