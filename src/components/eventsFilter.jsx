"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const formatDate = (dateString) => { // make date easy to read
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
  return new Date(dateString).toLocaleString('en-US', options);
};

const EventsFilter = ({ events }) => {
  const [filter, setFilter] = useState('all');
  const currentDate = new Date();

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    if (filter === 'upcoming') {
      return eventDate > currentDate;
    } else if (filter === 'passed') {
      return eventDate < currentDate;
    }
    return true;
  });

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-4 flex space-x-2 justify-center" role="group" aria-label="Event filter options">
        <button
          onClick={() => setFilter('all')}
          className={`cursor-pointer px-4 py-2 rounded border transition ${
            filter === 'all' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-400'
          }`} aria-pressed={filter === 'all'} aria-label="Show all events"
        >
          All
        </button>
        <button
          onClick={() => setFilter('upcoming')}
          className={`cursor-pointer px-4 py-2 rounded border transition ${
            filter === 'upcoming' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-400'
          }`} aria-pressed={filter === 'upcoming'} aria-label="Show upcoming events"
        >
          Upcoming
        </button>
        <button
          onClick={() => setFilter('passed')}
          className={`cursor-pointer px-4 py-2 rounded border transition ${
            filter === 'passed' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-400'
          }`} aria-pressed={filter === 'passed'} aria-label="Show passed events"
        >
          Passed
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" role="region" aria-label="Event listings">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <Link
              key={event._id}
              href={`/events/${event.slug}`}
              className="border border-slate-700 rounded-xl overflow-hidden hover:border-2 hover:scale-105 transition" aria-label={`View details for ${event.title}`}
            >
              <div className="w-full aspect-video">
                <Image
                  src={event.image.url}
                  alt={event.image.alt}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center p-4 text-xl font-semibold">{event.title}</h3>
              <p className="text-center p-1">{formatDate(event.date)}</p>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default EventsFilter;
