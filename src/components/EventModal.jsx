import React, { useEffect, useRef } from 'react';

const EventModal = ({ event, onClose, onDelete }) => {
  const popupRef = useRef(null);
  if (!event) return null;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div ref={popupRef} className="bg-white p-4 rounded shadow-lg w-1/3">
        <h3><span className="text-l font-bold mb-4">Etkinlik Başlığı:</span> {event.title}</h3>
        <h3><span className="text-l font-bold mb-4">Başlangıç:</span> {event.start.toLocaleDateString()} {event.start.toLocaleTimeString()}</h3>
        <h3><span className="text-l font-bold mb-4">Bitiş:</span> {event.end.toLocaleDateString()} {event.end.toLocaleTimeString()}</h3>
        <button onClick={() => onClose(false)} className="mt-4 bg-blue-500 text-white p-2 rounded" aria-label="Close Event Modal">
          Close
        </button>
        <button onClick={onDelete} className="mt-4 ml-3 bg-red-500 text-white p-2 rounded" aria-label="Delete Event">
          Delete
        </button>
      </div>
    </div>
  );
};

export default EventModal;
