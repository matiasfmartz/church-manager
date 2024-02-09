import React from 'react'
import { Link } from 'react-router-dom'

const Tab = () => {
  return (    
    <div class="border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li class="me-2">
                <Link to="/miembros/" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                    Todos
                </Link>
            </li>
            <li class="me-2">
                <Link to="/miembros/" class="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                    Activos
                </Link>
            </li>
            <li class="me-2">
                <Link to="/miembros/" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                    Nuevos
                </Link>
            </li>
            <li class="me-2">
                <Link to="/miembros/" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
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