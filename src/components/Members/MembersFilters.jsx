import React from 'react'
import { Routes, Route } from "react-router-dom";
import AllMembers from './All/AllMembers';
import ActiveMembers from './Active/ActiveMembers';
import NewMembers from './New/NewMembers';
import InactiveMembers from './Inactive/InactiveMembers';
import AddMembers from './AddMembers/AddMembers';
import MembersTab from './MembersTab';

const MembersFilters = () => {

  return (
    <>
        <MembersTab />
        <Routes>
            <Route path="/" element={<AllMembers />}/>
            <Route path="/activos" element={<ActiveMembers />}/>
            <Route path="/nuevos" element={<NewMembers />}/>
            <Route path="/inactivos" element={<InactiveMembers />}/>
        </Routes>
    </>
  )
}

export default MembersFilters;