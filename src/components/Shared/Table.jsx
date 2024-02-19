import { FaUser } from "react-icons/fa6";
import { FaUserEdit, FaMinusCircle, FaPollH  } from "react-icons/fa";

const Table = ({arr}) => {

    let srcImg = null;

    return (
        <>
            <div className="overflow-auto h-[92%]">
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
    )
}

export default Table;