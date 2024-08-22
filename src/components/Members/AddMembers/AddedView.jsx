import React from 'react';
import Table from '../../Shared/Table';

const AddedView = ({ title, btnActive, list = [] }) => {
    
    return (
        <div className="p-4 h-full flex flex-col justify-between">
            <div>
                <h1 className="mb-2 font-bold text-gray-600">{title}</h1>
                <Table arr={list} />
            </div>
            {btnActive && (
                <div className="flex justify-end">
                    <button
                        id="dropdownActionButton"
                        data-dropdown-toggle="dropdownAction"
                        className="inline-flex text-white bg-blue-600 font-medium rounded-lg text-sm px-3 py-2.5 border border-blue-600 hover:bg-white hover:text-blue-600"
                        type="button"
                    >
                        Agregar Miembros
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddedView;
