import React from "react";

const page = () => {
  return (
    <div className="bg-white">
      <header className="bg-purple-700 text-white text-center py-9">
        <h1 className="text-4xl font-bold mt-16">About Us</h1>
      </header>
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our goal is to offer top-notch services with a strong emphasis on
          accessibility, dependability, and assistance.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">85+</h3>
            <p className="text-gray-700">Expert Professionals</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">25+</h3>
            <p className="text-gray-700">Years of Expertise</p>
          </div>
        </div>
      </section>

      <section className="bg-purple-700 text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          Seamless access anytime, anywhere. We strive to redefine the industry
          by making high-quality services easily available to everyone, ensuring
          convenience and reliability at every step.
        </p>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Our Expertise & Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors">
            <h3 className="text-xl font-bold">Reliable Link Shortening</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors">
            <h3 className="text-xl font-bold">Customizable Short URLs</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors">
            <h3 className="text-xl font-bold">Secure & Scalable Solutions</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors">
            <h3 className="text-xl font-bold">Analytics & Tracking</h3>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">
          Cutting-Edge Technology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">URL Management System</h3>
            <p className="text-gray-700 mt-2">
              We do seamless and secure access to all your shortened links.
            </p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Smart Redirection</h3>
            <p className="text-gray-700 mt-2">
              Optimized and efficient routing for a smooth user experience.
            </p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Custom Short Links</h3>
            <p className="text-gray-700 mt-2">
              Create branded and personalized short URLs.
            </p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Advanced Analytics</h3>
            <p className="text-gray-700 mt-2">
              Track clicks, locations, and performance with real-time data..
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">
          Committed to Seamless and Efficient Link Management
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors">
            <h3 className="text-xl font-bold">Custom Short Links</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors">
            <h3 className="text-xl font-bold">Expert Support</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors">
            <h3 className="text-xl font-bold">Seamless Experience</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors">
            <h3 className="text-xl font-bold">Start Shortening</h3>
          </div>
        </div>
      </section>

      <section className="bg-purple-500 text-white text-center py-12 px-4">
        <h2 className="text-2xl font-bold">User Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors">
            <p>
              "Shortening links has never been easier! The process is fast,
              simple, and reliable."
            </p>
            <h3 className="mt-4 font-bold">- Emily</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors">
            <p>
              "This URL shortener is a game changer! Easy to use and perfect for
              sharing links efficiently."
            </p>
            <h3 className="mt-4 font-bold">- Anas</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors">
            <p>
              "I love the custom short links! Tracking clicks and engagement has
              never been this simple."
            </p>
            <h3 className="mt-4 font-bold">- Suryansh</h3>
          </div>
        </div>
      </section>

      <section className="text-center py-12 px-4 w-full">
        <h2 className="text-2xl font-bold">
          Get Answer To Your Most Asked Questions
        </h2>
        <div className="mt-8">
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
            <h3 className="text-xl font-bold">How do I shorten a URL?</h3>
            <p className="mt-2 text-gray-700">
              You can easily shorten a URL by pasting it into our website and
              clicking the "Shorten" button.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">
              Can I customize my short link?
            </h3>
            <p className="mt-2 text-gray-700">
              Yes! Our platform allows you to create custom short links for
              better branding and recognition.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">Do shortened links expire?</h3>
            <p className="mt-2 text-gray-700">
              No, your links remain active unless you choose to delete them.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">
              Is the URL shortener free to use?
            </h3>
            <p className="mt-2 text-gray-700">
              Yes, our basic URL shortening service is completely free.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-purple-700 text-white text-center py-8">
        <p>
          &copy; Copyright <b>BitLinks</b> . All rights reserved. Made By Binary
          Boats⛵
        </p>
      </footer>
    </div>
  );
};

export default page;
