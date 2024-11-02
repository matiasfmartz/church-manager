import React from 'react';
import AddedViewTable from './AddedViewTable';

const AddedView = ({ title, list = [] }) => {

    const listProv = [
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
            cell: '',
            area: '',
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
            cell: '',
            area: '',
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
            cell: '',
            area: '',
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
            cell: '',
            area: '',
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
            cell: '',
            area: '',
        },
    ]
    
    return (
        <div className="p-4 h-full flex flex-col justify-around">
                <h1 className="mb-2 font-bold text-gray-600">{title}</h1>
                <div className='overflow-auto h-[75%]'>
                    <AddedViewTable arr={listProv} />
                </div>
                <div className="flex justify-end">
                    <button
                        id="dropdownActionButton"
                        data-dropdown-toggle="dropdownAction"
                        className="inline-flex text-white bg-blue-600 font-medium rounded-lg text-sm px-2.5 py-2.5 border border-blue-600 hover:bg-white hover:text-blue-600"
                        type="button"
                    >
                        Agregar Miembros
                    </button>
                </div>
        </div>
    );
};

export default AddedView;
