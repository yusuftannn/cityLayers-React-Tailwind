import React from 'react';

const EventList = ({ events, selectedDate }) => {
  const formattedDate = selectedDate.toLocaleDateString();
  const filteredEvents = events.filter(event => event.date === formattedDate);

  return (
    <div className="mt-4">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event, index) => (
          <div key={index} className="p-2 border-b">
            {event.title}
          </div>
        ))
      ) : (
        <div className="p-2 text-gray-500">Bu tarihte etkinlik yok.</div>
      )}
    </div>
  );
};

export default EventList;
