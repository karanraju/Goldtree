import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import {
  Calendar,
  Users,
  Share2,
  Play,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function ExcelCourseDetail() {
//   const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const upcomingClasses = [
    {
      date: "18 Jun 2025",
      times: ["11:30 AM - 01:00 PM", "07:30 PM - 09:00 PM"],
    },
    { date: "22 Jun 2025", times: ["08:00 AM - 09:30 AM"] },
    { date: "23 Jun 2025", times: ["08:00 PM - 09:30 PM"] },
    { date: "29 Jun 2025", times: ["08:00 AM - 09:30 AM"] },
  ];

  const courseHighlights = [
    "Familiarity with advance features and functions of MS- Excel spreadsheet",
    "Understanding Excel Formulas and Functions",
    "Data Analysis and Visualization",
    "Advanced Charting Techniques",
    "Pivot Tables and Pivot Charts",
    "Data Validation and Protection",
    "Macro Programming Basics",
    "Financial Modeling",
    "Statistical Analysis",
    "Database Functions",
  ];

  const benefits = [
    "High demand of data analysts",
    "Data-oriented individuals are given more attention to details",
    "Better career opportunities in finance and business",
    "Enhanced productivity and efficiency",
    "Professional certification recognized by industry",
  ];

  const syllabusItems = [
    "Understanding Excel Reporting Environment",
    "Business Intelligence Overview",
    "Working with Data",
    "Exploring Excel Database Features",
    "Data Tables",
    "Data Validation",
    "Conditional Formatting",
    "Creating Dynamic Lists with PivotTables",
    "Analyzing Information Data Sets",
    "Auditing",
    "Functions and Formulas",
    "Collaborating with Colleagues",
    "Creating Charts and Graphics",
  ];

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Breadcrumb */}
        <div className="bg-blue-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span>›</span>
              <a href="#" className="hover:underline">
                More
              </a>
              <span>›</span>
              <span>Advanced Excel Training In Nepal</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">
                  Advanced Excel Training In Nepal
                </h1>

                <div className="flex items-center space-x-6 mb-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>1 Month</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Excel Analyst</span>
                  </div>
                  <div className="flex items-center">
                    <Share2 className="w-4 h-4 mr-2" />
                    <span>Share with friends</span>
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm">
                    Training Mode: Both, Physical & Live Online Classes,
                    including Online Live Night Classes
                  </span>
                </div>

                <p className="text-lg mb-8">
                  Basic and Advanced Microsoft Excel Training in Kathmandu,
                  Nepal
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
                    ENROLL NOW →
                  </button>
                  <button className="bg-orange-600 text-white px-8 py-3 rounded font-semibold hover:bg-orange-700 transition-colors">
                    SEND AN INQUIRY →
                  </button>
                </div>

                <div className="flex items-center mt-6">
                  <Play className="w-5 h-5 mr-2" />
                  <a href="#" className="underline text-sm">
                    watch student's testimonials
                  </a>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-green-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <span className="text-white text-6xl font-bold">X</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Navigation Tabs */}
              <div className="flex space-x-8 border-b border-gray-200 mb-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "overview"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Course Overview
                </button>
                <button
                  onClick={() => setActiveTab("benefits")}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "benefits"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Course Benefits
                </button>
                <button
                  onClick={() => setActiveTab("syllabus")}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "syllabus"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Syllabus
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "overview" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Course Overview
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Advanced MS-Excel Training in Nepal
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Advance MS-Excel Training course is targeted for data
                    analysts, business managers, accountants, research
                    scientists, students and other professionals for enhancing
                    their analytical skills and strategic decision making
                    ability. The course aims to make trainees familiar with
                    advance MS-Excel features that are useful in performing
                    complex business operations and overall management
                    functions.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Course Highlights
                  </h3>
                  <ul className="space-y-2 mb-8">
                    {courseHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center mb-8">
                    <button className="text-gray-600 hover:text-gray-800 flex items-center mx-auto">
                      <ChevronDown className="w-4 h-4 mr-1" />
                      See more
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "benefits" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Benefits of Advanced Excel Training in Nepal
                  </h2>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable Sections */}
                  <div className="mt-8 space-y-4">
                    {[
                      "Keyboard Shortcuts",
                      "Formatting Tips",
                      "Efficiency Tips",
                      "Customization",
                    ].map((section) => (
                      <div key={section} className="bg-blue-50 rounded-lg">
                        <button
                          onClick={() => toggleSection(section)}
                          className="w-full flex items-center justify-between p-4 text-left"
                        >
                          <span className="font-medium text-gray-800">
                            + {section}
                          </span>
                          {expandedSections[section] ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                        {expandedSections[section] && (
                          <div className="px-4 pb-4">
                            <p className="text-gray-700">
                              Content for {section} section...
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Comprehensive Certificate Section */}
                  <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          Earn a Professional Excel Certification
                        </h3>
                        <p className="text-gray-700 mb-6">
                          Upon successful completion of the Advanced Excel
                          Training course, you will receive an
                          industry-recognized certificate that validates your
                          expertise in Microsoft Excel.
                        </p>

                        <div className="space-y-4 mb-6">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-sm">✓</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                Industry Recognition
                              </h4>
                              <p className="text-gray-600 text-sm">
                                Recognized by leading companies and HR
                                departments across Nepal
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-sm">✓</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                Digital & Physical Copy
                              </h4>
                              <p className="text-gray-600 text-sm">
                                Receive both digital certificate for online
                                profiles and physical certificate
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-sm">✓</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                Lifetime Validity
                              </h4>
                              <p className="text-gray-600 text-sm">
                                Certificate never expires and can be verified
                                online
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-sm">✓</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                LinkedIn Integration
                              </h4>
                              <p className="text-gray-600 text-sm">
                                Add directly to your LinkedIn profile, resume,
                                and CV
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Certificate Includes:
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Your name and course completion details</li>
                            <li>
                              • Broadway Infosys official seal and signature
                            </li>
                            <li>• Unique certificate ID for verification</li>
                            <li>• Course duration and skill level achieved</li>
                            <li>• QR code for instant online verification</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <div className="relative">
                          {/* Certificate Preview */}
                          <div className="bg-white border-4 border-blue-600 rounded-lg p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                            <div className="text-center">
                              {/* Header */}
                              <div className="mb-6">
                                <div className="flex items-center justify-center mb-2">
                                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                    <span className="text-white font-bold text-lg">
                                      B
                                    </span>
                                  </div>
                                  <div className="text-left">
                                    <div className="text-blue-600 font-bold text-lg">
                                      BROADWAY
                                    </div>
                                    <div className="text-blue-600 font-bold text-sm">
                                      INFOSYS
                                    </div>
                                    <div className="text-gray-500 text-xs">
                                      Since 2008
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Certificate Title */}
                              <div className="mb-6">
                                <h3 className="text-blue-800 font-bold text-xl mb-2">
                                  CERTIFICATE OF COMPLETION
                                </h3>
                                <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
                              </div>

                              {/* Content */}
                              <div className="mb-6">
                                <p className="text-gray-600 text-sm mb-4">
                                  This is to certify that
                                </p>
                                <div className="border-b-2 border-gray-300 pb-2 mb-4">
                                  <span className="text-gray-800 font-bold text-lg">
                                    [Student Name]
                                  </span>
                                </div>
                                <p className="text-gray-600 text-sm mb-2">
                                  has successfully completed
                                </p>
                                <p className="text-blue-800 font-bold text-base mb-4">
                                  Advanced Microsoft Excel Training
                                </p>
                                <p className="text-gray-600 text-xs">
                                  Duration: 1 Month | Level: Advanced
                                </p>
                              </div>

                              {/* Footer */}
                              <div className="flex justify-between items-end">
                                <div className="text-left">
                                  <div className="w-20 h-8 bg-blue-100 rounded mb-1"></div>
                                  <p className="text-xs text-gray-500">
                                    Instructor Signature
                                  </p>
                                </div>
                                <div className="text-center">
                                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-white font-bold text-lg">
                                      B
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-500">
                                    Official Seal
                                  </p>
                                </div>
                                <div className="text-right">
                                  <div className="w-20 h-8 bg-blue-100 rounded mb-1"></div>
                                  <p className="text-xs text-gray-500">
                                    Director Signature
                                  </p>
                                </div>
                              </div>

                              {/* Certificate ID */}
                              <div className="mt-4 pt-4 border-t border-gray-200">
                                <p className="text-xs text-gray-500">
                                  Certificate ID: BIS-EXL-2025-001
                                </p>
                                <p className="text-xs text-gray-500">
                                  Verify at: broadwayinfosys.com/verify
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Decorative elements */}
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Certificate Info */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-blue-600 text-xl">🏆</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Industry Standard
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Meets international certification standards for Excel
                          proficiency
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-green-600 text-xl">✓</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Verified Skills
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Demonstrates mastery of advanced Excel functions and
                          features
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-purple-600 text-xl">📈</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Career Boost
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Enhances your professional profile and job prospects
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Section */}
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Earn a High Value Industry Certificate
                      </h3>
                      <p className="text-gray-700">
                        Add this credential to your LinkedIn profile, resume, or
                        CV to stand out to recruiters.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-lg">
                        <div className="text-center">
                          <div className="text-blue-600 font-bold text-lg mb-2">
                            BROADWAY INFOSYS
                          </div>
                          <div className="text-blue-800 font-bold text-xl mb-4">
                            CERTIFICATE OF ACHIEVEMENT
                          </div>
                          <div className="text-sm text-gray-600 mb-4">
                            This certifies that
                          </div>
                          <div className="border-b border-gray-300 mb-4 pb-2">
                            <span className="text-gray-800 font-medium">
                              Training Name
                            </span>
                          </div>
                          <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white font-bold">B</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            Broadway Infosys Nepal
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "syllabus" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    What you'll learn
                  </h2>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <ul className="space-y-3">
                      {syllabusItems.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Advanced Excel Skills
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800 mb-2">
                          Data Analysis
                        </h4>
                        <p className="text-sm text-gray-600">
                          Learn advanced data analysis techniques and tools
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800 mb-2">
                          Financial Modeling
                        </h4>
                        <p className="text-sm text-gray-600">
                          Create complex financial models and projections
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <button className="w-full bg-orange-600 text-white py-3 px-6 rounded font-semibold hover:bg-orange-700 transition-colors mb-6">
                  SEND AN INQUIRY →
                </button>

                {/* Upcoming Classes */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Upcoming Classes
                  </h3>
                  <div className="space-y-4">
                    {upcomingClasses.map((classItem, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-200 pb-3 last:border-b-0"
                      >
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">{classItem.date}</span>
                        </div>
                        {classItem.times.map((time, timeIndex) => (
                          <div
                            key={timeIndex}
                            className="text-sm text-gray-700 ml-6"
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Students Also Enrolled */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Students also enrolled to
                  </h3>
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-12 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">
                        MS
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">
                        Computer Basics & Microsoft Office Package
                      </h4>
                      <p className="text-xs text-gray-600">Popular Course</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
