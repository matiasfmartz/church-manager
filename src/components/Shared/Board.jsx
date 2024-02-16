import { FaUser } from "react-icons/fa6";
import { FaUserEdit, FaMinusCircle, FaPollH  } from "react-icons/fa";

const Board = () => {

    let srcImg = null;
    let arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

    return (
        <>
            <div className="h-[10%] flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 pb-4 bg-white">
                <label for="table-search" className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-black-100 border border-gray-300 rounded-lg w-80" placeholder="Buscar miembros" />
                </div>
                <div>
                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-white bg-blue-600 font-medium rounded-lg text-sm px-3 py-2.5 border border-blue-600 hover:bg-white hover:text-blue-600" type="button">
                        <span className="sr-only">Nuevo Miembro</span>
                        Nuevo Miembro
                    </button>
                </div>
            </div>

            <div className="overflow-auto h-[90%]">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="h-full text-xs text-gray-400 uppercase bg-stone-100">
                        <tr>
                            <th scope="col" className="p-4">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Guia
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Accion
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                            { arr.map((e, i)=> (
                                    <tr className="bg-white border-b border-gray-300 hover:bg-neutral-50">
                                        <td className="w-4 p-4">
                                            {i + 1}
                                        </td>
                                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">

                                            { 
                                                srcImg ? 
                                                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" /> : 
                                                <FaUser className="text-slate-500 size-5 mx-3" /> 
                                            }
                                            
                                            <div className="ps-3">
                                                <div className="text-base font-semibold  text-gray-500">Ivan Gonzalez</div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Juan Alvarez
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Activo
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="grid grid-cols-3 place-content-around">
                                                <div className="">
                                                    <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 hover:underline"><FaUserEdit className="size-5"/></a>
                                                </div>
                                                <div className="">
                                                    <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-red-600 hover:underline"><FaMinusCircle className="size-5"/></a>
                                                </div>
                                                <div className="">
                                                    <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-green-600 hover:underline"><FaPollH className="size-5"/></a>
                                                </div>
                                            </div>
                                            {/* <!-- Modal toggle --> */}
                                        </td>
                                    </tr>
                            ))                           
                            }
                    </tbody>
                </table>
            </div>
        </>
        // <div className="h-full">
        // </div>
    )
}

export default Board;