import { Routes, Route } from "react-router-dom";
import Tab from "./Tab";
import Table from "../Shared/Table";
import AllMembers from "./All/AllMembers";
import ActiveMembers from "./Active/ActiveMembers";
import NewMembers from "./New/NewMembers";
import InactiveMembers from "./Inactive/InactiveMembers";

const Members = () => {

    return (
        <>
            <div className="h-[13%]">
                <h1 className="text-2xl font-semibold text-neutral-700">Miembros</h1>
                <Tab />
            </div>
            <Routes>
                <Route path="/" element={<AllMembers />}/>
                <Route path="activos" element={<ActiveMembers />}/>
                <Route path="nuevos" element={<NewMembers />}/>
                <Route path="inactivos" element={<InactiveMembers />}/>
            </Routes>
        </>
    )
}

export default Members;