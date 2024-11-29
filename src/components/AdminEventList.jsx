import { useState } from "react";
import { Link } from "react-router-dom";
import { mockEvents } from "../Data/data.js";
import PropTypes from "prop-types";

const AdminEventList = () => {
  const [events, setEvents] = useState(mockEvents);

  const handleDelete = (id) => {
    console.log(`Delete event with id: ${id}`);
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <header className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">Manage Events</h1>
        <Link
          to="/admin/events/create"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create New Event
        </Link>
      </header>

      <main className="mt-4">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <TableHeader />
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {events.length > 0 ? (
                events.map((event) => (
                  <TableRow
                    key={event.id}
                    event={event}
                    onDelete={handleDelete}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No events available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

const TableHeader = () => (
  <tr>
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      Title
    </th>
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      Date
    </th>
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      Location
    </th>
    <th
      scope="col"
      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      Action
    </th>
  </tr>
);

const TableRow = ({ event, onDelete }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm font-medium text-gray-900">{event.title}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-500">{event.date}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-500">{event.location}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <Link
        to={`/admin/events/${event.id}/edit`}
        className="text-indigo-600 hover:text-indigo-900 mr-4"
      >
        Edit
      </Link>
      <button
        onClick={() => onDelete(event.id)}
        className="text-red-600 hover:text-red-900"
        aria-label={`Delete event: ${event.title}`}
      >
        Delete
      </button>
    </td>
  </tr>
);

TableRow.propTypes = {
  event: PropTypes.node.isRequired,
  onDelete: PropTypes.node.isRequired,
};
export default AdminEventList;
