import { ArrowRight, Calendar, Phone, Percent, Book } from "lucide-react";

import HeroImage from "../../assets/Hero.png";

export default function Offer() {
  return (
    <>
      <div className="bg-gradient-to-r from-red-300 to-orange-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-gray-700 font-medium text-xl mb-4">
                18% OFF FOR +2 APPEARED STUDENTS
              </h2>
              <h1 className="text-gray-800 font-bold text-6xl mb-4">
                Get 18% OFF
              </h1>
              <p className="text-gray-800 font-medium text-2xl mb-6">
                FOR ALL COURSES
              </p>

              <div className="flex items-center text-gray-700 mb-8">
                <Calendar className="w-5 h-5 mr-2" />
                <span>May 15, 2025-June 15, 2025</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="bg-orange-600 hover:bg:-orange-700 text-white px-6 py-4 rounded inline-block text-center transition-colors"
                >
                  <div className="text-xs mb-1">TALK TO OUR SUPPORT TEAM</div>
                  <div className="font-medium">SEND AN INQUIRY</div>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center gap-2 text-gray-800 hover:text-gray-900 font-medium transition-colors"
                >
                  <span>Pay and Enroll Now!</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src={HeroImage}
                width={500}
                height={500}
                alt="Student reading"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-gray-800 text-2xl font-semibold mb-6">
                Exclusively for +2 appeared Students 2082: Get an 18% discount
                on any course you want to enroll and unlock endless
                possibilities.
              </h2>

              <p className="text-gray-700 mb-4">
                GoldTree Group extends warm congratulations to all students who
                appeared in the 2082 +2 examinations. We are excited to offer{" "}
                <span className="font-semibold">
                  exclusive IT training opportunities
                </span>{" "}
                fro students ready to shape their future in the dynamic world of
                Information Technology. We are running a{" "}
                <span className="font-semibold">
                  special 18% discount offer
                </span>
                for +2 appeared students (2082 batch).
              </p>

              <p className="text-gray-700 mb-4">
                Alongside expert-led training, we also provide{" "}
                <span className="fot-semibold">career counseling</span>
                to help you choose the right IT path for your goals.
              </p>

              <p className="text-gray-700 mb-6">
                Don't wait: seize this opportunity today! To view more,
                <a href="#" className="text-blue-600 hover:underline">
                  Click Here
                </a>
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm font-medium mb-1">
                      CALL US TODAY
                    </h3>
                    <p className="text-gray-800 font-semibold text-lg">
                      01-4111849/ 9841002000
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <div className="h-6 w-6 text-white flex items-center justify-center font-bold">
                      <Percent />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm font-medium mb-1">
                      OFFER
                    </h3>
                    <p className="text-gray-800 font-semibold text-lg">
                      18% OFF
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <div className="h-6 w-6 text-white flex items-center justify-center font-bold">
                      <Book />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm font-medium mb-1">
                      COURSES
                    </h3>
                    <p className="text-gray-800 font-semibold text-lg">
                      ALL COURSES
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
