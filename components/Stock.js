import React from 'react'
import { motion } from 'framer-motion'
import { FaPlus } from 'react-icons/fa'

const Stock = ({ name, price, numberTokens }) => {
  return (
    <motion.div className='flex justify-center h-full my-4'
    whileHover={{scale:1.05}}
    whileTap={{scale:0.95}}>
      <div className='flex w-full h-20 bg-gray-300 rounded-xl shadow-xl'>
          <div className='flex mr-32 text-3xl w-full justify-evenly items-center'>
            <h1 className=''>{name}</h1>
            <h1 className=''>{price}</h1>
            <h1 className=''>{numberTokens}</h1>
          </div>
      </div>
    </motion.div>
  )
}

export default Stock