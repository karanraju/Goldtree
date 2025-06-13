import { useState } from "react";
import BlogCard from "../../components/block.card";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import First from "../../assets/first.jpg";
import Headers from "../../components/common/header";
import Footer from "../../components/common/footer";

const blogPosts = [
  {
    id: 1,
    title:
      '5 High-Paying IT Jobs You Can Get After +2," "Is an IT Career Right for You?',
    excerpt:
      "So, you've finished your +2. Now what? That question echoes in your head more often than you'd like. Everyone around you seems to be chasing",
    date: "May 11, 2025",
    gradient: "from-blue-400 to-purple-600",
    image: `${First}`,
  },
  {
    id: 2,
    title:
      "10 Categories of the Best Generative AI Tools for Writing, Design, Video, and More",
    excerpt:
      "Do you ever wish you could come up with great ideas at the snap of a finger, create beautiful imagery that looks practically real, or",
    date: "April 20, 2025",
    gradient: "from-purple-500 to-green-500",
    image: `${First}`,
  },
  {
    id: 3,
    title:
      "6 Reason Why students from non-it background now consider learning IT at Broadway Infosys?",
    excerpt:
      "One can't help but wonder: What exactly is pulling so many students, many with no technical leanings, toward the IT world? Not too long ago,",
    date: "April 10, 2025",
    gradient: "from-blue-500 to-cyan-400",
    image: `${First}`,
  },
  {
    id: 4,
    title:
      "Mastering GIT Version Control: 8 Essential Best Practices for Developers",
    excerpt:
      "Every software development team member understands the indispensable role of GIT version control systems in achieving organizational success in their work environment. Team monitoring tools",
    date: "March 26, 2025",
    gradient: "from-purple-600 to-blue-500",
    image: `${First}`,
  },
  {
    id: 5,
    title:
      "What is CSS Grid layout? Master 10 CSS Grid Layout for Responsive Web Design",
    excerpt:
      "Having visually appealing and responsive websites is paramount in the ever-changing web development environment. CSS Grid Layout is the developer's most potent weapon for delivering",
    date: "March 21, 2025",
    gradient: "from-cyan-400 to-purple-400",
    image: `${First}`,
  },
  {
    id: 6,
    title: "How to Debug Failed Test Case in QA: 10 Expert Strategies",
    excerpt:
      "A failed test case in QA becomes an essential chance to boost our development processes while enhancing our software quality requirements. A systematic debugging method allows",
    date: "March 4, 2025",
    gradient: "from-purple-500 to-green-400",
    image: `${First}`,
  },
];

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <>
      <Headers />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1 mt-12">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="px-3 py-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="flex items-center justify-items-center space-2">
              <ChevronsLeft className="h-5 w-5 text-blue-600" />
              <span className="font-medium">Previous</span>
            </span>
          </button>

          {/* Page Numbers */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            className="px-3 py-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="flex items-center justify-items-center space-2">
              <span className="font-medium">Next</span>
              <ChevronsRight className="h-5 w-5 text-blue-600" />
            </span>
          </button>
        </div>
      </section>
      );
      <Footer />
    </>
  );
}
