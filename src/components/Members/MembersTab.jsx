import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import BtnTable from "../Shared/BtnTable";
import _NewMemberModal from "../Shared/_NewMemberModal";

const MembersTab = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate('/miembros/agregar-miembros');  // Aquí defines la ruta a la que quieres navegar
    };

    const location = useLocation();

  return (    
    <div className="flex justify-between items-center">
        <div className="mb-3 border-b border-gray-300">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="me-2">
                    <Link to="" className={`inline-flex items-center justify-center py-2 px-4 rounded-t-lg group ${location.pathname === '/miembros' ? 'text-blue-600 border-b-2 border-blue-600 active' : ''}`}>
                        Todos
                    </Link>
                </li>
                <li className="me-2">
                    <Link to="activos" className={`inline-flex items-center justify-center py-2 px-4 rounded-t-lg group ${location.pathname === '/miembros/activos' ? 'text-blue-600 border-b-2 border-blue-600 active' : ''}`}>
                        Activos
                    </Link>
                </li>
                <li className="me-2">
                    <Link to="nuevos" className={`inline-flex items-center justify-center py-2 px-4 rounded-t-lg group ${location.pathname === '/miembros/nuevos' ? 'text-blue-600 border-b-2 border-blue-600 active' : ''}`}>
                        Nuevos
                    </Link>
                </li>
                <li className="me-2">
                    <Link to="inactivos" className={`inline-flex items-center justify-center py-2 px-4 rounded-t-lg group ${location.pathname === '/miembros/inactivos' ? 'text-blue-600 border-b-2 border-blue-600 active' : ''}`}>
                        Inactivos
                    </Link>
                </li>
            </ul>
        </div>
        <BtnTable placeHolderSearch={"Buscar Miembros"} name1={"Nuevo Miembro"} btn1={true} onClick1={openModal} btn2={true} name2={"Agregar Miembros"} onClick2={handleNavigate}/>
        <_NewMemberModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default MembersTab