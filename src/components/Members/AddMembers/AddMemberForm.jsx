import React from 'react';
import Select from 'react-select';
import { getCellOptions, getAreaOptions } from '@/services/membersService';
import useFetch from '@/hooks/useFetch';
import Input from '@/components/Shared/Input';
import Checkbox from '@/components/Shared/Checkbox';
import CustomSelect from '@/components/Shared/CustomSelect';
import useForm from '@/hooks/useForm';

const AddMemberForm = ({ setList, list, onMembersAdded }) => {
    const initialValues = {
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
    };
    const { formData, handleChange, handleCheckboxChange, handleSelectChange, resetForm } = useForm(initialValues);

    const cellOptions = useFetch(getCellOptions);
    const areaOptions = useFetch(getAreaOptions);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setList([
            ...list,
            formData
        ]);
        resetForm();
        if (onMembersAdded) onMembersAdded();
    };

    return (
        <div className="w-full p-4">
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
