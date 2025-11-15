import React from "react";
import { Link } from "react-router";

const Platform = () => {
  return (
    <div>
      {/* Static Section 2: Platform Statistics - Card Grid Style */}
      <section >
        {/* Animated background elements */}
        {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div> */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-4">
              Platform at a Glance
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Join thousands of AI developers and researchers building the
              future of artificial intelligence
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Stat 1 */}
            <div className="group">
              <div className=" backdrop-blur-lg border border-white/20 rounded-2xl bg-gray-400 p-8 text-center transform transition-all duration-300 hover:scale-110 hover:bg-white/20">
                <div className="text-6xl mb-4">🤖</div>
                <div className="text-5xl font-bold  mb-2">10K+</div>
                <div className="text-xl ">AI Models</div>
                <p className="text-sm  mt-2">
                  Diverse collection across all major frameworks
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group">
              <div className="bg-gray-400 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-110 hover:bg-white/20">
                <div className="text-6xl mb-4">👥</div>
                <div className="text-5xl font-bold  mb-2">50K+</div>
                <div className="text-xl ">Active Users</div>
                <p className="text-sm  mt-2">
                  Global community of developers and researchers
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group">
              <div className="bg-gray-400 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-110 hover:bg-white/20">
                <div className="text-6xl mb-4">⚡</div>
                <div className="text-5xl font-bold  mb-2">100K+</div>
                <div className="text-xl ">Downloads</div>
                <p className="text-sm  mt-2">
                  Models deployed in production worldwide
                </p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="group">
              <div className="bg-gray-400 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-110 hover:bg-white/20">
                <div className="text-6xl mb-4">⭐</div>
                <div className="text-5xl font-bold  mb-2">4.8/5</div>
                <div className="text-xl ">Average Rating</div>
                <p className="text-sm  mt-2">
                  High-quality models trusted by experts
                </p>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-600/30 to-blue-800/30 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold  mb-4 text-center">
                Lightning Fast
              </h3>
              <p className=" text-center leading-relaxed">
                Optimized infrastructure ensures quick model uploads, searches,
                and downloads with minimal latency across all regions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-600/30 to-purple-800/30 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold  mb-4 text-center">
                Secure & Private
              </h3>
              <p className=" text-center leading-relaxed">
                Enterprise-grade security with Firebase authentication and
                MongoDB encryption keeps your models and data completely safe.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-pink-600/30 to-pink-800/30 backdrop-blur-lg border border-pink-500/30 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold  mb-4 text-center">
                AI-Powered
              </h3>
              <p className=" text-center leading-relaxed">
                Smart recommendations, automated tagging, and intelligent search
                help you discover the perfect models for your projects.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link
              to="/register"
              className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Join Our Community Today
            </Link>
            <p className=" mt-4">
              Free forever • No credit card required • Start in seconds
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;
