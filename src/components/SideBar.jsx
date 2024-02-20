import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBookBible, FaPeopleGroup, FaPeopleRoof, FaPersonCircleCheck, FaHandHoldingHeart, FaChurch } from "react-icons/fa6";

const SideBar = () => {

    const [open, setOpen] = useState(true);
    const location = useLocation();

    return (
        <div
        className={` ${
          open ? "w-60" : "w-20 "
        } bg-white h-screen p-5 border-neutral-300 pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-1 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <Link className="flex gap-x-4 items-center" to="/">
          <img
            src="./src/assets/mda.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-neutral-700 origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Church Manager
          </h1>
        </Link>
        <ul className="pt-6">
            <Link
              className={`flex rounded-md p-2 cursor-pointer hover:bg-blue-600 hover:text-white text-neutral-500 text-sm items-center gap-x-4 
                mt-9 ${location.pathname === '/' ?  'bg-blue-600 text-white' : ''}`} to="/">
              <FaChurch className="size-6"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Inicio
              </span>
            </Link>

            <Link
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-600 hover:text-white text-neutral-500 text-sm items-center gap-x-4 
                mt-2 ${location.pathname === '/miembros' || location.pathname.startsWith('/miembros') ?  'bg-blue-600 text-white' : ''}`} to="/miembros">
              <FaPeopleGroup className="size-6"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Miembros
              </span>
            </Link>

            <Link
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-600 hover:text-white text-neutral-500 text-sm items-center gap-x-4 
                mt-2 ${location.pathname === '/grupos' || location.pathname.startsWith('/grupos') ? 'bg-blue-600 text-white' : ''}`} to="/grupos">
              <FaPeopleRoof className="size-6"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Grupos
              </span>
            </Link>

            <Link
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-600 hover:text-white text-neutral-500 text-sm items-center gap-x-4 
                mt-2 ${location.pathname === '/asistencias' || location.pathname.startsWith('/asistencias') ?  'bg-blue-600 text-white' : ''}`} to="/asistencias">
              <FaPersonCircleCheck className="size-6"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Asistencias
              </span>
            </Link>

            <Link
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-600 hover:text-white text-neutral-500 text-sm items-center gap-x-4 
                mt-2 ${location.pathname === '/diezmos' || location.pathname.startsWith('/diezmos') ?  'bg-blue-600 text-white' : ''}`} to="/diezmos">
              <FaHandHoldingHeart className="size-6"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Diezmos
              </span>
            </Link>

            <Link
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-600 hover:text-white text-neutral-500 text-sm items-center gap-x-4 
                mt-9 ${location.pathname === '/escuela-de-vida' || location.pathname.startsWith('/escuela-de-vida') ?  'bg-blue-600 text-white' : ''}`} to="/escuela-de-vida">
              <FaBookBible className="size-6"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Escuela de Vida
              </span>
            </Link>
        </ul>
      </div>
    )
}

export default SideBar;