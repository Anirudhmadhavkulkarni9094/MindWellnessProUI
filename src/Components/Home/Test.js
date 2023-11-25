import React from 'react'
import { motion } from 'framer-motion'

function Test() {
  return (
    <div className=' relative overflow-x-hidden '>
        <h1 className='text-3xl px-40 py-20 font-bold font-home'>What Our Users Say</h1>
        <motion.div className='m-auto px-20 z-20'
            initial={{scale : 0}}
            whileInView={{scale : 1}}    
        >
            <div className='flex overflow-x-scroll about '>
                <motion.div className='bg-gray-600 rounded-lg text-center px-10 m-5 py-5 z-40'
                    initial={{scale : 0.95 , rotate : 0}}
                    whileHover={{scale : 1 , rotate : -5}}
                    transition={{type:"spring" , damping : 5}}
                >
                    <p className='text-white w-72'>
                       MindWellness Pro has made a profound impact on my mental health journey. The assessments have provided valuable insights, and the therapist I connected with has been incredibly supportive.
                    </p>
                    <h1 className='text-sm text-white p-5'>-Emily</h1>
                </motion.div>
                <motion.div className='bg-gray-600 rounded-lg text-center px-10 m-5 py-5 z-40 '
                initial={{scale : 0.95 , rotate : 0}}
                whileHover={{scale : 1 , rotate : -5}}
                transition={{type:"spring" , damping : 5}}
                >
                    
                    <p className='text-white w-72'>
                       MindWellness Pro has made a profound impact on my mental health journey. The assessments have provided valuable insights, and the therapist I connected with has been incredibly supportive.
                    </p>
                    <h1 className='text-sm text-white p-5'>-Emily</h1>
                </motion.div>
                <motion.div className='bg-gray-600 rounded-lg text-center px-10 m-5 py-5 z-40 '
                    initial={{scale : 0.95 , rotate : 0}}
                    whileHover={{scale : 1 , rotate : -5}}
                    transition={{type:"spring" , damping : 5}}
                >
                    
                    <p className='text-white w-72'>
                       MindWellness Pro has made a profound impact on my mental health journey. The assessments have provided valuable insights, and the therapist I connected with has been incredibly supportive.
                    </p>
                    <h1 className='text-sm text-white p-5'>-Emily</h1>
                </motion.div>
            </div>
        </motion.div>
        <motion.img src={require("../Assets/test-l.png")} className='absolute top-10 left-10 -z-10 w-96'
         initial = {{x : "-100%"}}
         whileInView={{x : 0}}
         transition={{ duration: 0.5 }}
        >
        </motion.img>
        <motion.img src={require("../Assets/leaf.png")} className='absolute top-20 z-0 left-1/2'
            initial = {{x : "-100%"}}
            whileInView={{x : 0}}
            transition={{ duration: 0.5 }}
        ></motion.img>
        <motion.img src={require("../Assets/leaf.png")} className='absolute bottom-20 z-0 right-2/3 rotate-90' 
            initial = {{x : "100%"}}
            whileInView={{x : 0}}
            transition={{ duration: 0.5 }}
        ></motion.img>
        <motion.img src={require("../Assets/test-r.png")} className='absolute bottom-10 right-0 z-0 '
            initial = {{x : "100%"}}
            whileInView={{x : 0}}
            transition={{ duration: 0.5 }}
        >
        </motion.img>
    <div className="relative w-32 h-16">
      <div className="absolute w-32 h-32 bg-gray-200 rounded-full clip-path-[50% 100% 0% 0%]">
        <div
          className="w-32 h-32 bg-blue-500 rounded-full clip-path-[50% 100% 0% 0%]"
          style={{ transform: `rotate(${2}deg)` }}
        ></div>
      </div>
    </div>




    </div>
  )
}

export default Test