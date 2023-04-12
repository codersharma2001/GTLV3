import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

function SupportPage() {
  return (
    <>
    <Navbar></Navbar>
        <div className="bg-gray-100 min-h-screen">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <p className="text-lg leading-7 text-gray-500">
            If you need help with our product, please contact us using one of the following methods:
          </p>
          <ul className="mt-4 list-disc pl-8">
            <li className="text-base leading-6 text-gray-500">Email: support@example.com</li>
            <li className="text-base leading-6 text-gray-500">Phone: 1-800-123-4567</li>
            <li className="text-base leading-6 text-gray-500">Live chat: <a href="#" className="text-blue-500 hover:text-blue-700">Click here to chat</a></li>
          </ul>
        </div>
      </main>
    </div>
    </>
  );
}

export default SupportPage;
