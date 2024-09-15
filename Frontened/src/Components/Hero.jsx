import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Text Section - Left */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Our Platform
            </h1>
            <p className="text-gray-600 mb-8">
              Discover the best services to grow your business and improve your online presence. We offer exceptional solutions that help you succeed.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark"
            >
              Get Started
            </a>
          </div>

          {/* Image Section - Right */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <img
              src="https://via.placeholder.com/500"
              alt="Hero Image"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
