import { ArrowRight } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <div className="group cursor-pointer">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        {/* Image */}
        <div>
          <img
            src={post.image}
            alt={post.title}
            layout="fill"
            objectfit="cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-black font-bold text-lg leading-tight mb-4 group-hover:scale-105 transition-transform duration-300">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
            {post.excerpt}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs">{post.date}</span>
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
              <span className="text-blue-600 text-xs">
                <ArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
