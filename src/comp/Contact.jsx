// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 mt-[250px] md:mt-0" id='contact'>
      {/* Contact Form */}
      <div className="w-[80%] md:w-[40%] bg-[#237] p-8 rounded-lg shadow-lg md:mr-4 mb-8 md:mb-0 text-[#FDF0D5]">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-white font-semibold mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button className="w-full bg-blue-400 text-white py-3 rounded-lg hover:bg-blue-300 transition-colors duration-300">
            Send Message
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-[80%] md:w-1/2">
        <img
          src="https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww" // Replace with an actual image URL
          alt="Contact"
          className="w-[100%] mt-10 md:mt-0 md:w-[80%] h-full object-cover rounded-[5%] md:ml-24 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Contact;
