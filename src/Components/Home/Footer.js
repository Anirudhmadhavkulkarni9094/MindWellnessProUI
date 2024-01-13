import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">MindWellness Pro</h2>
            <p>Your Mental Health Companion</p>
          </div>
          <div className="flex space-x-4">
            <a href="/">Home</a>
            <a href="/resources">Resources</a>
            <a href="/complaints">Complaints</a>
            <a href="/suggestions">Suggestions</a>
            <a href="/forum">Forum</a>
            <a href="/reports">Reports</a>
          </div>
          <div>
            <p>Welcome to MindWellness Pro</p>
            <p>Your Mental Health Companion</p>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        <div className="text-center">
          <p>&copy; 2024 MindWellness Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
