import React, { useState } from 'react';
import { getCellOptions, getAreaOptions } from '../../../src/services/membersService';
import useFetch from '../../../src/hooks/useFetch';
import AddMemberForm from '../Members/AddMembers/AddMemberForm';

const _NewMemberModal = ({ isOpen, onClose }) => {

    if (!isOpen) return null; // Si el modal no está abierto, no renderizar nada
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        birthDate: '',
        startDate: '',
        baptismDate: '',
        contact: '',
        isSchoolOfLife: false,
        isBibleInstitute: false,
        comesFromAnotherChurch: '',
        cell: '',
        area: '',
    });

    const cellOptions = useFetch(getCellOptions);
    const areaOptions = useFetch(getAreaOptions);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('url_del_backend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            // Manejar la respuesta del backend según corresponda
        } catch (error) {
            console.error('Error al enviar formulario:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className='bg-white p-5 rounded-lg shadow-lg max-w-xl w-full'>
            <AddMemberForm />
            <button 
              onClick={onClose} 
              className="inline-flex text-white bg-red-600 font-medium rounded-lg text-sm px-3 py-2 hover:bg-red-700">
              Cancelar
            </button>
          </div>
        </div>
    );
}

export default _NewMemberModal;