import { useState } from "react";

import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import { Filter, ChevronDown, ChevronUp, Search, X } from "lucide-react";

import Image from "../../assets/first.jpg";

export default function Gallery() {
  const allItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: "Pathau",
  }));

  const students = [
    {
      id: 1,
      name: "Mr. Susan Ratna Shakya",
      position: "Digital Marketing Associate",
      company: "@Home Tech Nepal",
      companyUrl: "https://hometechnepal.com",
      college: "St. Xavier's College",
      degree: "BBS",
      image: `${Image}`,
      role: "Digital Marketing Associate",
      companyName: "Home Tech Nepal",
    },
    {
      id: 2,
      name: "Mr. MD Kamil Safi",
      position: "NOC Engineer",
      company: "@DishHome Nepal",
      companyUrl: "https://dishhome.com.np",
      college: "IIMS College",
      degree: "Computer network and security",
      image: `${Image}`,
      role: "NOC Engineer",
      companyName: "DishHome Nepal",
    },
    {
      id: 3,
      name: "Ms. Laxmi Tharu",
      position: "Graphics Designer",
      company: "@ANS Creation Pvt. Ltd.",
      companyUrl: "https://anscreation.com",
      college: "Lumbini Engineering College",
      degree: "Computer Science",
      image: `${Image}`,
      role: "Graphics Designer",
      companyName: "ANS Creation Pvt. Ltd.",
    },
    {
      id: 4,
      name: "Mr. Satish Mishra",
      position: "Devops Engineer",
      company: "@I.STEM LAB Pvt. Ltd.",
      companyUrl: "https://istemlab.com",
      college: "Nagarjuna College of Information Technology",
      degree: "BCA",
      image: `${Image}`,
      role: "Devops Engineer",
      companyName: "I.STEM LAB Pvt. Ltd.",
    },
    {
      id: 5,
      name: "Mr. Kushal Shrestha",
      position: "Digital Marketing Associates",
      company: "@Broadway Infosys Pvt. Ltd.",
      companyUrl: "https://broadwayinfosys.com",
      college: "Herald College",
      degree: "MBA",
      image: `${Image}`,
      role: "Digital Marketing Associates",
      companyName: "Broadway Infosys Pvt. Ltd.",
    },
    {
      id: 6,
      name: "Ms. Divyani Dhital",
      position: "Digital Marketer",
      company: "@Click Point Innovations Pvt. Ltd.",
      companyUrl: "https://clickpoint.com",
      college: "Saraswati Multiple Campus",
      degree: "Management",
      image: `${Image}`,
      role: "Digital Marketer",
      companyName: "Click Point Innovations Pvt. Ltd.",
    },
    {
      id: 7,
      name: "Ms. Deepika Kumari Chaudhary",
      position: "Jr. Accountant",
      company: "@Education and Migration Corner Pvt. Ltd.",
      companyUrl: "https://educationmigration.com",
      college: "Citizen College",
      degree: "BBA",
      image: `${Image}`,
      role: "Jr. Accountant",
      companyName: "Education and Migration Corner Pvt. Ltd.",
    },
    {
      id: 8,
      name: "Mr. Bibek Sharma",
      position: "Digital Marketer",
      company: "@Geeta Aviation",
      companyUrl: "https://geetaaviation.com",
      college: "Goldengate International College",
      degree: "Management",
      image: `${Image}`,
      role: "Digital Marketer",
      companyName: "Geeta Aviation",
    },
  ];

  // Filter options organized by category
  const filterOptions = {
    colleges: [
      "Aadim National College",
      "Adarsha International College",
      "Academia International College",
      "Academic International College",
      "Ace Institute of Management",
      "Airway Institute of Technology",
      "ACHS College",
      "St. Xavier's College",
      "IIMS College",
      "Lumbini Engineering College",
      "Nagarjuna College of Information Technology",
      "Herald College",
      "Saraswati Multiple Campus",
      "Citizen College",
      "Goldengate International College",
    ],
    companies: [
      "01 Softech",
      "21 Technology",
      "Aasaan Tech Pvt. Ltd.",
      "Aayulogic Pvt. Limited",
      "Aayur Tech",
      "Abmex",
      "Acme Pvt. Ltd.",
      "Home Tech Nepal",
      "DishHome Nepal",
      "ANS Creation Pvt. Ltd.",
      "I.STEM LAB Pvt. Ltd.",
      "Broadway Infosys Pvt. Ltd.",
      "Click Point Innovations Pvt. Ltd.",
      "Education and Migration Corner Pvt. Ltd.",
      "Geeta Aviation",
    ],
    roles: [
      "ICT Specialist",
      "Account Assistant",
      "Account Assistant Officer",
      "Account Officer",
      "Admin & Finance Officer",
      "Admin Officer",
      "Android Developer",
      "Digital Marketing Associate",
      "NOC Engineer",
      "Graphics Designer",
      "Devops Engineer",
      "Digital Marketing Associates",
      "Digital Marketer",
      "Jr. Accountant",
    ],
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    colleges: [],
    companies: [],
    roles: [],
  });
  const [expandedSections, setExpandedSections] = useState({
    colleges: true,
    companies: true,
    roles: true,
  });

  const itemsPerPage = 6;

  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allItems.slice(startIndex, startIndex + itemsPerPage);

  // ==============================================
  // Utility Functions
  // ==============================================
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      colleges: [],
      companies: [],
      roles: [],
    });
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedFilters.colleges.length > 0 ||
    selectedFilters.companies.length > 0 ||
    selectedFilters.roles.length > 0 ||
    searchQuery.length > 0;

  // ==============================================
  // Filter Logic
  // ==============================================
  const filteredStudents = students.filter((student) => {
    // Search filter
    const searchMatch =
      searchQuery === "" ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.companyName.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filters
    const collegeMatch =
      selectedFilters.colleges.length === 0 ||
      selectedFilters.colleges.includes(student.college);
    const companyMatch =
      selectedFilters.companies.length === 0 ||
      selectedFilters.companies.includes(student.companyName);
    const roleMatch =
      selectedFilters.roles.length === 0 ||
      selectedFilters.roles.includes(student.role);

    return searchMatch && collegeMatch && companyMatch && roleMatch;
  });

  // ==============================================
  // UI Components
  // ==============================================
  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-blue-200 to-pink-50 py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 -mt-30">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Meet our <span className="text-blue-600">students</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
                Read their{" "}
                <span className="text-orange-600">success stories</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-lg">
                Discover how our students transformed their careers through our
                programs.
              </p>
            </div>

            <div className="relative w-full h-96 md:h-[32rem] rounded-3xl backdrop-blur-sm border border-white/30 shadow-xl ml-30 -mt-20">
              {/* Main container with responsive sizing */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-4">
                {/* Top-right image */}
                <div className="row-start-1">
                  <img
                    src={`${Image}`}
                    alt="Student"
                    className="w-45 h-50 mt-20 rounded object-cover"
                  />
                </div>

                {/* Middle-left image */}
                <div className="col-start-2 row-start-2 -mt-50 rounded overflow-hidden">
                  <img
                    src={`${Image}`}
                    alt="Student"
                    className="w-46 h-45 rounded object-cover"
                  />
                </div>

                {/* Bottom-center image */}
                <div className="col-start-2 row-start-3 rounded overflow-hidden -mt-40">
                  <img
                    src={`${Image}`}
                    alt="Student"
                    className="w-50 h-50 object-cover"
                  />
                </div>

                {/* "Recently Hired by" Card */}
                <div className="absolute z-30 bg-white/90 p-4 rounded-2xl shadow-xl flex items-center space-x-3 backdrop-blur-sm border border-white/20 -ml-30 mt-55">
                  <img
                    src={`${Image}`}
                    alt="Company Logo"
                    className="rounded-lg w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                  <div>
                    <span className="text-xs md:text-sm font-medium text-gray-600">
                      RECENTLY HIRED BY
                    </span>
                    <p className="text-sm md:text-base font-bold text-gray-800">
                      Tech Company
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Hiring Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {currentItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={`${Image}`}
                  alt={item.name}
                  className="w-20 h-20 object-contain"
                />
                <p className="mt-2 text-center text-gray-600">{item.name}</p>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 hover:bg-gray-300 transition-colors"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`w-10 h-10 rounded-full ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } transition-colors`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 hover:bg-gray-300 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Success Gallery of Our Students
            </h2>
            <p className="text-gray-600">
              Thousands of students have completed their training with us & have
              been placed on jobs worldwide.
            </p>
          </div>

          {/* Search Bar and Filter Controls */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search students by name, position, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Filter and Clear Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilter(!showFilter)}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filter
                {hasActiveFilters && (
                  <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {selectedFilters.colleges.length +
                      selectedFilters.companies.length +
                      selectedFilters.roles.length +
                      (searchQuery ? 1 : 0)}
                  </span>
                )}
              </button>

              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50"
                >
                  <X className="mr-2 h-4 w-4" />
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mb-6 flex flex-wrap gap-2">
              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery("")}
                    className="ml-2 h-4 w-4 text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedFilters.colleges.map((college) => (
                <span
                  key={college}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                >
                  {college}
                  <button
                    onClick={() => handleFilterChange("colleges", college)}
                    className="ml-2 h-4 w-4 text-green-600 hover:text-green-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              {selectedFilters.companies.map((company) => (
                <span
                  key={company}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                >
                  {company}
                  <button
                    onClick={() => handleFilterChange("companies", company)}
                    className="ml-2 h-4 w-4 text-purple-600 hover:text-purple-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              {selectedFilters.roles.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800"
                >
                  {role}
                  <button
                    onClick={() => handleFilterChange("roles", role)}
                    className="ml-2 h-4 w-4 text-orange-600 hover:text-orange-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-8">
            {/* Filter Sidebar */}
            {showFilter && (
              <div className="w-80 bg-white border border-gray-200 rounded-lg p-6 h-fit">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  {hasActiveFilters && (
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-red-600 hover:text-red-800 font-medium"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* College/University Filter */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleSection("colleges")}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-800 mb-3"
                  >
                    <span>
                      College/University
                      {selectedFilters.colleges.length > 0 && (
                        <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {selectedFilters.colleges.length}
                        </span>
                      )}
                    </span>
                    {expandedSections.colleges ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {expandedSections.colleges && (
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {filterOptions.colleges.map((college) => (
                        <label
                          key={college}
                          className="flex items-center text-sm"
                        >
                          <input
                            type="checkbox"
                            checked={selectedFilters.colleges.includes(college)}
                            onChange={() =>
                              handleFilterChange("colleges", college)
                            }
                            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700">{college}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Company Working In Filter */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleSection("companies")}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-800 mb-3"
                  >
                    <span>
                      Company Working In
                      {selectedFilters.companies.length > 0 && (
                        <span className="ml-2 bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                          {selectedFilters.companies.length}
                        </span>
                      )}
                    </span>
                    {expandedSections.companies ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {expandedSections.companies && (
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {filterOptions.companies.map((company) => (
                        <label
                          key={company}
                          className="flex items-center text-sm"
                        >
                          <input
                            type="checkbox"
                            checked={selectedFilters.companies.includes(
                              company
                            )}
                            onChange={() =>
                              handleFilterChange("companies", company)
                            }
                            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700">{company}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Role Hired In Filter */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleSection("roles")}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-800 mb-3"
                  >
                    <span>
                      Role Hired In
                      {selectedFilters.roles.length > 0 && (
                        <span className="ml-2 bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                          {selectedFilters.roles.length}
                        </span>
                      )}
                    </span>
                    {expandedSections.roles ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {expandedSections.roles && (
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {filterOptions.roles.map((role) => (
                        <label key={role} className="flex items-center text-sm">
                          <input
                            type="checkbox"
                            checked={selectedFilters.roles.includes(role)}
                            onChange={() => handleFilterChange("roles", role)}
                            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700">{role}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Student Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStudents.map((student) => (
                  <div
                    key={student.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={student.image || "/placeholder.svg"}
                        alt={student.name}
                        className="w-24 h-24 rounded-full mb-4 object-cover"
                      />
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {student.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{student.position}</p>
                      <a
                        href={student.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline mb-4"
                      >
                        {student.company}
                      </a>

                      <div className="w-full">
                        <h4 className="text-gray-700 font-medium mb-1">
                          College/Faculty
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {student.college} / {student.degree}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredStudents.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No students found matching your search and filters.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear all filters to see all students
                  </button>
                </div>
              )}

              {filteredStudents.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center transition-colors">
                    LOAD MORE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
