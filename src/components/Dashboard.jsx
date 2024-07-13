import React from 'react'
import { DASHBOARD_CONTENT } from "../constants"
import profilePic from "../assets/cvpic.png"
import { motion } from "framer-motion"
const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x:0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
});
const Dashboard = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center-start">
                    <motion.h1 variant ={container(0)}
                     initial="hidden"
                     animate="visible"
                      className='pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-8xl '>Akash Sharma</motion.h1>
                        <motion.span variant ={container(0.5)}
                     initial="hidden"
                     animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent' >Full Stack Developer</motion.span>
                    <motion.p variant ={container(1)}
                     initial="hidden"
                     animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter'>{DASHBOARD_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div>
                    <img src={profilePic} alt="Profilepic" />
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Dashboard
