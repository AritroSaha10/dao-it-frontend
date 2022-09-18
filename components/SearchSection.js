import React from 'react'
import { motion } from 'framer-motion'
import { FaPlus } from 'react-icons/fa'

const SearchSection = ({ name, price, numberTokens }) => {
  return (
    <motion.div className='flex justify-center h-full my-8 bg-sky-400/[0.8] text-cyan-50 rounded-xl'
    whileHover={{scale:1.05}}
    whileTap={{scale:0.95}}>
       <div className='flex w-full h-40 bg-srounded-xl shadow-xl'>
          <button className='ml-16 h-full items-center flex flex-col justify-center'>
            <div className='text-5xl mb-2 rounded-lg'><FaPlus /></div>
            <h1 className='text-3xl mt-2'>Wishlist</h1>
          </button>
          <div className='flex items-center mr-32 text-4xl w-full justify-evenly h-full'>
            <h1 className=''>{name}</h1>
            <h1 className=''>{price}</h1>
            <h1 className=''>{numberTokens}</h1>
          </div>
      </div>
    </motion.div>
  )
}

export default SearchSection