import React, { useState } from 'react';
import { FaUser } from "react-icons/fa6";

const AddedViewTable = ({ arr }) => {

    const [selectedId, setSelectedId] = useState(null);

    const handleSelect = (id) => {
        setSelectedId(id);
    };

  let srcImg = null;
  
  const calculateAge = (birthDate) => {
    let age = new Date().getFullYear() - new Date(birthDate).getFullYear();
    return age;
  };

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead className="h-full text-xs text-gray-400 uppercase bg-stone-100">
        <tr>
          <th scope="col" className="p-4">
            ID
          </th>
          <th scope="col" className="px-3 py-3">
            Nombre
          </th>
          <th scope="col" className="px-3 py-3">
            Edad
          </th>
          <th scope="col" className="px-3 py-3">
            Contacto
          </th>
          <th scope="col" className="px-3 py-3">
            Ingreso
          </th>
          <th scope="col" className="px-3 py-3">
            Guia
          </th>
          <th scope="col" className="px-3 py-3">
            Area
          </th>
        </tr>
      </thead>
      <tbody className="">
        {arr.length > 0 ? (
          arr.map((e, i) => (
            <tr
                key={i}
                onClick={() => selectedId === i ? handleSelect(null) : handleSelect(i)}
                className={`cursor-pointer ${selectedId === i ? 'bg-blue-100' : ''} border-b border-gray-300 hover:bg-blue-100`}
                // className="bg-white border-b border-gray-300 hover:bg-neutral-50"
            >
              <td className="w-4 p-">{e.id ? e.id + 1 : "-"}</td>
              <th
                scope="row"
                className="flex items-center px-3 py-2 text-gray-900 whitespace-nowrap dark:text-white"
              >
                {srcImg ? (
                  <img
                    className="w-5 h-10 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Jese image"
                  />
                ) : (
                  <FaUser className="text-slate-500 size-5 mx-1" />
                )}

                <div className="ps-3">
                  <div className="text-base font-semibold  text-gray-500">
                    {e.name} {e.last_name}
                  </div>
                </div>
              </th>
              <td className="px-3 py-2">{calculateAge(e.date_birth)}</td>
              <td className="px-3 py-2">{e.contact}</td>
              <td className="px-3 py-2">{e.date_joining}</td>
              <td className="px-3 py-2">{e.cell.label}</td>
              <td className="px-3 py-2">{e.area.label}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="8" className="text-center p-4 text-gray-400">
              No hay datos
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AddedViewTable;
