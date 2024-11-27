import { Link } from "react-router-dom";
import { mockEvents } from "../Data/data.js";

const Events = () => {
  // Directly initialize state with mockEvents or an empty array as fallback
  const events = mockEvents || [];
  // const events = [
  //   {
  //     date: "TODAY",
  //     time: "17:00",
  //     title: "Bergen International Film Festival",
  //     description:
  //       "Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.",
  //     colorClass: "bg-blue-50",
  //   },
  //   {
  //     date: "22 - 31 OCT",
  //     time: "10:00",
  //     title: "Wool week",
  //     description:
  //       "ULLVEKA 2021 will be held for the eighth time in the period 22 - 31 October 2021, and will take place in the entire Bergen region.",
  //     colorClass: "bg-pink-50",
  //   },
  //   {
  //     date: "22 - 31 OCT",
  //     time: "19:00",
  //     title: "Light park at Bergenhus Fortress",
  //     description:
  //       "LUMAGICA - a magical experience for young and old at Bergenhus Fortress, 12 November to 19 December 2021.",
  //     colorClass: "bg-pink-50",
  //   },
  //   {
  //     date: "13 - 31 DEC",
  //     time: "10:00",
  //     title: "Gingerbread City 2021",
  //     description:
  //       "The world's largest Gingerbread Town can be found in the Xhibition shopping center, right in the center of Bergen",
  //     colorClass: "bg-green-50",
  //   },
  // ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-4xl font-bold text-indigo-600  mb-8">Events</h1>
          <div className="space-y-4">
            {events.map(
              ({ id, title, date, location, description, timings }) => (
                <>
                  <Link to={`/events/${id}`} className="block hover:bg-gray-50">
                    <div
                      key={id}
                      className="flex overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div
                        className={`bg-blue-50 p-4 flex flex-col items-center justify-center min-w-[140px] text-center`}
                      >
                        <div className="flex text-sm font-medium mb-2">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {date}
                        </div>
                        <div className="text-md font-medium">
                          {timings.opening} - {timings.closing}
                        </div>
                      </div>

                      <div className="flex-1 p-6 flex justify-between items-start gap-4">
                        <div>
                          <h2 className="text-xl font-semibold text-indigo-600 truncate mb-2">
                            {title}
                          </h2>
                          <h3 className="text-sm text-gray-500 mb-2 flex">
                            <svg
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {location}
                          </h3>
                          <p className="text-gray-600">{description}</p>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
