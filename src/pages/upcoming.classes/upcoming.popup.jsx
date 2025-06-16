import { X } from "lucide-react";

export default function UpcomingClassPopUp({
  isOpen,
  onClose,
  courseName,
  totalClasses,
  schedules,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-lg backdrop-brightness-90 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Upcoming Classes
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              <span className="text-orange-600 font-medium mr-2">
                {totalClasses} upcoming classes
              </span>
              from selected course
            </p>
          </div>
          <button onClick={onClose} className="text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Course Name */}
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-medium text-gray-800">{courseName}</h3>
        </div>

        {/* Class Schedules */}
        <div className="p-6 space-y-4">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">
                    {schedule.date}
                  </div>
                  <div className="text-sm text-gray-600">{schedule.month}</div>
                </div>
                <div className="text-gray-800 font-medium">{schedule.time}</div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                ENROLL NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}