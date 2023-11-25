import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='flex items-center justify-center h-screen relative bg-bgblue rounded-3xl -top-20 gap-10 z-30 overflow-hidden'>
      <motion.div className='flex flex-col gap-5 font-home z-20 h-fit'
        initial={{ opacity: 0, transform: "translateY(100%)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-5xl font-bold text-center sm:text-left'><span className='text-2xl block'>Welcome to</span> MindWellness Pro</h1>
        <h4 className='text-lg text-center sm:text-left'>Your Mental Health Companion</h4>
        <Link to='/Assessment' className='w-36 px-4 py-2 bg-cyan-400 hover:bg-cyan-500 rounded-2xl text-white font-mono font-bold'>
          Get Started
        </Link>
      </motion.div>
      <motion.div className='z-30'
        initial={{ opacity: 0, transform: "translateY(100%)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 0.5 }}
      >
        <img src={require('../Assets/homeImg.png')} className='z-30 w-full max-w-screen-xl mx-auto sm:w-96' alt='MindWellness Pro' />
      </motion.div>
      <motion.img src={require('../Assets/home-l.png')} className='absolute left-0 top-20 w-full max-w-screen-xl mx-auto sm:w-96'
        initial={{ opacity: 0, transform: "translateX(-100%)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        transition={{ duration: 0.5 }}
      ></motion.img>
      <motion.img src={require('../Assets/home-r.png')} className='absolute right-0 bottom-20 w-full max-w-screen-xl mx-auto sm:w-96'
        initial={{ opacity: 0, transform: "translateX(100%)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        transition={{ duration: 0.5 }}
      ></motion.img>
      <motion.img src={require('../Assets/leaf.png')} className='absolute top-20 hidden sm:block'
        initial={{ transform: "translateY(100%)" }}
        whileInView={{ transform: "translateY(0)" }}
      ></motion.img>
      <motion.img src={require('../Assets/leaf.png')} className='absolute bottom-20 left-0 hidden sm:block'
        initial={{ transform: "translateY(120%)", rotate: "0deg" }}
        whileInView={{ transform: "translateY(0)", rotate: "90deg" }}
      ></motion.img>
    </div>
  );
}

export default Home;
