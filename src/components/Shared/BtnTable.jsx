import React from 'react'

const BtnTable = ({name1, name2, btn1, btn2, onClick1, onClick2, placeHolderSearch}) => {
  return (
    <>
        <label for="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-black-100 border border-gray-300 rounded-lg w-80" placeholder={placeHolderSearch} />
        </div>
        <div>
            { 
                btn2 ?
                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" onClick={onClick2} className="mx-3 inline-flex items-center text-white bg-blue-600 font-medium rounded-lg text-sm px-3 py-2.5 border border-blue-600 hover:bg-white hover:text-blue-600" type="button">
                        {/* <span className="sr-only">Nuevo Miembro</span> */}
                        {name2}
                    </button>
                    :
                    <></>
            }
            {
                btn1 ?
                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" onClick={onClick1} className="inline-flex items-center text-white bg-blue-600 font-medium rounded-lg text-sm px-3 py-2.5 border border-blue-600 hover:bg-white hover:text-blue-600" type="button">
                        {/* <span className="sr-only">Nuevo Miembro</span> */}
                        {name1}
                    </button>
                    :
                    <></>
            }

        </div>
    </>
  )
}

export default BtnTable