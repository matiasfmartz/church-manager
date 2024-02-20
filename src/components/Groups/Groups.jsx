import { Route, Routes } from "react-router-dom";
import GroupsTab from "./GroupsTab";
import GDI from "./GDI/GDI";
import Areas from "./Areas/Areas";

const Groups = () => {
    return (
        <>
            <div className="h-[13%]">
                <h1 className="text-2xl font-semibold text-neutral-700">Grupos</h1>
                <GroupsTab />
            </div>
            <Routes>
                <Route path="/" element={<GDI />}/>
                <Route path="areas" element={<Areas />}/>
            </Routes>
        </>
    )
}

export default Groups;