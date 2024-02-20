import React from 'react'
import BtnTable from '../../Shared/BtnTable'
import Table from '../../Shared/Table'

const GDI = () => {
  return (
    <div className="h-[87%] relative shadow-xl sm:rounded-lg p-5 bg-white content-between">
        <BtnTable name1={"Nuevo GDI"} btn1={true} placeHolderSearch={"Buscar Grupo de Integracion"}/>
        <Table arr={[1,1,1,1,1,1,1,1]}/>
    </div>
  )
}

export default GDI