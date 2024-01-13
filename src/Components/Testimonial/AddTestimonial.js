import React, { useState } from 'react';
import axios from 'axios';

const AddTestimonial = () => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://mindwellnesspro.onrender.com/Testimonial', {
        author: author,
        message: message,
      });

      setAuthor("")
      setMessage("")
      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Testimonial could not be added. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Testimonial</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-bold mb-2">
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter author's name"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Testimonial Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Enter testimonial message"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit Testimonial
          </button>
        </div>
      </form>

      {successMessage && (
        <div className="mt-4 text-green-600 text-center">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="mt-4 text-red-600 text-center">{errorMessage}</div>
      )}
    </div>
  );
};

export default AddTestimonial;
