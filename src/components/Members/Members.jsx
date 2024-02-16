import Tab from "../Shared/Tab";
import Board from "../Shared/Board";
import { Route, Routes } from "react-router-dom";

const Members = () => {

    return (
        <>
            <div className="h-[15%]">
                <h1 className="text-2xl font-semibold text-neutral-700">Miembros</h1>
                <Tab />
            </div>
            <div className="h-[85%] relative shadow-xl sm:rounded-lg p-5 bg-white content-between">
                <Board />
                {/* <Routes>
                    <Route path="/miembros/todos" component={<Board />} />
                    <Route path="/miembros/activos" component={<Board />} />
                    <Route path="/miembros/nuevos" component={<Board />} />
                    <Route path="/miembros/inactivos" component={<Board />} />
                </Routes> */}
            </div>
        </>
    )
}

export default Members;
