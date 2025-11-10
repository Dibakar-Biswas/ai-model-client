import React from "react";
import { Link } from "react-router";

const GetStarted = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Popular AI Frameworks</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our platform supports all major AI/ML frameworks. Build with the
              tools you love and share your models with a growing community of
              developers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                  TF
                </div>
                <h3 className="text-2xl font-bold">TensorFlow</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Google's open-source machine learning framework for building and
                deploying ML models at scale. Perfect for production-ready
                applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  Production Ready
                </span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  Scalable
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                  PT
                </div>
                <h3 className="text-2xl font-bold">PyTorch</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Facebook's dynamic deep learning framework loved by researchers.
                Offers intuitive debugging and flexible architecture for
                experimentation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                  Research Friendly
                </span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                  Dynamic
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                  K
                </div>
                <h3 className="text-2xl font-bold">Keras</h3>
              </div>
              <p className="text-gray-600 mb-4">
                High-level neural networks API designed for fast
                experimentation. Simple, consistent interface makes deep
                learning accessible to beginners.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                  Beginner Friendly
                </span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                  Fast Prototyping
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                  SK
                </div>
                <h3 className="text-2xl font-bold">Scikit-learn</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive machine learning library for Python. Ideal for
                classical ML algorithms like classification, regression, and
                clustering.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Classical ML
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Data Science
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                  JX
                </div>
                <h3 className="text-2xl font-bold">JAX</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Google's framework for high-performance numerical computing.
                Combines NumPy with automatic differentiation and GPU/TPU
                acceleration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  High Performance
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  GPU Optimized
                </span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                  🤗
                </div>
                <h3 className="text-2xl font-bold">Hugging Face</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Leading platform for NLP models and transformers. Access
                thousands of pre-trained models for text generation,
                classification, and translation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  NLP Focused
                </span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Pre-trained
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
