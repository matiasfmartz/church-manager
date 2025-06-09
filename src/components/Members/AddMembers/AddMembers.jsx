import React, { useEffect, useState } from 'react';
import Table from '@/components/Shared/Table';
import AddMemberForm from './AddMemberForm';
import AddedView from './AddedView';
import AddedViewTable from './AddedViewTable';
import { getLastAddedMembers } from '@/services/membersService';

const AddMembers = () => {

    const [membersList, setMembersList] = useState([]);  // Lista para almacenar miembro

    useEffect(() => {
    }, [membersList]);

    const [recentlyAdded, setRecentlyAdded] = useState([]); // Lista de miembros recientemente agregados

    // Función para actualizar la lista de agregados recientemente
    const updateRecentlyAdded = async () => {
        try {
            const data = await getLastAddedMembers();
            setRecentlyAdded(data);
        } catch (error) {
            console.error('Error fetching recently added members:', error);
        }
    };

    useEffect(() => {
        updateRecentlyAdded(); // Actualiza al cargar el componente
    }, []);

    return (
        <div className='flex justify-between h-[95%]'>
            <div className="flex flex-col justify-between w-[50%]">
                <div className="bg-white overflow-auto h-[90%] rounded-md">
                    <AddMemberForm setList={setMembersList} list={membersList} onMembersAdded={updateRecentlyAdded}/>
                </div>
            </div>
            <div className="flex-col flex justify-around h-[100%] w-[49%] rounded-md">
                <div className="h-[56%] bg-white">
                    <AddedView title={"Lista a añadir"} btnActive={true} list={membersList} setList={setMembersList} onMembersAdded={updateRecentlyAdded}/>
                </div>
                <div className="bg-white overflow-auto h-[40%] rounded-md">
                    <div className="p-4 h-full flex flex-col justify-around">
                        <h1 className="font-bold text-gray-600">Agregados Recientemente</h1>
                        <div className="overflow-auto h-[75%]">
                            <AddedViewTable arr={recentlyAdded} selectedIds={[]} setSelectedIds={[]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMembers;