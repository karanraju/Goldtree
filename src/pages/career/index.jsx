import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import { GraduationCap, BookOpenText, School, Star } from "lucide-react";
import Image from "../../assets/first.jpg";

export default function CareerPage() {
  const stats = [
    {
      number: "162+",
      label: "Expert Instructors",
      icon: BookOpenText,
    },
    {
      number: "516+",
      label: "Courses Available",
      icon: School,
    },
    {
      number: "1000+",
      label: "Students Trained",
      icon: GraduationCap,
    },
    {
      number: "1337+",
      label: "Success Stories",
      icon: Star,
    },
  ];

  const successStories = [
    {
      id: 1,
      name: "Mr. Santosh Kunwar",
      position: "Graphics Designer",
      company: "Creative Solutions Pvt. Ltd.",
      course: "Graphics Design Training in Nepal",
      image: Image,
      description:
        "Completed graphics design training and now working as a professional designer",
    },
    {
      id: 2,
      name: "Ms. Ankita Thapa Magar",
      position: "Web Developer",
      company: "Tech Innovations Nepal",
      course: "Web Development With Python and Django",
      image: Image,
      description:
        "Successfully transitioned to web development after completing our comprehensive course",
    },
    {
      id: 3,
      name: "Mr. Suyash Acharya",
      position: "Digital Marketing Specialist",
      company: "Digital Marketing Pro",
      course: "Web Design Training in Nepal",
      image: Image,
      description:
        "Leveraged web design skills to excel in digital marketing field",
    },
    {
      id: 4,
      name: "Ms. Samikshya Rajthala",
      position: "UI/UX Designer",
      company: "Design Studio Nepal",
      course: "Graphics Design Training in Nepal",
      image: Image,
      description:
        "Advanced from graphics design to specialized UI/UX design role",
    },
  ];

  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex mb-12 h-50">
            <div>
              <h1 className="text-1xl md:text-2xl font-bold mb-3">
                CAREER HUB
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Make your next career move.
              </h1>
              <p className="text-lg text-blue-100 mb-8">
                At Broadway Infosys, whether you are a student or a seasoned
                professional, we have opportunities for you.
              </p>
            </div>
            <div className="flex space-x-10 gap-3 items-center justify-center ml-60">
              <div className="relative flex items-center justify-center w-[100px] h-20">
                {/* Base image (right-most) */}
                <div className="absolute -right-10 z-10 w-15 h-15 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={Image}
                    alt="User 1"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Second image (middle-right) */}
                <div className="absolute right-[4px] z-20 w-15 h-15 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={Image}
                    alt="User 2"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Third image (middle-left) */}
                <div className="absolute right-[45px] z-30 w-15 h-15  rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={Image}
                    alt="User 3"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Fourth image (left-most) - only partially visible */}
                <div className="absolute right-[80px] z-40 w-15 h-15  rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={Image}
                    alt="User 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-md">
                more than 15,000+ individuals have started their career through
                us.
              </p>
            </div>
          </div>

          <div className="absolute -mt-10 justify-between grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Join the GoldTree Team Card */}
            <div className="bg-white rounded-lg overflow-hidden">
              {/* Team Photo */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                <img
                  src={Image}
                  alt="Broadway Team"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-gray-800">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Join the Broadway Team
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Become a part of our dynamic team and help shape the future of
                  IT education in Nepal. We're always looking for passionate
                  educators and professionals.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Start your next career Card */}
            <div className="bg-white rounded-lg overflow-hidden">
              {/* Career Photo */}
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
                <img
                  src={Image}
                  alt="Career Success"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-gray-800">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Start your next career
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Launch your career in technology with our comprehensive
                  training programs. From beginners to advanced professionals,
                  we have courses for everyone.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-70 py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className=" flex gap-2 bg-white items-center border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{<stat.icon />}</div>
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-bold text-gray-800">
                    {stat.number}
                  </span>
                  <span className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Success Stories
            </h2>
            <p className="text-gray-600 mx-auto">
              Our students have successfully transitioned to new careers and
              advanced in their professional journeys. Here are some of their
              inspiring stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-8 py-16">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-gray-100"
                />
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  {story.name}
                </h3>
                <p className="text-blue-600 font-medium text-xs mb-1">
                  {story.position}
                </p>
                <p className="text-gray-500 text-xs mb-3">{story.company}</p>

                <div className="border-t border-gray-100 pt-3">
                  <p className="text-orange-600 text-xs font-medium mb-2">
                    {story.course}
                  </p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              View More
            </a>
          </div>
        </div>
      </div>

      {/* Haring partner */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Our graduates are hired by
              <span className="text-orange-600 ml-2">350+</span>
            </h2>
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              companies in Nepal
            </h3>
          </div>

          {/* Company Logos */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            {/* Beta Logo */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="text-red-600 font-bold text-xl">Beta</span>
            </div>

            {/* Splendour Logo */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="text-purple-600 font-bold text-sm">
                SPLENDOUR
              </span>
            </div>

            {/* Colorful Logo */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
            </div>

            {/* Additional Company Logos */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="text-blue-700 font-bold text-sm">TechCorp</span>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="text-gray-700 font-bold text-sm">
                InnovateLab
              </span>
            </div>
          </div>

          {/* Second Row of Logos */}
          <div className="flex justify-center items-center space-x-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="text-orange-600 font-bold text-sm">
                DigitalPro
              </span>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="text-green-600 font-bold text-sm">EcoSoft</span>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="text-purple-700 font-bold text-sm">NextGen</span>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="text-teal-600 font-bold text-sm">WebMaster</span>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="text-indigo-600 font-bold text-sm">
                AppCraft
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom information */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Learning new skills? Or Want to advance your skills?
          </h2>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition-colors">
            EXPLORE OUR COURSES
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}