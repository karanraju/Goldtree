import { useState } from "react";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import UpcomingClassPopUp from "./upcoming.popup";
import { Calendar, Clock, FileImage } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Main Gird Component
const upcomingClassesData = [
  {
    id: 1,
    title: "Advanced Excel",
    duration: "1 Month",
    image: "/images/Excel.png",
    bgColor: "from-blue-500 to-green-500",
    date: "12/12/2023",
    time: "08:00 PM - 09:30 PM",
    moreClasses: 5,
    icon: FileImage,
    schedules: [
      { date: 15, month: "Jun", time: "08:00 PM - 09:30 PM" },
      { date: 16, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 17, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 18, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 19, month: "Jun", time: "10:00 AM - 11:30 AM" },
    ],
  },
  {
    id: 2,
    title: "Advanced Excel",
    duration: "1 Month",
    image: "/images/Excel.png",
    bgColor: "from-blue-500 to-green-500",
    date: "12/12/2023",
    time: "08:00 PM - 09:30 PM",
    moreClasses: 5,
    icon: FileImage,
    schedules: [
      { date: 15, month: "Jun", time: "08:00 PM - 09:30 PM" },
      { date: 16, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 17, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 18, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 19, month: "Jun", time: "10:00 AM - 11:30 AM" },
    ],
  },
  {
    id: 3,
    title: "Advanced Excel",
    duration: "1 Month",
    image: "/images/Excel.png",
    bgColor: "from-blue-500 to-green-500",
    date: "12/12/2023",
    time: "08:00 PM - 09:30 PM",
    moreClasses: 5,
    icon: FileImage,
    schedules: [
      { date: 15, month: "Jun", time: "08:00 PM - 09:30 PM" },
      { date: 16, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 17, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 18, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 19, month: "Jun", time: "10:00 AM - 11:30 AM" },
    ],
  },
  {
    id: 4,
    title: "Advanced Excel",
    duration: "1 Month",
    image: "/images/Excel.png",
    bgColor: "from-blue-500 to-green-500",
    date: "12/12/2023",
    time: "08:00 PM - 09:30 PM",
    moreClasses: 5,
    icon: FileImage,
    schedules: [
      { date: 15, month: "Jun", time: "08:00 PM - 09:30 PM" },
      { date: 16, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 17, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 18, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 19, month: "Jun", time: "10:00 AM - 11:30 AM" },
    ],
  },
  {
    id: 5,
    title: "Advanced Excel",
    duration: "1 Month",
    image: "/images/Excel.png",
    bgColor: "from-blue-500 to-green-500",
    date: "12/12/2023",
    time: "08:00 PM - 09:30 PM",
    moreClasses: 5,
    icon: FileImage,
    schedules: [
      { date: 15, month: "Jun", time: "08:00 PM - 09:30 PM" },
      { date: 16, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 17, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 18, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 19, month: "Jun", time: "10:00 AM - 11:30 AM" },
    ],
  },
  {
    id: 6,
    title: "Advanced Excel",
    duration: "1 Month",
    image: "/images/Excel.png",
    bgColor: "from-blue-500 to-green-500",
    date: "12/12/2023",
    time: "08:00 PM - 09:30 PM",
    moreClasses: 5,
    icon: FileImage,
    schedules: [
      { date: 15, month: "Jun", time: "08:00 PM - 09:30 PM" },
      { date: 16, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 17, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 18, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 19, month: "Jun", time: "10:00 AM - 11:30 AM" },
    ],
  },
  {
    id: 7,
    title: "Advanced Excel",
    duration: "1 Month",
    image: "/images/Excel.png",
    bgColor: "from-blue-500 to-green-500",
    date: "12/12/2023",
    time: "08:00 PM - 09:30 PM",
    moreClasses: 5,
    icon: FileImage,
    schedules: [
      { date: 15, month: "Jun", time: "08:00 PM - 09:30 PM" },
      { date: 16, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 17, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 18, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 19, month: "Jun", time: "10:00 AM - 11:30 AM" },
    ],
  },
  {
    id: 8,
    title: "Advanced Excel",
    duration: "1 Month",
    image: "/images/Excel.png",
    bgColor: "from-blue-500 to-green-500",
    date: "12/12/2023",
    time: "08:00 PM - 09:30 PM",
    moreClasses: 5,
    icon: FileImage,
    schedules: [
      { date: 15, month: "Jun", time: "08:00 PM - 09:30 PM" },
      { date: 16, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 17, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 18, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 19, month: "Jun", time: "10:00 AM - 11:30 AM" },
    ],
  },
  {
    id: 9,
    title: "Advanced Excel",
    duration: "1 Month",
    image: "/images/Excel.png",
    bgColor: "from-blue-500 to-green-500",
    date: "12/12/2023",
    time: "08:00 PM - 09:30 PM",
    moreClasses: 5,
    icon: FileImage,
    schedules: [
      { date: 15, month: "Jun", time: "08:00 PM - 09:30 PM" },
      { date: 16, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 17, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 18, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 19, month: "Jun", time: "10:00 AM - 11:30 AM" },
    ],
  },
  {
    id: 10,
    title: "Advanced Excel",
    duration: "1 Month",
    image: "/images/Excel.png",
    bgColor: "from-blue-500 to-green-500",
    date: "12/12/2023",
    time: "08:00 PM - 09:30 PM",
    moreClasses: 5,
    icon: FileImage,
    schedules: [
      { date: 15, month: "Jun", time: "08:00 PM - 09:30 PM" },
      { date: 16, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 17, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 18, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 19, month: "Jun", time: "10:00 AM - 11:30 AM" },
    ],
  },
  {
    id: 11,
    title: "Advanced Excel",
    duration: "1 Month",
    image: "/images/Excel.png",
    bgColor: "from-blue-500 to-green-500",
    date: "12/12/2023",
    time: "08:00 PM - 09:30 PM",
    moreClasses: 5,
    icon: FileImage,
    schedules: [
      { date: 15, month: "Jun", time: "08:00 PM - 09:30 PM" },
      { date: 16, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 17, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 18, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 19, month: "Jun", time: "10:00 AM - 11:30 AM" },
    ],
  },
  {
    id: 12,
    title: "Advanced Excel",
    duration: "1 Month",
    image: "/images/Excel.png",
    bgColor: "from-blue-500 to-green-500",
    date: "12/12/2023",
    time: "08:00 PM - 09:30 PM",
    moreClasses: 5,
    icon: FileImage,
    schedules: [
      { date: 15, month: "Jun", time: "08:00 PM - 09:30 PM" },
      { date: 16, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 17, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 18, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 19, month: "Jun", time: "10:00 AM - 11:30 AM" },
    ],
  },
  {
    id: 13,
    title: "Advanced Excel",
    duration: "1 Month",
    image: "/images/Excel.png",
    bgColor: "from-blue-500 to-green-500",
    date: "12/12/2023",
    time: "08:00 PM - 09:30 PM",
    moreClasses: 5,
    icon: FileImage,
    schedules: [
      { date: 15, month: "Jun", time: "08:00 PM - 09:30 PM" },
      { date: 16, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 17, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 18, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 19, month: "Jun", time: "10:00 AM - 11:30 AM" },
    ],
  },
];

