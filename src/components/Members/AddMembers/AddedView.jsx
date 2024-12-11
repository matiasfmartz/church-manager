import React, { useState } from 'react';
import AddedViewTable from './AddedViewTable';
import { setMembers } from '../../../services/membersService';

const AddedView = ({ title, list = [] , setList}) => {
    const [listProv, setListProv] = useState([
        {
            name: 'Matias',
            last_name: 'Martinez',
            date_birth: '1998-08-02',
            date_joining: '1998-08-02',
            baptism: '',
            contact: '',
            church_school: false,
            bible_institute: false,
            another_church: '',
            cell: { label: 'Guía 1' },
            area: { label: 'Área 1' },
        },
        {
            name: 'Matias',
            last_name: 'Martinez',
            date_birth: '1998-08-02',
            date_joining: '1998-08-02',
            baptism: '',
            contact: '',
            church_school: false,
            bible_institute: false,
            another_church: '',
            cell: { label: 'Guía 2' },
            area: { label: 'Área 2' },
        },
        {
            name: 'Matias',
            last_name: 'Martinez',
            date_birth: '1998-08-02',
            date_joining: '1998-08-02',
            baptism: '',
            contact: '',
            church_school: false,
            bible_institute: false,
            another_church: '',
            cell: { label: 'Guía 1' },
            area: { label: 'Área 1' },
        },
        {
            name: 'Matias',
            last_name: 'Martinez',
            date_birth: '1998-08-02',
            date_joining: '1998-08-02',
            baptism: '',
            contact: '',
            church_school: false,
            bible_institute: false,
            another_church: '',
            cell: { label: 'Guía 2' },
            area: { label: 'Área 2' },
        },
        {
            name: 'Matias',
            last_name: 'Martinez',
            date_birth: '1998-08-02',
            date_joining: '1998-08-02',
            baptism: '',
            contact: '',
            church_school: false,
            bible_institute: false,
            another_church: '',
            cell: { label: 'Guía 1' },
            area: { label: 'Área 1' },
        },
        {
            name: 'Matias',
            last_name: 'Martinez',
            date_birth: '1998-08-02',
            date_joining: '1998-08-02',
            baptism: '',
            contact: '',
            church_school: false,
            bible_institute: false,
            another_church: '',
            cell: { label: 'Guía 2' },
            area: { label: 'Área 2' },
        }
    ]);

    const [selectedIds, setSelectedIds] = useState([]);

    const handleRemoveSelected = () => {
        const updatedList = list.filter((_, index) => !selectedIds.includes(index));
        setList(updatedList);
        setSelectedIds([]); // Limpia la selección
    };

    const handleAddMembers = async () => {
        try {
            await setMembers(list);
            setList([]); // Vacía la lista
            setSelectedIds([]); // Limpia la selección
            alert('Miembros agregados correctamente');
        } catch (error) {
            console.error('Error al agregar miembros:', error);
            alert('Ocurrió un error al agregar los miembros.');
        }
    };    

    const isListEmpty = list.length === 0; // Verificar si la lista está vacía

    return (
        <div className="p-4 h-full flex flex-col justify-around">
            <h1 className="mb-2 font-bold text-gray-600">{title}</h1>
            <div className="overflow-auto h-[75%]">
                <AddedViewTable arr={list} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
            </div>
            <div className="flex justify-end">
                <button
                    onClick={handleRemoveSelected}
                    disabled={selectedIds.length === 0}
                    className={`inline-flex text-white font-medium mx-1 rounded-lg text-xs px-2.5 py-2.5 border 
                        ${selectedIds.length === 0
                            ? 'bg-red-200 cursor-not-allowed border-none'
                            : 'bg-red-600 border-red-600 hover:bg-white hover:text-red-600'}
                    `}
                >
                    Quitar de la lista
                </button>
                <button
                    className="inline-flex text-white bg-blue-600 font-medium mx-1 rounded-lg text-xs px-2.5 py-2.5 border border-blue-600 hover:bg-white hover:text-blue-600 disabled:bg-blue-200 disabled:border-none disabled:cursor-not-allowed disabled:hover:text-white"
                    disabled={isListEmpty}
                    onClick={handleAddMembers}
                >
                    Agregar Miembros
                </button>
            </div>
        </div>
    );
};

export default AddedView;