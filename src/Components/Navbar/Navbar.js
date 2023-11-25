import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <motion.div
      className='py-5 px-10 sticky top-0 backdrop-blur-lg w-full font-bold font-navbar z-40'
      initial={{ opacity: 0, transform: 'translateY(-100%)' }}
      animate={{ opacity: 1, transform: 'translateY(0)' }}
    >
      <ul className='flex justify-between items-center flex-wrap'>
        <h1 className='lg:text-2xl md:text-xl sm:text-md mb-5 md:mb-0'>MindWellnessPro</h1>
        <div className='flex gap-10 hidden lg:flex sm:hidden'>
          <Link to='/Home' className='cursor-pointer'>
            Home
          </Link>
          <Link to='/Assessment' className='cursor-pointer'>
            Assessment
          </Link>
          <Link to='/Contact us' className='cursor-pointer'>
            Contact us
          </Link>
          <Link to='/Resources' className='cursor-pointer'>
            Resources
          </Link>
        </div>
        <button className='bg-blue-500 text-white p-3 rounded-2xl shadow-2xl lg:text-xl md:text-xl sm:text-md'>
          Login
        </button>
      </ul>
    </motion.div>
  );
}

export default Navbar;
