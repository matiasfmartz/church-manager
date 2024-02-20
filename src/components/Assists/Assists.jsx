import { Route, Routes } from "react-router-dom";
import AssistsTab from "./AssistsTab";
import MembersAssist from "./Members/MembersAssist"
import WorkersAssist from "./Workers/WorkersAssist"
import LeadersAssist from "./Leaders/LeadersAssist"

const Assists = () => {
    return (
        <>
            <div className="h-[13%]">
                <h1 className="text-2xl font-semibold text-neutral-700">Grupos</h1>
                <AssistsTab />
            </div>
            <Routes>
                <Route path="/" element={<MembersAssist />}/>
                <Route path="obreros" element={<WorkersAssist />}/>
                <Route path="lideres" element={<LeadersAssist />}/>
            </Routes>
        </>
    )
}

export default Assists;