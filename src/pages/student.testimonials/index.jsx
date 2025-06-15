import { useState } from "react";
import {
  Search,
  MessageSquare,
  SquarePlay,
  Play,
  ChevronDown,
} from "lucide-react";

import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import { ArrowDown } from "lucide-react";
import Image from "../../assets/Hero.png";

const testimonials = [
  {
    id: 1,
    name: "Mr. Manish Chaudhary",
    course:
      "AI with Python: Machine Learning, Deep Learning & Generative AI (LLMs) Training",
    image: `${Image}`,
    testimonial:
      "I feel really positive about my teacher and Broadway Infosys. The instructors are knowledgeable, supportive, and genuinely care about students growth.",
  },
  {
    id: 2,
    name: "Mr. Krishna Gaha",
    course: "JAVA Training Package",
    image: `${Image}`,
    testimonial:
      "I received an excellent service from both teacher and institution as I expected. I will surely suggest my friends to become a part of this institution. Thank You!",
  },
  {
    id: 3,
    name: "Ms. Pragya Sharad Khadka",
    course: "Web Development With Python and Django",
    image: `${Image}`,
    testimonial:
      "Both the instructors who taught us were very professional. They had depth knowledge on their course content. Management team of Broadway Infosys was also very good.",
  },
  {
    id: 4,
    name: "Ms. Rabina Kumari Chaudhary",
    course: "Web Design Training in Nepal",
    image: `${Image}`,
    testimonial:
      "Our web design instructors leave a lifelong impression on their students. His passion for designing and his ability to explain difficult concepts with ease made a huge difference in my learning. He always believed in me...",
  },
  {
    id: 5,
    name: "Mr. Prakash Bahadur Kathayat",
    course: "Data Science with Python Training",
    image: `${Image}`,
    testimonial:
      "I would like to express my gratitude for the opportunity to complete my Data Science with Python course at Broadway Infosys. The learning experience was highly beneficial, and I appreciate the structured curriculum...",
  },
  {
    id: 6,
    name: "Mr. Saphal Rai",
    course: "Flutter Framework Training",
    image: `${Image}`,
    testimonial:
      "Our instructor was excellent in his teaching. I am grateful to have learned from him, as he has had a positive influence on my life. His instruction is especially effective because it is straightforward, conceptual...",
  },
  {
    id: 7,
    name: "Mr. Rejas Pandey",
    course: "Accounting Training",
    image: `${Image}`,
    testimonial:
      "The accounting course at Broadway Infosys, taught by our instructor, was exceptional. His clear explanations and in-depth knowledge made complex concepts simple to grasp. The institute provides a supportive and well-orga...",
  },
  {
    id: 8,
    name: "Mr. Abhishek Mishra",
    course: "Data Science with Python Training",
    image: `${Image}`,
    testimonial:
      "My teacher is a total pro, one of the best I've ever had. I came from a BBA in Banking and Insurance with zero coding skills, but he made Python and Data Science feel easy. He broke down tough problems into simple...",
  },
  {
    id: 9,
    name: "Ms. Sanglamu Sherpa",
    course: "Web Design Training in Nepal",
    image: `${Image}`,
    testimonial:
      "Our Web Design instructor was really good that I got all my confusion cleared. It was really worth taking web class from him and overall I found Broadway really good.",
  },
  {
    id: 10,
    name: "Mr. Santosh Kunwar",
    course: "Graphics Design Training in Nepal",
    image: `${Image}`,
    testimonial:
      "मैले ग्राफिक्स डिजाइनको अध्ययन गरेको छु। मेरो शिक्षकले मलाई धेरै राम्रो सिकाउनुभयो। उहाँले मलाई फोटोशप, इलस्ट्रेटर सिकाउनुभयो। I had the privilege of studying graph...",
  },
  {
    id: 11,
    name: "Mr. Jaganath Raila",
    course: "QA Training in Nepal",
    image: `${Image}`,
    testimonial:
      "Our teacher is friendly, and he always encourages us to learn and create a friendly environment in class, which makes me more encouraged to learn in the Quality Assurance field. In Broadway Infosys, there is a suitable e...",
  },
  {
    id: 12,
    name: "Mr. Rimesh Chaudhary",
    course: "Data Science with Python Training",
    image: `${Image}`,
    testimonial:
      "Broadway Infosys helps me to dive into data science. Our instructor teaches us Python and Data science; that was the best experience with him.",
  },
  {
    id: 13,
    name: "Mr. Prajjwol Mani Bajracharya",
    course: "Advanced React Web Development Training",
    image: `${Image}`,
    testimonial:
      "The course is well-structured and meets professional standards. It also demonstrates a high level of competence.",
  },
  {
    id: 14,
    name: "Mr. Bidur Timsina",
    course: "Data Science with Python Training",
    image: `${Image}`,
    testimonial:
      "The Data Science with Python course at Broadway Infosys has been a highly valuable learning experience. The instructor is knowledgeable, explains concepts clearly, and fosters an interactive and supportive classroom...",
  },
  {
    id: 15,
    name: "Ms. Samikshya Rajthala",
    course: "Graphics Design Training in Nepal",
    image: `${Image}`,
    testimonial:
      "I took the Graphics Design course at Broadway Infosys. The training was intensive and well-organized. Our instructor was knowledgeable and supportive and gave us real-world project experience. The institute itself has ex...",
  },
  {
    id: 16,
    name: "Mr. Sahadev Pandey",
    course: "JAVA Training Package",
    image: `${Image}`,
    testimonial:
      "My overall experience in Broadway Infosys has been very good. Instructors have been helpful and ready to solve our queries and always ready to guide and mentor. So, as a whole, both Broadway Infosys Nepal and Instru...",
  },
  {
    id: 17,
    name: "Ms. Raksha Khadka",
    course: "Data Science with Python Training",
    image: `${Image}`,
    testimonial:
      "With an insatiable appetite for learning data science, joining here with an excellent mentor was worth it. I am thrilled to have had the chance to experience a wonderful journey in data science.",
  },
  {
    id: 18,
    name: "Mr. Hemanta Rajbanshi",
    course: "Data Science with Python Training",
    image: `${Image}`,
    testimonial:
      "I feel our instructor are generally positive, highlighting their industry experience, practical teaching methods, and supportive attitude.",
  },
];

