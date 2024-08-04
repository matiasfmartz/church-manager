import React, { useState, useEffect } from 'react';
import { getAllMembers } from '../../../services/membersService';
import BtnTable from "../../Shared/BtnTable";
import Table from "../../Shared/Table";

const AllMembers = () => {

    const [members, setMembers] = useState([0]);

    useEffect(() => {
      const fetchMembers = async () => {
        try {
          const data = await getAllMembers();
          setMembers(data);
          console.log(data);
        } catch (error) {
          console.error('Error al obtener los miembros:', error);
        }
      };
  
      fetchMembers();
    }, []);

    return (
        <>
            <div className="h-[87%] relative shadow-xl sm:rounded-lg p-5 bg-white content-between">
                <div className="h-[8%] flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 pb-4 bg-white">
                    <BtnTable placeHolderSearch={"Buscar Miembros"}/>
                </div>
                <div className="overflow-auto h-[92%]">
                    <Table arr={members}/>
                </div>
            </div>
        </>
    )
}

export default AllMembers;