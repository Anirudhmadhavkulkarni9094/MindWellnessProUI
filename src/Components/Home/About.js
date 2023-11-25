import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='h-screen relative w-screen overflow-hidden'>
      <div className='p-24 flex flex-col gap-10'>
        <h1 className='text-5xl font-bold text-blue-700'>About</h1>
        <h4 className='w-3/4 font-mono font-bold text-gray-600 z-30'>
          MindWellness Pro is on a mission to provide accessible and effective mental health support. We combine advanced technology with compassionate care to help you on your mental health journey. Our team of professionals is dedicated to your well-being.
        </h4>
      </div>
      <motion.h1
        className='h-60 w-60 absolute bottom-0 left-0 bg-yellow-100 rounded-full'
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', damping: 7, duration: 2 }}
      ></motion.h1>
      <motion.h1
        className='h-96 w-96 absolute top-0 right-10 bg-yellow-100 rounded-full'
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', damping: 7, duration: 2 }}
      ></motion.h1>
      <div className='mx-20'>
        <motion.div className='p-10 about overflow-x-auto z-10 flex justify-center gap-10'
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
        >
          {Array.from({ length: 7 }).map((_, index) => (
            <motion.div
              key={index}
              className='bg-red-400 p-5 rounded-lg text-center'
              initial={{ scale: 0.95, rotate: '0deg' }}
              whileHover={{ scale: 1.05, rotate: '-5deg' }}
            >
              <h1>🤔</h1>
              <h3 className='text-white font-bold py-2'>Assessment</h3>
              <p className='text-white w-80'>
                Take our mental health assessment to gain insights into your well-being and receive personalized recommendations.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
