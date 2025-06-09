import React, { useState } from 'react';
import { getCellOptions, getAreaOptions, setMember } from '@/services/membersService';
import useFetch from '@/hooks/useFetch';
import AddMemberForm from '../Members/AddMembers/AddMemberForm';

const _NewMemberModal = ({ isOpen, onClose, onMemberAdded }) => {

    if (!isOpen) return null; // Si el modal no está abierto, no renderizar nada
    const [formData, setFormData] = useState({
        name: '',
        last_name: '',
        date_birth: '',
        date_joining: '',
        baptism: '',
        contact: '',
        church_school: false,
        bible_institute: false,
        another_church: '',
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
            await setMember(formData);
            if (onMemberAdded) onMemberAdded();
            onClose();
        } catch (error) {
            console.error('Error al enviar formulario:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className='bg-white p-5 rounded-lg shadow-lg max-w-xl w-full'>
            <form onSubmit={handleSubmit}>
              {/* Aquí puedes renderizar los campos del formulario como en AddMemberForm */}
              {/* ...campos... */}
              <button type="submit" className="inline-flex text-white bg-blue-600 font-medium rounded-lg text-sm px-3 py-2 hover:bg-blue-700 mr-2">Guardar</button>
              <button type="button" onClick={onClose} className="inline-flex text-white bg-red-600 font-medium rounded-lg text-sm px-3 py-2 hover:bg-red-700">Cancelar</button>
            </form>
          </div>
        </div>
    );
}

export default _NewMemberModal;