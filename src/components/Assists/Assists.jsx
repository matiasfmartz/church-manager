import { Route, Routes } from "react-router-dom";
import AssistsTab from "./AssistsTab";
import MembersAssist from "./Members/MembersAssist"
import WorkersAssist from "./Workers/WorkersAssist"
import LeadersAssist from "./Leaders/LeadersAssist"

const Assists = () => {
    return (
        <>
            <div className="h-[13%]">
                <h1 className="text-2xl font-semibold text-neutral-700">Asistencias</h1>
                <AssistsTab />
            </div>
            <div className="h-[80%] relative shadow-xl sm:rounded-lg py-3 px-5 bg-white content-between">
                <div className="h-[100%]">
                    <Routes>
                        <Route path="/" element={<MembersAssist />}/>
                        <Route path="obreros" element={<WorkersAssist />}/>
                        <Route path="lideres" element={<LeadersAssist />}/>
                    </Routes>
                </div>
            </div>
            <div className="h-[7%] flex justify-end items-end">
                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="mx-3 inline-flex items-center text-white bg-blue-600 font-medium rounded-lg text-sm px-3 py-2.5 border border-blue-600 hover:bg-white hover:text-blue-600" type="button">
                    Tomar Asistencia
                </button>
                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="mx-3 inline-flex items-center text-white bg-blue-600 font-medium rounded-lg text-sm px-3 py-2.5 border border-blue-600 hover:bg-white hover:text-blue-600" type="button">
                    Agregar Reunion
                </button>
            </div>
        </>
    )
}

export default Assists;