import React from 'react'
import { motion } from 'framer-motion'

function AboutUs() {
  return (
    <div className='relative  overflow-x-hidden'>
        <div className='p-20'>
            <h1 className='text-5xl font-bold py-5'>About</h1>
            <h2 className='text-xl font-thin w-4/5 text-justify'> MindWellness Pro is on a mission to provide accessible and effective mental health support. We combine advanced technology with compassionate care to help you on your mental health journey. Our team of professionals is dedicated to your well-being.</h2>
        </div>
        <motion.div className='m-auto px-20 z-20'
            initial = {{x : "-100%"}}
            whileInView={{x: 0}}
            transition={{type : "spring" , damping : 9}}
        >
            <div className='flex overflow-x-scroll about'>
                <motion.div className='bg-red-400 rounded-lg text-center px-10 m-5 py-5'
                    initial={{scale : 0.95 , rotate : 0}}
                    whileHover={{scale : 1 , rotate : -5}}
                    transition={{type:"spring" , damping : 5}}
                >
                    <h1>🤔</h1>
                    <h3 className='text-white font-bold py-2'>Assessment</h3>
                    <p className='text-white w-72'>
                        Take our mental health assessment to gain insights into your well-being and receive personalized recommendations.
                    </p>
                </motion.div>
                <motion.div className='bg-green-800 rounded-lg text-center px-10 m-5 py-5'
                initial={{scale : 0.95 , rotate : 0}}
                whileHover={{scale : 1 , rotate : -5}}
                transition={{type:"spring" , damping : 5}}
                >
                    <h1>🤔</h1>
                    <h3 className='text-white font-bold py-2'>Assessment</h3>
                    <p className='text-white w-72'>
                        Take our mental health assessment to gain insights into your well-being and receive personalized recommendations.
                    </p>
                </motion.div>
                <motion.div className='bg-blue-800 rounded-lg text-center px-10 m-5 py-5'
                    initial={{scale : 0.95 , rotate : 0}}
                    whileHover={{scale : 1 , rotate : -5}}
                    transition={{type:"spring" , damping : 5}}
                >
                    <h1>🤔</h1>
                    <h3 className='text-white font-bold py-2'>Assessment</h3>
                    <p className='text-white w-72'>
                        Take our mental health assessment to gain insights into your well-being and receive personalized recommendations.
                    </p>
                </motion.div>
                <motion.div className='bg-black rounded-lg text-center px-10 m-5 py-5'
                    initial={{scale : 0.95 , rotate : 0}}
                    whileHover={{scale : 1 , rotate : -5}}
                    transition={{type:"spring" , damping : 5}}
                >
                    <h1>🤔</h1>
                    <h3 className='text-white font-bold py-2'>Assessment</h3>
                    <p className='text-white w-72'>
                        Take our mental health assessment to gain insights into your well-being and receive personalized recommendations.
                    </p>
                </motion.div>
                <motion.div className='bg-yellow-500 rounded-lg text-center px-10 m-5 py-5'
                    initial={{scale : 0.95 , rotate : 0}}
                    whileHover={{scale : 1 , rotate : -5}}
                    transition={{type:"spring" , damping : 5}}
                >
                    <h1>🤔</h1>
                    <h3 className='text-white font-bold py-2'>Assessment</h3>
                    <p className='text-white w-72'>
                        Take our mental health assessment to gain insights into your well-being and receive personalized recommendations.
                    </p>
                </motion.div>
                <motion.div className='bg-violet-800 rounded-lg text-center px-10 m-5 py-5'
                    initial={{scale : 0.95 , rotate : 0}}
                    whileHover={{scale : 1 , rotate : -5}}
                    transition={{type:"spring" , damping : 5}}
                >
                    <h1>🤔</h1>
                    <h3 className='text-white font-bold py-2'>Assessment</h3>
                    <p className='text-white w-72'>
                        Take our mental health assessment to gain insights into your well-being and receive personalized recommendations.
                    </p>
                </motion.div>
            </div>
        </motion.div>
        <motion.div className='h-72 w-72 -z-10 bg-yellow-200 absolute bottom-0 rounded-full'
        initial = {{x : '-100%'}}
        whileInView={{x: 10}}
        ></motion.div>
        <motion.div className='h-80 w-80 -z-10 bg-yellow-200 absolute top-10 right-10 rounded-full'
        initial = {{x : '100%'}}
        whileInView={{x: 10}}
        ></motion.div>
    </div>
  )
}

export default AboutUs