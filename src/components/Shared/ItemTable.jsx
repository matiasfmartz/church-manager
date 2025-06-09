import React, { useState } from 'react'
import MemberDetailsModal from "../Shared/_MemberDetailsModal"; 
import { FaUser } from "react-icons/fa6";
import { IoIosAlert } from "react-icons/io";
import { TiUserDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import { FaUserEdit, FaMinusCircle, FaPollH } from "react-icons/fa";

const ItemTable = ({ member, key }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const calculateAge = (birthDate) => {
        return new Date().getFullYear() - new Date(birthDate).getFullYear();
    };

    const age = member.date_birth == null ? null : calculateAge(member.date_birth);

    let srcImg = null;

    return (
        <>
            <tr className="bg-white border-b border-gray-300 hover:bg-neutral-50 text-sm whitespace-nowrap" key={key}>
                <td className="w-4 p-">
                    {member.id ? member.id : "-"}
                </td>
                <td scope="row" className="flex items-center px-3 py-2 text-gray-900 whitespace-nowrap dark:text-white">

                    {
                        srcImg ?
                            <img className="w-5 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" /> :
                            <FaUser className="text-slate-500 size-4 mx-1" />
                    }

                    <div className="ps-3">
                        <div className="font-semibold text-gray-500">{member.name} {member.last_name}</div>
                    </div>
                </td>
                <td className="px-3 py-2">
                    {age}
                </td>
                <td className="px-3 py-2">
                    {member.contact}
                </td>
                <td className="px-3 py-2">
                    {member.date_joining
                        ? new Intl.DateTimeFormat('es-AR', { dateStyle: 'medium' }).format(new Date(member.date_joining))
                        : ""}
                </td>
                <td className="px-3 py-2">
                    {member.name_guide && member.last_name_guide ? (
                        `${member.name_guide} ${member.last_name_guide}`
                    ) : (
                        <span className="text-yellow-500 flex items-center">
                            <IoIosAlert className="mr-1" />sin asignar
                        </span>
                    )}
                </td>
                <td className="px-3 py-2">
                    {member.area_name ? (
                        member.area_name
                    ) : (
                        <span className="text-yellow-500 flex items-center">
                            <IoIosAlert className="mr-1" />sin asignar
                        </span>
                    )}
                </td>
                <td className="px-3 py-2">
                    <div className="flex justify-around">
                        <button onClick={() => setIsModalOpen(true)}><FaEdit className='size-5 text-violet-500'/></button>
                        <button onClick={() => alert("hola")}><TiUserDelete className='size-5 text-red-500'/></button>
                    </div>
                </td>
            </tr>
            <MemberDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} user={member} />
        </>
    )
}

export default ItemTable