export default function UpcomingClasses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModelOpen] = useState(false);
  const navigate = useNavigate();

  const handleMoreClassesClick = (course) => {
    setSelectedCourse(course);
    setIsModelOpen(true);
  };

  const closeModal = () => {
    setIsModelOpen(false);
    setSelectedCourse(null);
  };

  const goToAbout = () => {
    navigate("/blog");
  };

  return (
    <>
      <Header />
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Find Our Upcoming Class Schedule Here!
            </h1>
            <p className="text-gray-600 text-lg">
              Feel free to browser through our courses and their timings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingClassesData.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                // onClick={() =>
                //   course.link ? (window.location.href = course.link) : null
                // }
                onClick={goToAbout}
              >
                {/* Course Image/header */}
                <div
                  className={`h-48 bg-gradient-to-br ${course.bgColor} relative overflow-hidden`}
                >
                  <div className="absolute top-3 right-3">
                    <span className="bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {course.duration}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">
                        <course.icon />
                      </div>
                      <h2 className="text-lg font-bold">{course.title}</h2>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-6 h-6 bg-white/15 rounded-full"></div>
                </div>

                {/* Course Details */}
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 text-lg mb-3">
                    {course.title}
                  </h3>
                  <div className="mb-4">
                    <span className="text-gray-700 font-medium text-sm">
                      UPCOMING CLASSES
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{course.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.time}</span>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={() => handleMoreClassesClick(course)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                      >
                        {course.moreClasses} more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Section */}
          <div className="mt-12 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
              View All Upcoming Classes
            </button>
          </div>
        </div>

        {/* Modal */}
        {selectedCourse && (
          <UpcomingClassPopUp
            isOpen={isModalOpen}
            onClose={closeModal}
            courseName={selectedCourse.title}
            totalClasses={selectedCourse.moreClasses}
            schedules={selectedCourse.schedules}
          />
        )}
      </div>

      <Footer />
    </>
  );
}
