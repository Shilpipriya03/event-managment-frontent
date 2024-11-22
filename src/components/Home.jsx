import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { FaChartBar } from "react-icons/fa";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ username }) => {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const navigate = useNavigate();
  const [latestEvent, setLatestEvent] = useState(null);
  if (!username) {
    username = "shilpi";
  }
  useEffect(() => {
    // Fetch the latest event from API
    // For now, we'll use mock data
    const mockLatestEvent = {
      id: 1,
      title: "Tech Conference 2023",
      date: "2023-09-15",
      location: "San Francisco, CA",
    };
    setLatestEvent(mockLatestEvent);
  }, []);

  const RedirectUser = () => {
    if (isUserLoggedIn) {
      navigate("/events");
    } else {
      navigate("/login");
    }
  };
  const redirectToEvent = () => {
    if (isUserLoggedIn) {
      navigate(`/events/${latestEvent.id}`);
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {isUserLoggedIn
            ? `Welcome back, ${username}!`
            : "Hii from EventMaster!!"}
        </h1>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900 mb-2">
              About EventMaster
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              EventMaster is your go-to platform for managing and attending
              exciting events. Discover, create, and participate in a wide range
              of events tailored to your interests.
            </p>
          </div>
        </div>

        {latestEvent && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <FaRegCalendarCheck
                  className="h-5 w-5 text-blue-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Upcoming Event Reminder
                </h3>
                <p className="text-sm text-blue-700 mt-1">
                  Do not forget about {latestEvent.title} on {latestEvent.date}{" "}
                  in {latestEvent.location}.
                </p>
                <button
                  onClick={redirectToEvent}
                  className="text-sm font-medium text-blue-800 hover:text-blue-900 mt-2 inline-block"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <HiUserGroup
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Users
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      1,000+
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <FaRegCalendarCheck
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Events This Month
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">50+</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                  <FaChartBar
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Attendance Rate
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">95%</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={RedirectUser}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Explore Events
          </button>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  username: PropTypes.node.isRequired,
};

export default Home;
