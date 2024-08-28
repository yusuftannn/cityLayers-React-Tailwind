import React from 'react';

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow4lg w-1/3">
        <h3><span className="text-l font-bold mb-4">Etkinlik Başlığı:</span> {event.title}</h3>
        <h3><span className="text-l font-bold mb-4">Başlangıç:</span> {event.start.toLocaleDateString()} {event.start.toLocaleTimeString()}</h3>
        <h3><span className="text-l font-bold mb-4">Bitiş:</span> {event.end.toLocaleDateString()} {event.end.toLocaleTimeString()}</h3>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white p-2 rounded">
          Kapat
        </button>
      </div>
    </div>
  );
};

export default EventModal;
