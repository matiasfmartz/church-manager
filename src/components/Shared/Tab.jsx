import React from 'react'
import { Link } from 'react-router-dom'

const Tab = () => {
  return (    
    <div class=" mt-5 mb-4 border-b border-gray-300">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li class="me-2">
                <Link to="/miembros/" class="inline-flex items-center justify-center py-2 pr-4 border-b-2 border-transparent rounded-t-lg group">
                    Todos
                </Link>
            </li>
            <li class="me-2">
                <Link to="/miembros/" class="inline-flex items-center justify-center py-2 px-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                    Activos
                </Link>
            </li>
            <li class="me-2">
                <Link to="/miembros/" class="inline-flex items-center justify-center py-2 px-4 border-b-2 border-transparent rounded-t-lg group">
                    Nuevos
                </Link>
            </li>
            <li class="me-2">
                <Link to="/miembros/" class="inline-flex items-center justify-center py-2 px-4 border-b-2 border-transparent rounded-t-lg group">
                    Inactivos
                </Link>
            </li>
            {/* <li>
                <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
            </li> */}
        </ul>
    </div>
  )
}

export default Tab