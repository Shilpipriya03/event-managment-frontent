import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GiIncomingRocket } from "react-icons/gi";
import { logout } from "../store/authSlice";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  const islogin = useSelector((state) => state.auth.isUserLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("logout 😔", {
      position: "bottom-left",
    });

    // Additional logout logic can be added here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex justify-center items-center">
              <NavLink to="/" className="flex-shrink-0 flex items-center">
                <GiIncomingRocket />
              </NavLink>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-500 hover:text-gray-700"
                  }
                >
                  Home
                </NavLink>
                {islogin ? (
                  <NavLink
                    to="/events"
                    className={({ isActive }) =>
                      isActive
                        ? "text-indigo-600 font-semibold"
                        : "text-gray-500 hover:text-gray-700"
                    }
                  >
                    Events
                  </NavLink>
                ) : (
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "text-indigo-600 font-semibold"
                        : "text-gray-500 hover:text-gray-700"
                    }
                  >
                    Events
                  </NavLink>
                )}
                {isAdmin && (
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      isActive
                        ? "text-indigo-600 font-semibold"
                        : "text-gray-500 hover:text-gray-700"
                    }
                  >
                    Admin
                  </NavLink>
                )}
              </div>
            </div>
            {!islogin && (
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Link
                  to="/login"
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
            {islogin && (
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  onClick={handleLogout}
                  className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
