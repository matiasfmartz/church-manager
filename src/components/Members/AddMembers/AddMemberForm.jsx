import React, { useState } from 'react';
import Select from 'react-select';
import { getCellOptions, getAreaOptions } from '../../../services/membersService';
import useFetch from '../../../hooks/useFetch';

const AddMemberForm = ({setList, list}) => {
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

    const handleSelectChange = (selectedOption, action) => {
        setFormData({
            ...formData,
            [action.name]: selectedOption
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
    
        // Añadir el miembro a la lista
        setList([
            ...list,
            formData
        ]);

        // Limpiar el formulario
        setFormData({
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
    };

    return (
        <div className="w-full p-4">
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
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Apellido</label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            required
                        />
                    </div>
                </div>

                {/* Fecha de Nacimiento y Fecha de Ingreso */}
                <div className="flex space-x-2 mb-4">
                    <div className="flex-1">
                        <label htmlFor="date_birth" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                        <input
                            type="date"
                            id="date_birth"
                            name="date_birth"
                            value={formData.date_birth}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="date_joining" className="block text-sm font-medium text-gray-700">Fecha de Ingreso</label>
                        <input
                            type="date"
                            id="date_joining"
                            name="date_joining"
                            value={formData.date_joining}
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
                        <label htmlFor="baptism" className="block text-sm font-medium text-gray-700">Fecha de Bautismo (Mes y Año)</label>
                        <input
                            type="month"
                            id="baptism"
                            name="baptism"
                            value={formData.baptism}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        />
                    </div>
                </div>

                {/* Viene de Otra Iglesia, Escuela de Vida, Instituto Bíblico */}
                <div className="flex space-x-2 mb-4">
                    <div className="flex-1">
                        <label htmlFor="another_church" className="block text-sm font-medium text-gray-700">Viene de Otra Iglesia</label>
                        <input
                            type="text"
                            id="another_church"
                            name="another_church"
                            value={formData.another_church}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="church_school"
                                    name="church_school"
                                    checked={formData.church_school}
                                    onChange={handleCheckboxChange}
                                    className="mr-1"
                                />
                                <label htmlFor="church_school" className="text-sm font-medium text-gray-700">Escuela de Vida</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="bible_institute"
                                    name="bible_institute"
                                    checked={formData.bible_institute}
                                    onChange={handleCheckboxChange}
                                    className="mr-1"
                                />
                                <label htmlFor="bible_institute" className="text-sm font-medium text-gray-700">Instituto Bíblico</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dropdown Celula y Area */}
                <div className="flex space-x-2 mb-4">
                    <div className="flex-1">
                        <label htmlFor="cell" className="block text-sm font-medium text-gray-700">Celula</label>
                        <Select
                            id="cell"
                            name="cell"
                            value={formData.cell}
                            onChange={handleSelectChange}
                            options={cellOptions.data.map(option => ({ value: option.id, label: option.name }))}
                            isLoading={!cellOptions.data.length && !cellOptions.error}
                            //isDisabled={cellOptions.error != null}
                            placeholder="Seleccione una célula..."
                            noOptionsMessage={() => cellOptions.error ? 'Error al cargar opciones' : 'Sin opciones disponibles'}
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="area" className="block text-sm font-medium text-gray-700">Área</label>
                        <Select
                            id="area"
                            name="area"
                            value={formData.area}
                            onChange={handleSelectChange}
                            options={areaOptions.data.map(option => ({ value: option.id, label: option.name }))}
                            isLoading={!areaOptions.data.length && !areaOptions.error}
                            //isDisabled={areaOptions.error != null}
                            placeholder="Seleccione un área..."
                            noOptionsMessage={() => areaOptions.error ? 'Error al cargar opciones' : 'Sin opciones disponibles'}
                        />
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
        </div>
    );
}

export default AddMemberForm;
