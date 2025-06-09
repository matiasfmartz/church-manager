import React from 'react';
import BtnTable from '@/components/Shared/BtnTable'
import Table from '@/components/Shared/Table'

const ActiveMembers = () => {

  return (
    <div className="h-[87%] relative shadow-xl sm:rounded-lg p-5 bg-white content-between">
      {/* <div className="h-[8%] flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 pb-4 bg-white">
          <BtnTable placeHolderSearch={"Buscar Miembros"}/>
      </div> */}
      <div className="overflow-auto h-[92%]">
          <Table arr={[]}/>
      </div>
    </div>
  )
}

export default ActiveMembers