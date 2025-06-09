import React from 'react';
import Input from './Input';
import Checkbox from './Checkbox';
import CustomSelect from './CustomSelect';
import useForm from '@/hooks/useForm';
import { getCellOptions, getAreaOptions } from '@/services/membersService';
import useFetch from '@/hooks/useFetch';

const _MemberDetailsModal = ({ user, isOpen, onClose }) => {
    if (!isOpen) return null;

    const initialValues = {
        name: user.name,
        last_name: user.last_name,
        date_birth: user.date_birth,
        date_joining: user.date_joining,
        baptism: user.baptism,
        contact: user.contact,
        church_school: user.church_school,
        bible_institute: user.bible_institute,
        another_church: user.another_church,
        cell: user.cell,
        area: user.area,
    };

    const { formData, handleChange, handleCheckboxChange, handleSelectChange, setFormData } = useForm(initialValues);

    const cellOptions = useFetch(getCellOptions);
    const areaOptions = useFetch(getAreaOptions);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Añadir el miembro a la lista
        setList([
            ...list,
            formData
        ]);

        // Limpiar el formulario
        setFormData(initialValues);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className='bg-white p-5 rounded-lg shadow-lg max-w-xl w-full'>
                <h2 className="text-lg font-semibold mb-4 text-gray-600">Agregar Nuevo Miembro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex space-x-2 mb-4">
                        <Input
                            label="Nombre"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            label="Apellido"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex space-x-2 mb-4">
                        <Input
                            label="Fecha de Nacimiento"
                            id="date_birth"
                            name="date_birth"
                            value={formData.date_birth}
                            onChange={handleChange}
                            type="date"
                            required
                        />
                        <Input
                            label="Fecha de Ingreso"
                            id="date_joining"
                            name="date_joining"
                            value={formData.date_joining}
                            onChange={handleChange}
                            type="date"
                            required
                        />
                    </div>
                    <div className="flex space-x-2 mb-4">
                        <Input
                            label="Contacto"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            type="tel"
                            maxLength="15"
                        />
                        <Input
                            label="Fecha de Bautismo (Mes y Año)"
                            id="baptism"
                            name="baptism"
                            value={formData.baptism}
                            onChange={handleChange}
                            type="date"
                        />
                    </div>
                    <div className="flex space-x-2 mb-4">
                        <Input
                            label="Viene de Otra Iglesia"
                            id="another_church"
                            name="another_church"
                            value={formData.another_church}
                            onChange={handleChange}
                        />
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                label="Escuela de Vida"
                                id="church_school"
                                name="church_school"
                                checked={formData.church_school}
                                onChange={handleCheckboxChange}
                            />
                            <Checkbox
                                label="Instituto Bíblico"
                                id="bible_institute"
                                name="bible_institute"
                                checked={formData.bible_institute}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                    </div>
                    <div className="flex space-x-2 mb-4">
                        <CustomSelect
                            label="Celula"
                            id="cell"
                            name="cell"
                            value={formData.cell}
                            onChange={handleSelectChange}
                            options={cellOptions.data.map(option => ({ value: option.id, label: option.name }))}
                            isLoading={!cellOptions.data.length && !cellOptions.error}
                            placeholder="Seleccione una célula..."
                            noOptionsMessage={() => cellOptions.error ? 'Error al cargar opciones' : 'Sin opciones disponibles'}
                        />
                        <CustomSelect
                            label="Área"
                            id="area"
                            name="area"
                            value={formData.area}
                            onChange={handleSelectChange}
                            options={areaOptions.data.map(option => ({ value: option.id, label: option.name }))}
                            isLoading={!areaOptions.data.length && !areaOptions.error}
                            placeholder="Seleccione un área..."
                            noOptionsMessage={() => areaOptions.error ? 'Error al cargar opciones' : 'Sin opciones disponibles'}
                        />
                    </div>
                    <div className='flex justify-end'>
                        <button
                            onClick={onClose}
                            className="inline-flex text-white bg-red-600 font-medium rounded-lg text-sm px-3 py-2 border border-blue-600 hover:bg-white hover:text-blue-600"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="inline-flex text-white bg-blue-600 font-medium rounded-lg text-sm px-3 py-2 mx-2 border border-blue-600 hover:bg-white hover:text-blue-600"
                        >
                            Confirmar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default _MemberDetailsModal;
