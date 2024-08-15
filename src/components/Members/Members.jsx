import React from 'react';
import { Routes, Route } from "react-router-dom";
import MembersTab from "./MembersTab";
import AllMembers from "./All/AllMembers";
import ActiveMembers from "./Active/ActiveMembers";
import NewMembers from "./New/NewMembers";
import InactiveMembers from "./Inactive/InactiveMembers";
import AddMembers from "./AddMembers/AddMembers";
import MembersFilters from "./MembersFilters";

const Members = () => {

    return (
        <>
            {/* <div className="h-[13%]">
                <h1 className="text-2xl font-semibold text-neutral-700">Miembros</h1>
                <MembersTab />
            </div>
            <Routes>
                <Route path="/" element={<AllMembers />}/>
                <Route path="activos" element={<ActiveMembers />}/>
                <Route path="nuevos" element={<NewMembers />}/>
                <Route path="inactivos" element={<InactiveMembers />}/>
                <Route path="agregar-miembros" element={<AddMembers />}/>
            </Routes> */}
            <h1 className="mb-3 text-2xl font-semibold text-neutral-700">Miembros</h1>
            <Routes>
                <Route path="/*" element={<MembersFilters />}/>
                <Route path="agregar-miembros" element={<AddMembers />}/>
            </Routes>
        </>
    )
}

export default Members;