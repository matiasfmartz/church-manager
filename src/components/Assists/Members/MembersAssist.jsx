import React from 'react'
import BtnTable from '../../Shared/BtnTable'
import Table from '../../Shared/Table'

const MembersAssist = () => {
  return (
    <>
      <div className="h-[8%] flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 pb-4 bg-white">
          <BtnTable placeHolderSearch={"Buscar Miembros"}/>
      </div>
      <div className='grid grid-cols-8 h-[92%]'>
        <div className="col-start-1 col-span-6 overflow-auto">
          <Table arr={[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}/>
        </div>
        <div className="col-start-7 col-span-2 content-center grid justify-items-center">
          <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="mx-3 inline-flex items-center text-gray-500 hover:text-blue-600 font-medium text-sm px-3 py-2.5 border-b-2 border-white hover:border-blue-600" type="button">
              Reuniones Generales
          </button>
          <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="mx-3 inline-flex items-center text-gray-500 hover:text-blue-600 font-medium text-sm px-3 py-2.5 border-b-2 border-white hover:border-blue-600" type="button">
              Reuniones Especiales
          </button>
        </div>
      </div>
    </>
  )
}

export default MembersAssist