import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-blue-600">GOLDTREE</h1>
                  <p className="text-xs text-blue-600">GROUP</p>
                  <p className="text-xs text-gray-500">Since 2006</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button className="flex items-center px-3 py-2 text-sm font-medium text-black-700 hover:text-blue-600 transition-colors">
                <Menu className="w-7 h-7 mr-1 text-gray-700" />
                <span className="text-lg text-gray-600 font-medium">
                  All Course
                </span>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What do you want to learn today?"
                className="w-full px-4 py-2 pl-4 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Contact Info and CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-right">
              <p className="text-md font-medium text-gray-900">
                Inquiry Hotline: +977-9841002000
              </p>
              <p className="text-md text-gray-600">
                +977-9808724535 / +977-1-4111849
              </p>
            </div>
            <Button className="h-12 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Send Inquiry <ArrowRight />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md tex-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Secondary navigation */}
        <div className="border-t border-gray-200">
          <div className="flex items-center space-x-8 py-3 overflow-x-auto">
            <NavLink
              to="/"
              className="group flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap relative"
            >
              Offers
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                New
              </span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 origin-center" />
            </NavLink>
            <NavLink
              to="/gallery"
              className="group text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap relative"
            >
              Success Gallery
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 origin-center" />
            </NavLink>
            <NavLink
              to="/testimonials"
              className="group text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap relative"
            >
              Student Testimonials
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 origin-center" />
            </NavLink>
            <NavLink
              to="/upcoming_classes"
              className="group text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap relative"
            >
              Upcoming Classes <span className="text-blue-600">(48)</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 origin-center" />
            </NavLink>
            <a
              href="#"
              className="group text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap relative"
            >
              Career
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 origin-center" />
            </a>
            <NavLink
              to="/blog"
              className="group text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap relative"
            >
              Blog
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 origin-center" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
