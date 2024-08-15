import React, { useState } from 'react';

const AddMemberForm = () => {
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
        <div className="w-full p-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-600">Agregar Nuevo Miembro</h2>
            <form onSubmit={handleSubmit}>
                {/* Nombre y Apellido */}
                <div className="flex space-x-4 mb-4">
                    <div className="flex-1">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
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
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                            required
                        />
                    </div>
                </div>

                {/* Fecha de Nacimiento y Fecha de Ingreso */}
                <div className="flex space-x-4 mb-4">
                    <div className="flex-1">
                        <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                        <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
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
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                            required
                        />
                    </div>
                </div>

                {/* Contacto y Fecha Aproximada de Bautismo */}
                <div className="flex space-x-4 mb-4">
                    <div className="flex-1">
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contacto</label>
                        <input
                            type="tel"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="baptismDate" className="block text-sm font-medium text-gray-700">Fecha Aproximada de Bautismo (Mes y Año)</label>
                        <input
                            type="month"
                            id="baptismDate"
                            name="baptismDate"
                            value={formData.baptismDate}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                        />
                    </div>
                </div>

                {/* Viene de Otra Iglesia, Escuela de Vida, Instituto Bíblico */}
                <div className="flex space-x-4 mb-4">
                    <div className="flex-1">
                        <label htmlFor="comesFromAnotherChurch" className="block text-sm font-medium text-gray-700">Viene de Otra Iglesia</label>
                        <input
                            type="text"
                            id="comesFromAnotherChurch"
                            name="comesFromAnotherChurch"
                            value={formData.comesFromAnotherChurch}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center space-x-4">
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    id="isSchoolOfLife"
                                    name="isSchoolOfLife"
                                    checked={formData.isSchoolOfLife}
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                />
                                <label htmlFor="isSchoolOfLife" className="text-sm font-medium text-gray-700">Escuela de Vida</label>
                            </div>
                            <div className="flex">
                                <input
                                    type="checkbox"
                                    id="isBibleInstitute"
                                    name="isBibleInstitute"
                                    checked={formData.isBibleInstitute}
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                />
                                <label htmlFor="isBibleInstitute" className="text-sm font-medium text-gray-700">Instituto Bíblico</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dropdown Celula y Area */}
                <div className="flex space-x-4 mb-4">
                    <div className="flex-1">
                        <label htmlFor="cell" className="block text-sm font-medium text-gray-700">Celula</label>
                        <select
                            id="cell"
                            name="cell"
                            value={formData.cell}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                        >
                            <option value="">Seleccione...</option>
                            {/* Opciones aquí */}
                        </select>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="area" className="block text-sm font-medium text-gray-700">Área</label>
                        <select
                            id="area"
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                        >
                            <option value="">Seleccione...</option>
                            {/* Opciones aquí */}
                        </select>
                    </div>
                </div>

                <div className='flex justify-end'>
                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex text-white bg-blue-600 font-medium rounded-lg text-sm px-3 py-2.5 border border-blue-600 hover:bg-white hover:text-blue-600" type="button">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddMemberForm;
