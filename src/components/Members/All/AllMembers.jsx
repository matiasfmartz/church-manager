import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiErrorAlt } from "react-icons/bi";
import { getAllMembers } from '../../../services/membersService';
import BtnTable from "../../Shared/BtnTable";
import Table from "../../Shared/Table";
import _NewMemberModal from '../../Shared/_NewMemberModal';
import { getAllProcessMembers } from '../../../logic/memberLogic';

const AllMembers = () => {

    const [stateMembers, setStateMembers] = useState({
        data: [0],
        error: null,
        loading: true
    });

    useEffect(() => {
      const fetchMembers = async () => {
        try {
          const data = await getAllMembers();
          setStateMembers({ data: data, error: null, loading: false });
        } catch (error) {
            setStateMembers({ data: [], error: `Server error ${error.name}. Message: "${error.message}"`, loading: false });
            console.error('Error al obtener los miembros:', error);
        }
      };
  
      fetchMembers();
    }, []);

    return (
        <>
            <div className="h-[87%] relative shadow-xl sm:rounded-lg p-5 bg-white content-between">
                {/* <div className="h-[8%] flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 pb-4 bg-white">
                    <BtnTable placeHolderSearch={"Buscar Miembros"} name1={"Nuevo Miembro"} btn1={true} onClick1={openModal} btn2={true} name2={"Agregar Miembros"} onClick2={handleNavigate}/>
                </div> */}
                <div className="overflow-auto h-[92%]">
                    {stateMembers.loading && <div>Loading...</div>}
                    {stateMembers.error && (
                        <div className="flex justify-center">
                            <span className='inline-flex items-center border-solid border-2 border-red-500 p-2 text-red-500 bg-red-100 rounded-lg'><BiErrorAlt className='mx-1'/> Error de servidor: {stateMembers.error}</span>
                        </div>
                    )}
                    {!stateMembers.loading && !stateMembers.error && <Table arr={stateMembers.data} />}
                </div>
            </div>
        </>
    )
}

export default AllMembers;