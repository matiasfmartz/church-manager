import React from 'react'
import { FaUser } from "react-icons/fa6";
import { FaUserEdit, FaMinusCircle, FaPollH  } from "react-icons/fa";
import Table from '@/components/Shared/Table';
import BtnTable from '@/components/Shared/BtnTable';

const AddedViewItemTable = ({member, key}) => {

    const calculateAge = (birthDate) => {
        return new Date().getFullYear() - new Date(birthDate).getFullYear();
    };

    const age = calculateAge(member.date_birth);

    let srcImg = null;

  return (
    <tr className="bg-white border-b border-gray-300 hover:bg-neutral-50" key={key}>
        <td className="w-4 p-">
            {member.id ? member.id + 1 : "-"}
        </td>
        <th scope="row" className="flex items-center px-3 py-2 text-gray-900 whitespace-nowrap dark:text-white">

            { 
                srcImg ? 
                <img className="w-5 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" /> : 
                <FaUser className="text-slate-500 size-5 mx-1" /> 
            }
            
            <div className="ps-3">
                <div className="text-base font-semibold  text-gray-500">{member.name} {member.last_name}</div>
            </div>
        </th>
        <td className="px-3 py-2">
            {age} 
        </td>
        <td className="px-3 py-2">
            {member.contact}
        </td>
        <td className="px-3 py-2">
            {member.date_joining}
        </td>
        <td className="px-3 py-2">
            {member.cell.label}
        </td>
        <td className="px-3 py-2">
            {member.area.label}
        </td>
    </tr>
  )
}

export default AddedViewItemTable