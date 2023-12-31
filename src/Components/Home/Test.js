import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

function Test() {
    const [test , setTest] = useState([]);
    useEffect(()=>{
        axios.get("https://mindwellnesspro.onrender.com/Testimonial/").then(res=>{
            setTest(res.data.data);
        }).catch(err=>{
            setTest([])
        })

    })
    
  return (
    <div className=' relative overflow-hidden '>
        <h1 className='text-2xl sm:text-3xl lg:text-3xl xl:text-3xl px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-10 sm:py-16 lg:py-24 xl:py-32 font-bold font-home'>What Our Users Say</h1>
        <motion.div className='m-auto px-10 z-60'
            initial={{scale : 0.5}}
            whileInView={{scale : 1}}    
        >
            <div className='flex overflow-x-scroll about '>
                {test.map((test , index)=>{
                    return <motion.div key={index} className='bg-gray-600 rounded-lg text-center h-52 flex justify-between flex-col p-5 m-5 z-50'
                    initial={{scale : 0.95 , rotate : 0}}
                    whileHover={{scale : 1 , rotate : -5}}
                    transition={{type:"spring" , damping : 5}}
                >
                    <p className='text-white w-72'>
                        {test.message}
                    </p>
                    <h1 className='text-sm text-white p-5'>-{test.author}</h1>
                </motion.div>
                })}
            </div>
        </motion.div>
        <motion.img src={require("../Assets/test-l.png")} className='absolute top-10 left-10 -z-10 w-96'
         initial = {{x : "-100%"}}
         whileInView={{x : 0}}
         transition={{ duration: 0.5 }}
        >
        </motion.img>
        <motion.img src={require("../Assets/leaf.png")} className='absolute top-20 -z-10 left-1/2'
            initial = {{x : "-100%"}}
            whileInView={{x : 0}}
            transition={{ duration: 0.5 }}
        ></motion.img>
        <motion.img src={require("../Assets/leaf.png")} className='absolute bottom-20 -z-10 right-2/3 rotate-90' 
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