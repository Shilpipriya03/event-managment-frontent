import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockEvents } from "../Data/data";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const AdminEventForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  // Consolidated state for the form
  const [event, setEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (isEditMode) {
      const mockEvent = mockEvents[id - 1];
      if (mockEvent) {
        setEvent({
          title: mockEvent.title || "",
          date: mockEvent.date || "",
          location: mockEvent.location || "",
          description: mockEvent.description || "",
          price: mockEvent.price || "",
        });
      } else {
        console.error("Event not found.");
        navigate("/admin/events"); // Redirect if event doesn't exist
      }
    }
  }, [isEditMode, id, navigate]);

  // Centralized input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      ...event,
      price: parseFloat(event.price) || 0,
    };

    if (isEditMode) {
      console.log("Update event", eventData);
      toast.success("Update Successfull");
      // Update event logic here
    } else {
      console.log("Create event", eventData);
      toast.success("Event Created Successfully");

      // Create event logic here
    }

    navigate("/admin/events");
  };

  const { title, date, location, description, price } = event;

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900">
          {isEditMode ? "Edit Event" : "Create New Event"}
        </h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid grid-cols-1 gap-6">
            <InputField
              label="Title"
              name="title"
              value={title}
              onChange={handleChange}
              required
            />
            <InputField
              label="Date"
              name="date"
              type="date"
              value={date}
              onChange={handleChange}
              required
            />
            <InputField
              label="Location"
              name="location"
              value={location}
              onChange={handleChange}
              required
            />
            <TextareaField
              label="Description"
              name="description"
              value={description}
              onChange={handleChange}
              rows="3"
              required
            />
            <InputField
              label="Price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isEditMode ? "Update Event" : "Create Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, name, type = "text", ...props }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      {...props}
    />
  </div>
);

const TextareaField = ({ label, name, ...props }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      {...props}
    ></textarea>
  </div>
);

InputField.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
};
TextareaField.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
};
export default AdminEventForm;
