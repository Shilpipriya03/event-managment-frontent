import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

const AttendanceQR = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch event details from API
    // For now, we'll use mock data
    const mockEvent = {
      id: 1,
      title: "Tech Conference 2023",
      date: "2023-09-15",
      location: "San Francisco, CA",
    };
    setEvent(mockEvent);
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  const qrValue = `https://yourdomain.com/attendance/${id}`;

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Attendance QR Code
        </h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {event.title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {event.date} | {event.location}
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <div className="flex justify-center py-8">
              <QRCodeSVG value={qrValue} size={256} />
            </div>
            <div className="text-center pb-8">
              <p className="text-sm text-gray-500">
                Scan this QR code to mark your attendance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceQR;
