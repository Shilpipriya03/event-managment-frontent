import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";
import EventRegistration from "./components/EventRegistration";
import AdminDashboard from "./components/AdminDashboard";
import AdminEventList from "./components/AdminEventList";
import AdminEventForm from "./components/AdminEventForm";
import AttendanceQR from "./components/AttendanceQR";
import Home from "./components/Home.jsx";

const App = () => {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  useEffect(() => {
    // Check authentication status when the app loads
    dispatch({ type: "CHECK_AUTH" });
  }, [dispatch]);

  // ProtectedRoute for user access
  const ProtectedRoute = ({ children }) => {
    if (!isUserLoggedIn) {
      console.warn("Access denied: User is not logged in");
      return <Login />;
    }
    return children;
  };

  // AdminRoute for admin-only access
  const AdminRoute = ({ children }) => {
    if (!isUserLoggedIn) {
      console.warn("Access denied: User is not logged in");
      return <Navigate to="/login" replace />;
    }
    if (!isAdmin) {
      console.warn("Access denied: User is not an admin");
      return <Navigate to="/" replace />;
    }
    return children;
  };

  ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
  AdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/events"
            element={
              <ProtectedRoute>
                <Events />
              </ProtectedRoute>
            }
          />
          <Route
            path="/events/:id"
            element={
              <ProtectedRoute>
                <EventDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/events/:id/register"
            element={
              <ProtectedRoute>
                <EventRegistration />
              </ProtectedRoute>
            }
          />
          <Route
            path="/attendance/:id"
            element={
              <ProtectedRoute>
                <AttendanceQR />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/events"
            element={
              <AdminRoute>
                <AdminEventList />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/events/create"
            element={
              <AdminRoute>
                <AdminEventForm />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/events/:id/edit"
            element={
              <AdminRoute>
                <AdminEventForm />
              </AdminRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
