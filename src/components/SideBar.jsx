import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPeopleGroup, FaPeopleRoof, FaPersonCircleCheck, FaHandHoldingHeart, FaChurch } from "react-icons/fa6";

const SideBar = () => {

    const [open, setOpen] = useState(true);

    return (
        <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
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
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Church Manager
          </h1>
        </Link>
        <ul className="pt-6">
            <Link
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                mt-9" to="/"
            >
              <FaChurch className="size-6"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Inicio
              </span>
            </Link>

            <Link
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                mt-2" to="/miembros"
            >
              <FaPeopleGroup className="size-6"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Miembros
              </span>
            </Link>

            <Link
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                mt-2" to="/grupos"
            >
              <FaPeopleRoof className="size-6"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Grupos
              </span>
            </Link>

            <Link
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                mt-2" to="/asistencias"
            >
              <FaPersonCircleCheck className="size-6"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Asistencias
              </span>
            </Link>

            <Link
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                mt-2" to="/diezmos"
            >
              <FaHandHoldingHeart className="size-6"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Diezmos
              </span>
            </Link>
        </ul>
      </div>
    )
}

export default SideBar;