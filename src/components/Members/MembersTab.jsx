import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const MembersTab = () => {

    const location = useLocation();

  return (    
    <div className="mt-5 mb-4 border-b border-gray-300">
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
  )
}

export default MembersTab