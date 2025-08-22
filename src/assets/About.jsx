import React from 'react'
import { easeIn, motion, spring } from 'framer-motion'
import githubLlogo from '/github.png'
import instagramLlogo from '/instagram.png'
import linkedInLogo from '/linkedin.png'
import twitterLogo from '/twitter.png'

const lineVariant = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    opacity: 0.5,
    transition: { duration: 2, delay: 2, ease: 'easeOut' },
  },
}

const About = () => {
  return (
    <>
      <motion.div
        className="p-5 sm:p-10 bg-indigo-950 min-h-screen flex flex-col items-center space-y-6 sm:space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: easeIn }} >
        <h1 className="text-3xl sm:text-5xl font-bold text-cyan-600 text-center">
          About Blaicy Mokaya.
        </h1>
        <h3 className="text-lg sm:text-xl font-semibold text-cyan-500 text-center">
          Software Developer | UI/UX Designer
        </h3>
        <motion.hr
          className="my-2 w-full border-white"
          variants={lineVariant}
          initial="hidden"
          animate="visible"/>
        <p className="text-white font-medium tracking-wide text-sm sm:text-base text-center sm:text-left max-w-3xl">
          Hi, I’m Blaicy. I’m passionate about creating digital experiences
          that are functional, intuitive, and visually engaging. I enjoy
          combining code and design to bring ideas to life. I believe
          technology should be simple, accessible, and delightful.
        </p>
        <motion.hr
          className="my-2 w-full border-white"
          variants={lineVariant}
          initial="hidden"
          animate="visible"/>
        <div className='flex text-left self-start items-center space-x-3'>
        <div className=" bg-cyan-500 aspect-square h-3 rotate-45 border-2 border-white shadow-lg"></div>
        <h1 className="text-xl sm:text-2xl font-semibold text-cyan-500  w-full max-w-3xl">
          Frontend Development
        </h1></div>
        <div className="text-white space-y-2 font-medium tracking-wide text-sm sm:text-base max-w-3xl">
          <p>
            I bring designs to life by creating responsive, user-friendly
            interfaces. My focus is on building experiences that are visually
            engaging, intuitive, and optimized for all users and devices.
          </p>
          <div className="flex flex-row sm:flex-row sm:items-center sm:space-x-2">
            <span className="bg-white aspect-square h-1 w-1"></span>
            <p>Languages: HTML, CSS, JavaScript</p>
          </div>
          <div className="flex flex-row sm:flex-row sm:items-center sm:space-x-2">
            <span className="bg-white aspect-square h-1 w-1 "></span>
            <p>Frameworks/Libraries: React, TailwindCSS, Framer Motion</p>
          </div>
        </div>
        <motion.hr
          className="my-2 w-full border-white"
          variants={lineVariant}
          initial="hidden"
          animate="visible"/>
        <div className='flex text-left self-start items-center space-x-3'>
        <div className=" bg-cyan-500 aspect-square h-3 rotate-45 border-2 border-white shadow-lg"></div>
        <h1 className="text-xl sm:text-2xl font-semibold text-cyan-500  w-full max-w-3xl">
          Backend Development
        </h1></div>
        <div className="text-white space-y-2 font-medium text-sm sm:text-base max-w-3xl">
          <p>
            I develop the backbone of digital products by building robust APIs,
            managing databases, and ensuring smooth data flow. With backend
            technologies, I focus on performance, scalability, and
            security—making sure applications run reliably and efficiently.
          </p>
          <div className="flex flex-row sm:flex-row sm:items-center sm:space-x-2">
            <span className="bg-white aspect-square h-1 w-1"></span>
            <p>Languages: Python | Mongo DB</p>
          </div>
          <div className="flex flex-row sm:flex-row sm:items-center sm:space-x-2">
            <span className="bg-white aspect-square h-1 w-1 "></span>
            <p>Frameworks/Libraries: Django</p>
          </div>
        </div>
        <motion.hr
          className="my-2 w-full border-white"
          variants={lineVariant}
          initial="hidden"
          animate="visible"/>
        <div className='flex text-left self-start items-center space-x-3'>
        <div className=" bg-cyan-500 aspect-square h-3 rotate-45 border-2 border-white shadow-lg"></div>
        <h1 className="text-xl sm:text-2xl font-semibold text-cyan-500  w-full max-w-3xl">
          UI & IX Design
        </h1></div>
        <div className="text-white space-y-2 font-medium text-sm sm:text-base max-w-3xl">
          <p>
            I craft user-centered designs that balance aesthetics with
            functionality. From wireframes to final visuals, I focus on creating
            interfaces that are intuitive, accessible, and visually engaging.
          </p>
        </div>
        <motion.hr
          className="my-2 w-full border-white"
          variants={lineVariant}
          initial="hidden"
          animate="visible"/>
        <div className='flex text-left self-start items-center space-x-3'>
          <div className=" bg-cyan-500 aspect-square h-3 rotate-45 border-2 border-white shadow-lg"></div>
          <h1 className="text-xl sm:text-2xl font-semibold text-cyan-500  w-full max-w-3xl">
          Tools
          </h1></div>
        <div className="text-white space-y-2 font-medium text-sm sm:text-base max-w-3xl">
          <p>
            Tools I'm conversant with:
          </p>
          <div className="flex flex-row sm:flex-row sm:items-center sm:space-x-2">
            <span className="bg-white aspect-square h-1 w-1"></span>
            <p>VS Code – My go-to editor, customized with extensions and Git integration.</p>
          </div>
          <div className="flex flex-row sm:flex-row sm:items-center sm:space-x-2">
            <span className="bg-white aspect-square h-1 w-1"></span>
            <p>Git & GitHub – Familiar with version control, branching, and collaborative workflows.</p>
          </div>
          <div className="flex flex-row sm:flex-row sm:items-center sm:space-x-2">
            <span className="bg-white aspect-square h-1 w-1"></span>
            <p>Canva – Handy for designing quick visuals, social media posts, and UI concepts.</p>
          </div>
        </div>
        <motion.hr
          className="my-2 w-full border-white"
          variants={lineVariant}
          initial="hidden"
          animate="visible"/>
        <div className='flex text-left self-start items-center space-x-3'>
        <div className=" bg-cyan-500 aspect-square h-3 rotate-45 border-2 border-white shadow-lg"></div>
        <h1 className="text-xl sm:text-2xl font-semibold text-cyan-500  w-full max-w-3xl">
          See My Work
        </h1></div>
        <div className="flex flex-col">
          <motion.button
            className="px-6 py-2 mt-3 border-2 rounded-full bg-cyan-500 text-black font-medium w-full sm:w-auto"
            initial={{ x: '-100vw' }}
            animate={{
              x: 0,
              transition: { type: spring, stiffness: 100, delay: 4, duration: 4 },
            }}
            whileHover={{
              scale: 1.1,
              background: '#facc15',
              transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1.5,
              },
            }}>
            <a
              href="https://github.com/Blaicy"
              target="_blank"
              rel="noopener noreferrer">
              Code Projects
            </a>
          </motion.button>
          <motion.button
            className="px-6 py-2 mt-3 border-2 rounded-full bg-cyan-500 text-black font-medium w-full sm:w-auto"
            initial={{ x: '-100vw' }}
            animate={{
              x: 0,
              transition: { type: spring, stiffness: 100, delay: 4, duration: 4 },
            }}
            whileHover={{
              scale: 1.1,
              background: '#facc15',
              transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1.5,
              },}}>
            <a
              href="https://github.com/Blaicy"
              target="_blank"
              rel="noopener noreferrer">
              Designs
            </a>
          </motion.button>
        </div>
        <motion.hr
          className="my-2 w-full border-white"
          variants={lineVariant}
          initial="hidden"
          animate="visible"/>
        <div className="flex justify-center sm:justify-start space-x-5 m-5">
          <a
            href="https://www.X.com/98_Howie"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 sm:w-10 h-8 sm:h-10 hover:opacity-50">
            <img src={twitterLogo} alt='twitter'/>
          </a>
          <a
            href="https://www.instagram.com/_blaicy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 sm:w-10 h-8 sm:h-10 hover:opacity-50">
            <img src={instagramLlogo} alt='instagram'/>
          </a>
          <a
            href="https://www.linkedin.com/in/blaicymokaya"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 sm:w-10 h-8 sm:h-10 hover:opacity-50">
            <img src={linkedInLogo} alt='linkedIn'/>
          </a>
          <a
            href="https://github.com/Blaicy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 sm:w-10 h-8 sm:h-10 hover:opacity-50">
            <img src={githubLlogo} alt='github'/>
          </a>
        </div>
      </motion.div>
    </>
  )
}

export default About
