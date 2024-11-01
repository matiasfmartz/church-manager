import React, { useEffect, useState } from 'react';
import Table from '../../Shared/Table';
import AddMemberForm from './AddMemberForm';
import AddedView from './AddedView';

const AddMembers = () => {

    const [membersList, setMembersList] = useState([]);  // Lista para almacenar miembro

    useEffect(() => {
        console.log(membersList);
    }, [membersList]);

    return (
        <div className='flex justify-between h-[95%]'>
            <div className="flex flex-col justify-between w-[50%]">
                <div className=" bg-white overflow-auto h-[65%] rounded-md">
                    <AddMemberForm setList={setMembersList} list={membersList}/>
                </div>
                <div className=" bg-white overflow-auto h-[33%] rounded-md">
                    <AddedView title={"Agregados Recientemente"} /> {/* para agregados recientemente, hacer una llamada a la base filtrando por fecha de agregacion*/}
                </div>
            </div>
            <div className="flex-col flex justify-between bg-white h-[100%] w-[49%] rounded-md">
                <div className="h-[33%]">
                    <AddedView title={"Lista a añadir"} btnActive={true} list={membersList}/>
                </div>
                <div className="h-[65%]">
                    {/* <AddedView title={"Vista Previa"} btnActive={false}/> */}
                </div>
            </div>
        </div>
    )
}

export default AddMembers;