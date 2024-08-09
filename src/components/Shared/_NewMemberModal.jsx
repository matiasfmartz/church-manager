import React from 'react';

const _NewMemberModal = ({ isOpen, onClose }) => {

  if (!isOpen) return null; // Si el modal no está abierto, no renderizar nada

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Nuevo Miembro</h2>
        <p className="mb-4">Este es el contenido del modal. Aquí puedes colocar cualquier información o formulario.</p>
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
