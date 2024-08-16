import React, { useState } from 'react';
import { getCellOptions, getAreaOptions } from '../../../src/services/membersService';
import useFetch from '../../../src/hooks/useFetch';

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
          <div className='bg-white p-5 rounded-lg shadow-lg max-w-sm w-full'>
            <h2 className="text-lg font-semibold mb-4 text-gray-600">Agregar Nuevo Miembro</h2>
            <form onSubmit={handleSubmit}>
                {/* Nombre y Apellido */}
                <div className="flex space-x-2 mb-4">
                    <div className="flex-1">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            required
                        />
                    </div>
                </div>

                {/* Fecha de Nacimiento y Fecha de Ingreso */}
                <div className="flex space-x-2 mb-4">
                    <div className="flex-1">
                        <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                        <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Fecha de Ingreso</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            required
                        />
                    </div>
                </div>

                {/* Contacto y Fecha Aproximada de Bautismo */}
                <div className="flex space-x-2 mb-4">
                    <div className="flex-1">
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contacto</label>
                        <input
                            type="tel"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="baptismDate" className="block text-sm font-medium text-gray-700">Fecha de Bautismo (Mes y Año)</label>
                        <input
                            type="month"
                            id="baptismDate"
                            name="baptismDate"
                            value={formData.baptismDate}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        />
                    </div>
                </div>

                {/* Viene de Otra Iglesia, Escuela de Vida, Instituto Bíblico */}
                <div className="flex space-x-2 mb-4">
                    <div className="flex-1">
                        <label htmlFor="comesFromAnotherChurch" className="block text-sm font-medium text-gray-700">Viene de Otra Iglesia</label>
                        <input
                            type="text"
                            id="comesFromAnotherChurch"
                            name="comesFromAnotherChurch"
                            value={formData.comesFromAnotherChurch}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="isSchoolOfLife"
                                    name="isSchoolOfLife"
                                    checked={formData.isSchoolOfLife}
                                    onChange={handleCheckboxChange}
                                    className="mr-1"
                                />
                                <label htmlFor="isSchoolOfLife" className="text-sm font-medium text-gray-700">Escuela de Vida</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="isBibleInstitute"
                                    name="isBibleInstitute"
                                    checked={formData.isBibleInstitute}
                                    onChange={handleCheckboxChange}
                                    className="mr-1"
                                />
                                <label htmlFor="isBibleInstitute" className="text-sm font-medium text-gray-700">Instituto Bíblico</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dropdown Celula y Area */}
                <div className="flex space-x-2 mb-4">
                    <div className="flex-1">
                        <label htmlFor="cell" className="block text-sm font-medium text-gray-700">Celula</label>
                        <select
                            id="area"
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm p-2 ${cellOptions.error ? 'text-rose-500 border-2 border-rose-500 bg-red-100' : 'focus:ring-indigo-500 focus:border-indigo-500'}`}
                            disabled={cellOptions.error != null}
                        >
                            {cellOptions.error ? (
                                <option value="">Error de servidor</option>
                            ) : (
                                <>
                                    <option value="">Seleccione...</option>
                                    {cellOptions.data.map((option) => (
                                        <option key={option.id} value={option.id}>
                                            {option.name}
                                        </option>
                                    ))}
                                </>
                            )}
                        </select>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="area" className="block text-sm font-medium text-gray-700">Área</label>
                        <select
                            id="area"
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm p-2 ${areaOptions.error ? 'text-rose-500 border-2 border-rose-500 bg-red-100' : 'focus:ring-indigo-500 focus:border-indigo-500'}`}
                            disabled={areaOptions.error != null}
                        >
                            {areaOptions.error ? (
                                <option value="">Error de servidor</option>
                            ) : (
                                <>
                                    <option value="">Seleccione...</option>
                                    {areaOptions.data.map((option) => (
                                        <option key={option.id} value={option.id}>
                                            {option.name}
                                        </option>
                                    ))}
                                </>
                            )}
                        </select>
                    </div>

                </div>

                <div className='flex justify-end'>
                    <button
                        type="submit"
                        className="inline-flex text-white bg-blue-600 font-medium rounded-lg text-sm px-3 py-2 border border-blue-600 hover:bg-white hover:text-blue-600"
                    >
                        Enviar
                    </button>
                </div>
            </form>
            <button 
              onClick={onClose} 
              className="bg-red-500 text-white px-4 py-2 rounded">
              Cerrar Modal
            </button>
          </div>
        </div>
    );
}

export default _NewMemberModal;