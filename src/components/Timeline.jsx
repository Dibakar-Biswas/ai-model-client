import React from "react";

const Timeline = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with AI Model Inventory in four simple steps
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Create Account
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Sign up using your email or Google account. It takes less
                    than 30 seconds to join our community of AI developers and
                    researchers.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl flex items-center justify-center h-64">
                  <div className="text-center">
                    <svg
                      className="w-32 h-32 mx-auto text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    <p className="text-blue-800 font-semibold mt-4">
                      Quick Registration
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center mb-12">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-600">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Add Your Models
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Upload your AI models with detailed information including
                    framework, dataset, use case, and description. Add images to
                    make them visually appealing.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-2xl flex items-center justify-center h-64">
                  <div className="text-center">
                    <svg
                      className="w-32 h-32 mx-auto text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="text-purple-800 font-semibold mt-4">
                      Upload Models
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-green-600">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Discover & Rate
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Browse through thousands of AI models, filter by framework
                    or use case, and rate models to help others find the best
                    solutions.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-2xl flex items-center justify-center h-64">
                  <div className="text-center">
                    <svg
                      className="w-32 h-32 mx-auto text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <p className="text-green-800 font-semibold mt-4">
                      Search & Filter
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-pink-600">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-800 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      4
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Collaborate & Share
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Purchase models for your projects, track your inventory, and
                    collaborate with the global AI community to advance
                    innovation.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-8 rounded-2xl flex items-center justify-center h-64">
                  <div className="text-center">
                    <svg
                      className="w-32 h-32 mx-auto text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <p className="text-pink-800 font-semibold mt-4">
                      Team Collaboration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
