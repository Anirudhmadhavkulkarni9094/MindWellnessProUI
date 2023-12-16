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
      <ul className='flex flex-col lg:flex-row lg:justify-between items-center lg:flex-wrap'>
        <h1 className='lg:text-2xl md:text-xl sm:text-md mb-5 md:mb-0 text-center lg:text-left'>
          MindWellnessPro
        </h1>
        <div className='flex gap-6 lg:gap-10 lg:flex'>
          <Link to='/Home' className='cursor-pointer'>
            Home
          </Link>
          <Link to='/Contact us' className='cursor-pointer'>
            Contact us
          </Link>
          <Link to='/Resources' className='cursor-pointer'>
            Resources
          </Link>
          <Link to='/Forum' className='cursor-pointer'>
            Forums
          </Link>
        </div>
        <Link to='/report' className='bg-blue-500 text-white p-3 rounded-2xl shadow-2xl lg:text-xl md:text-xl sm:text-md mt-4 lg:mt-0'>
          Report
        </Link>
      </ul>
    </motion.div>
  );
}

export default Navbar;
