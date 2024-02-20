import SideBar from "./components/SideBar"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Members from "./components/Members/Members"
import Groups from "./components/Groups/Groups"
import Assists from "./components/Assists/Assists"
import Tithes from "./components/Tithes/Tithes"
import School from "./components/School/School"

const App = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 p-6 bg-slate-100 h-screen">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Members />} path="/miembros/*" />
          <Route element={<Groups />} path="/grupos" />
          <Route element={<Assists />} path="/asistencias" />
          <Route element={<Tithes />} path="/diezmos" />
          <Route element={<School />} path="/escuela-de-vida" />
        </Routes>
      </div>
    </div>
  );
};
export default App;