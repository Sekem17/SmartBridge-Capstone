// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Nav'; // Or adjust the path to your main Navbar

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-12">
          Have questions or need expert agricultural advice? Reach out to us through any of the channels below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* WhatsApp Link */}
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">W</div>
            <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
            <p className="text-sm text-gray-500 mt-2">Chat with our experts</p>
          </a>

          {/* Email Link */}
          <a 
            href="mailto:support@agritech.com?subject=AgriTech%20Support%20Inquiry" 
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">E</div>
            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
            <p className="text-sm text-gray-500 mt-2">Send us a detailed query</p>
          </a>

          {/* Instagram Link */}
          <a 
            href="https://instagram.com/agritech_official" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-12 w-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">I</div>
            <h3 className="text-lg font-semibold text-gray-900">Instagram</h3>
            <p className="text-sm text-gray-500 mt-2">Follow for daily tips</p>
          </a>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;