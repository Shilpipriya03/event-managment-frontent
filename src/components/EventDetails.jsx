import { useParams, Link } from "react-router-dom";
import { mockEvents } from "../Data/data";

const EventDetails = () => {
  const { id } = useParams();

  // Find the event by ID (assuming mockEvents is an array or object with keys as IDs)
  const event = mockEvents[id-1];

  if (!event) {
    return <div className="text-center text-gray-500">Event not found.</div>;
  }

  const { title, date, location, description, price } = event;

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {title || "No Title"}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {date || "No Date"} | {location || "No Location"}
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {description || "No description available."}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Price</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {price !== undefined ? `$${price.toFixed(2)}` : "Free"}
            </dd>
          </div>
        </dl>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <Link
          to={`/events/${id}/register`}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register for Event
        </Link>
      </div>
    </div>
  );
};

export default EventDetails;
