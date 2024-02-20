import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const AssistsTab = () => {

    const location = useLocation();

    return (
        <div className="mt-5 mb-4 border-b border-gray-300">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
                <li className="me-2">
                    <Link to="" className={`inline-flex items-center justify-center py-2 px-4 rounded-t-lg group ${location.pathname === '/asistencias' ? 'text-blue-600 border-b-2 border-blue-600 active' : ''}`}>
                        Miembros
                    </Link>
                </li>
                <li className="me-2">
                    <Link to="obreros" className={`inline-flex items-center justify-center py-2 px-4 rounded-t-lg group ${location.pathname === '/asistencias/obreros' ? 'text-blue-600 border-b-2 border-blue-600 active' : ''}`}>
                        Obreros
                    </Link>
                </li>
                <li className="me-2">
                    <Link to="lideres" className={`inline-flex items-center justify-center py-2 px-4 rounded-t-lg group ${location.pathname === '/asistencias/lideres' ? 'text-blue-600 border-b-2 border-blue-600 active' : ''}`}>
                        Lideres
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default AssistsTab