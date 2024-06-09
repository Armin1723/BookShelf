import React from 'react'
import { motion } from 'framer-motion'
import { formatSectionBackground } from '../utils/theming'
import { useSelector } from 'react-redux'

const Home = () => {

  const theme = useSelector((state) => state.theme.value)

  return (
    <motion.div 
      className={` rounded-t-2xl h-screen flex flex-col items-center justify-center mt-2 ${formatSectionBackground(theme)}`} 
      initial={{ y: 24, opacity : 0.4 }} 
      animate={{ y : 0, opacity : 1 }}  
      exit={{ y : 24}}
      transition={{ ease: "easeOut", duration: 0.4 }}
    >
      <div className='text-[6vh] font-extralight '>Book Shelf</div>
      <p className='text-sm font-extralight px-8 leading-4 text-opacity-80'>Your one stop solution to find details on any kind of book and save it for later.</p>
    </motion.div>
  )
}

export default Home
