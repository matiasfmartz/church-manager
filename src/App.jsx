import SideBar from "./components/SideBar"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Members from "./components/Members/Members"
import Groups from "./components/Groups/Groups"
import Assists from "./components/Assists/Assists"
import Tithes from "./components/Tithes/Tithes"

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="h-screen flex-1 p-7 bg-slate-50">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Members />} path="/miembros" />
          <Route element={<Groups />} path="/grupos" />
          <Route element={<Assists />} path="/asistencias" />
          <Route element={<Tithes />} path="/diezmos" />
        </Routes>
      </div>
    </div>
  );
};
export default App;