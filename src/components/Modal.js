import React from 'react';

function Modal({ isOpen, onClose, pandemic }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg w-full">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{pandemic.name}</h2>
          <img src={pandemic.image} alt={pandemic.name} className="w-full h-48 object-cover mb-4" />
          <p className="text-gray-700">{pandemic.details}</p>
        </div>
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
