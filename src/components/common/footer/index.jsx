import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  Youtube,
  Phone,
  TwitterIcon as TikTok,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Students' Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Success Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Our Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Become An Instructor
                </a>
              </li>
            </ul>
          </div>

          {/* For Students Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">For Students</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Payment Option
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Placement Partner
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Enroll Now
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Offers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Upload Your Resume
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Internship And Placement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Scholarship
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Certificate Verification
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Corporate Training
                </a>
              </li>
            </ul>
          </div>

          {/* Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Info</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                >
                  Notices
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  News & Media Coverage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Help & FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Newsletter Sign Up</h4>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded transition-colors duration-200">
                Subscribe for Updates & Offers!
              </button>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">GoldTree Group Pvt. Ltd.</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Shree Ganesh Marg, Subidhanagar, Tinkune,
                <br />
                Kathmandu 44600, Nepal
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Telephone Contact</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>+977-1-4111849 / 4117578 / 4111583 / 5912405</p>
                <p>+977-9841002000 (WhatsApp) +977-9841002000</p>
                <p>+977-9841002000 (Viber)</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Email Address</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>info@goldtree.com</p>
                <p>hr@bgoldtree.com</p>
                <p>support@goldtree.com</p>
                <p>inquiry@goldtree.com</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow us on</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <Facebook className="w-8 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                >
                  <Twitter className="w-8 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
                >
                  <Instagram className="w-8 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                >
                  <Linkedin className="w-8 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                >
                  <MessageCircle className="w-8 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
                >
                  <Youtube className="w-8 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-200"
                >
                  <Phone className="w-8 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                >
                  <TikTok className="w-8 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 lg:mb-0">
              Copyright © 2008 - 2025. GoldTree Group Pvt. Ltd. or its
              affiliate(s). All rights reserved.
            </p>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">We Accept:</span>
              <div className="flex space-x-2">
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-red-600 font-bold text-xs">
                    fonepay
                  </span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-green-600 font-bold text-xs">
                    eSewa
                  </span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-purple-600 font-bold text-xs">
                    Khalti
                  </span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-red-600 font-bold text-xs">
                    IME Pay
                  </span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-blue-600 font-bold text-xs">
                    Connect IPS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
