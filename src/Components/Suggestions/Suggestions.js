import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Toast from '../Toast/Toast';

function Suggestions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: '',
  });

  const [toast, setToast] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
        setToast(false);
    }, 5000)
  } , [toast])
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Validate input fields
    if (!formData.name || !formData.email || !formData.suggestion) {
      // Display a message or perform any action to notify the user about the empty fields
      alert('Please fill in all fields');
      return;
    }
  
    console.log('Form data submitted:', formData);
  
    axios
      .post('http://localhost:3002/Suggestions', formData)
      .then((res) => {
        console.log(formData);
        setFormData({
          name: '',
          email: '',
          suggestion: '',
        });
        setToast(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
        {toast && <Toast message={"Your suggestions has been sent successfully"}></Toast>}
      <form
        className='bg-white p-8 rounded-md shadow-md w-96'
        onSubmit={handleSubmit}
      >
        <h2 className='text-2xl font-bold mb-6 text-center'>Submit Your Suggestion</h2>

        <div className='mb-4'>
          <label htmlFor='nameInput' className='block text-gray-700 font-bold mb-2'>
            Name:
          </label>
          <input
            type='text'
            id='nameInput'
            name='name'
            placeholder='Enter name'
            className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500'
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='emailInput' className='block text-gray-700 font-bold mb-2'>
            Email:
          </label>
          <input
            type='email'
            placeholder='Enter email'
            id='emailInput'
            name='email'
            className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500'
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='suggestionInput' className='block text-gray-700 font-bold mb-2'>
            Provide your suggestion:
          </label>
          <textarea
            id='suggestionInput'
            placeholder='Enter Suggestions'
            name='suggestion'
            rows='4'
            className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500'
            value={formData.suggestion}
            onChange={handleChange}
          />
        </div>

        <div className='text-center'>
          <button
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Suggestions;
