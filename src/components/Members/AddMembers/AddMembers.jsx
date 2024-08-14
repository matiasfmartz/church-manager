import React from 'react'
import Table from '../../Shared/Table';
import AddMemberForm from './AddMemberForm';
import AddedView from './AddedView';

const AddMembers = () => {
  return (
    <>
        <h1 className="mt-5 mb-3 font-bold uppercase">Agregar Miembros</h1>
        <div className='flex justify-between h-[90%]'>
            <div className="bg-white overflow-auto h-[100%] w-[50%] rounded-md">
                <AddMemberForm />
            </div>
            <div className="flex-col flex justify-between bg-white h-[100%] w-[49%] rounded-md">
                <AddedView title={"Lista a añadir"} btnActive={true} />
                <AddedView title={"Agregados Recientemente"} btnActive={false}/>
            </div>
        </div>
    </>
    )
}

export default AddMembers;