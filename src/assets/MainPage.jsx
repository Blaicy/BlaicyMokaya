import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { FaMapPin } from "react-icons/fa";

const bodyVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 0.8 } }
};
const buttonVariant = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: { duration: 0.8, repeat: Infinity, repeatType: "reverse" }
  }
};

const MainPage = () => {
  return (
    <section className="min-h-screen p-5 sm:p-5 lg:p-10 ">
      <motion.div className="flex flex-row items-center space-x-2 p-5">
        <motion.img 
          src = {`${import.meta.env.BASE_URL}logo.png`} alt='Logo'
          className="w-6 sm:w-10 lg:w-18"/>
        <motion.h1 
          className="font-bold text-xl sm:text-1xl lg:text-2xl text-center sm:text-left"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, duration: 1.5 }}>
          Blaicy Mokaya
        </motion.h1>
      </motion.div>
      <motion.div 
        className="mt-20 flex flex-col items-center justify-evenly space-y-5 sm:space-y-8"
        variants={bodyVariant}
        initial="hidden"
        animate="visible">
        <motion.h1
          className="font-bold text-3xl sm:text-3xl lg:text-4xl text-indigo-900 text-center">
          Full-Stack Developer <br />
          & <br />
          Designer
        </motion.h1>
        <motion.ul className="flex flex-wrap justify-center font-medium gap-3 text-base sm:text-lg">
          <motion.li whileHover={{ scale: 1.1 }}>Developer</motion.li>|
          <motion.li whileHover={{ scale: 1.1 }}>UI/UX Designer</motion.li>|
          <motion.li whileHover={{ scale: 1.1 }}>Freelancer</motion.li>
        </motion.ul>
        <motion.div className="flex items-center space-x-2">
          <FaMapPin className="animate-bounce text-indigo-700" />
          <motion.h3 className="font-bold text-sm sm:text-base lg:text-lg text-indigo-700">
            Available for work
          </motion.h3>
        </motion.div>
        <div className="text-center leading-relaxed font-medium text-base sm:text-lg lg:text-xl">
          <p className="max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
            I am a passionate developer and UI/UX designer from Nakuru, Kenya.
            If you’re searching for someone who can bring ideas to life
            through design, code, and product strategy,
            I’ve got you covered.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 mt-5">
          <Link to="/About">
            <motion.button
              className="rounded-lg bg-indigo-700 text-white px-4 py-2 font-semibold hover:bg-cyan-600 w-full sm:w-auto"
              variants={buttonVariant}
              whileHover="hover">
              About Blaicy Mokaya
            </motion.button>
          </Link>
          <Link to="/Connect">
            <motion.button
              className="rounded-lg bg-indigo-700 text-white px-4 py-2 font-semibold hover:bg-cyan-600 w-full sm:w-auto"
              variants={buttonVariant}
              whileHover="hover">
              Let’s Connect
            </motion.button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center space-x-4 mt-5">
          <a href="https://www.X.com/98_Howie" target="_blank" rel="noopener noreferrer" className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 hover:opacity-50">
            <img src={`${import.meta.env.BASE_URL}twitter.png`} alt="twitter" />
          </a>
          <a href="https://www.instagram.com/_blaicy" target="_blank" rel="noopener noreferrer" className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 hover:opacity-50">
            <img src={`${import.meta.env.BASE_URL}instagram.png`} alt='instagram'/>
          </a>
          <a href="https://www.linkedin.com/in/blaicymokaya" target="_blank" rel="noopener noreferrer" className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 hover:opacity-50">
            <img src={`${import.meta.env.BASE_URL}linkedin.png`} alt='linkedIn'/>
          </a>
          <a href="https://github.com/Blaicy" target="_blank" rel="noopener noreferrer" className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 hover:opacity-50">
            <img src={`${import.meta.env.BASE_URL}github.png`} alt='github'/>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default MainPage;