const videoTestimonials = [
  {
    id: 1,
    name: "Mr. Ashish Poudel",
    course: "Web Design Training",
    thumbnail: `${Image}`,
    duration: "2:30",
  },
  {
    id: 2,
    name: "Mr. Ruchi Raj Karki",
    course: "MERN Stack Development Training",
    thumbnail: `${Image}`,
    duration: "3:15",
  },
  {
    id: 3,
    name: "Mr. Sandesh Kharal",
    course: "MERN Stack Development Training",
    thumbnail: `${Image}`,
    duration: "2:45",
  },
  {
    id: 4,
    name: "Mr. Subodh Parajuli",
    course: "Digital Marketing 360°",
    thumbnail: `${Image}`,
    duration: "4:20",
  },
  {
    id: 5,
    name: "Ms. Smriti Joshi",
    course: "Data Science & ML with Python",
    thumbnail: `${Image}`,
    duration: "3:30",
  },
  {
    id: 6,
    name: "Ms. Chetana Nath",
    course: "Graphics Design Training",
    thumbnail: `${Image}`,
    duration: "2:55",
  },
];

export default function StudentTestimonials() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("text");

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-blue-500 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Trusted by{" "}
                <span className="text-blue-600">thousands of students</span>
              </h1>
              <h2 className="text-4xl font-bold mb-6">
                for their <span className="text-orange-600">learning</span>
              </h2>
              <p className="text-black-100 mb-8">
                Real stories, real results. Our students expressing their words
                and voices.
              </p>
              <button className="bg-blue-600 gap-2 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center transition-colors">
                Read more testimonials <ArrowDown className="w-5 h-5" />
              </button>
            </div>

            {/* Right side - Testimonial cards in 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* First testimonial card */}
              <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-orange-500">
                <div className="text-orange-500 text-2xl mb-2">"</div>
                <p className="text-gray-700 text-sm mb-3">
                  Our Python and Django Instructor is the great instructor. With
                  the help of our instructor, I was able to solve my unsolved
                  queries.
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Read more
                </a>
                <div className="flex items-center mt-3">
                  <img
                    src={Image}
                    alt="Student"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">
                      Ms. Ankita Thapa Magar
                    </h4>
                    <p className="text-xs text-gray-600">
                      Web Development With Python and Django
                    </p>
                  </div>
                </div>
              </div>

              {/* Second testimonial card */}
              <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-orange-500">
                <div className="text-orange-500 text-2xl mb-2">"</div>
                <p className="text-gray-700 text-sm mb-3">
                  Our instructor is really polite and kind. They also have an
                  excellent way of teaching the students, really impressed by
                  his teaching style.
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Read more
                </a>
                <div className="flex items-center mt-3">
                  <img
                    src={Image}
                    alt="Student"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">
                      Mr. Suyash Acharya
                    </h4>
                    <p className="text-xs text-gray-600">
                      Web Design Training in Nepal
                    </p>
                  </div>
                </div>
              </div>

              {/* Third testimonial card */}
              <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-orange-500">
                <div className="text-orange-500 text-2xl mb-2">"</div>
                <p className="text-gray-700 text-sm mb-3">
                  The course materials were comprehensive and the instructor was
                  always available to help with any questions I had.
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Read more
                </a>
                <div className="flex items-center mt-3">
                  <img
                    src={Image}
                    alt="Student"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">Mr. Rajesh Sharma</h4>
                    <p className="text-xs text-gray-600">Data Science Course</p>
                  </div>
                </div>
              </div>

              {/* Fourth testimonial card */}
              <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-orange-500">
                <div className="text-orange-500 text-2xl mb-2">"</div>
                <p className="text-gray-700 text-sm mb-3">
                  I landed my dream job just 2 months after completing this
                  course. The career support was exceptional.
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Read more
                </a>
                <div className="flex items-center mt-3">
                  <img
                    src={Image}
                    alt="Student"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">Ms. Priya Patel</h4>
                    <p className="text-xs text-gray-600">
                      Digital Marketing Program
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-2-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Search Student/Course to see what our students say about it
            </h2>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-6">
              <input
                type="text"
                placeholder="Student/Course"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-12 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Text/Video Toggle */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setActiveTab("text")}
                className={`flex items-center justify-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "text"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <MessageSquare className="w-5 h-5" />
                Text
              </button>
              <button
                onClick={() => setActiveTab("video")}
                className={`flex items-center justify-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors
                 ${
                   activeTab === "video"
                     ? "bg-gray-800 text-white"
                     : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                 }`}
              >
                <SquarePlay className="w-5 h-5" />
                Video
              </button>
            </div>
          </div>

          {/* Testimonials Text Card Grid */}
          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {activeTab === "text" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800 text-sm">
                            {testimonial.name}
                          </h3>
                          <p className="text-blue-600 text-xs">
                            {testimonial.course}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        {testimonial.testimonial}
                      </p>
                      <a
                        href="#"
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Read more
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {/* Video Testimonials Grid */}
              {activeTab === "video" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videoTestimonials.map((video) => (
                    <div
                      key={video.id}
                      className="relative group cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.name}
                          className="w-full h-48 object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-purple-600/50"></div>

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors">
                            <Play className="h-8 w-8 text-white fill-current" />
                          </div>
                        </div>

                        {/* Duration */}
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="mt-4 flex items-center">
                        <img
                          src={Image}
                          alt={video.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800 text-sm">
                            {video.name}
                          </h3>
                          <p className="text-gray-600 text-xs">
                            {video.course}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-12 flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md flex items-center transition-colors duration-300 font-medium">
                  LOAD MORE
                  <ChevronDown className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}