import React from 'react'
import { motion } from 'framer-motion'
import Stock from './Stock'
import SearchSection from './SearchSection'

const ProfilePage = ({ fundName, fundSymbol, numberTokens, numberVotes }) => {
   

  return (
    <div>
        <div className='flex flex-col bg-gray-200 p-10'>
            <h1 className='text-center w-full text-4xl'>{fundName}</h1>
            <div className='flex flex-col xl:flex-row w-full justify-between h-full'>
                <div className='flex flex-col justify-evenly items-center'>
                    <div className='px-96 py-40 m-10 bg-gray-300 rounded-xl shadow-xl'>
                        Graph of Fund
                    </div>
                    <div className='flex w-full justify-between'>
                        <motion.button className='px-32 py-6 rounded-xl bg-gray-300 mx-10 mb-10 shadow-xl'
                        whileHover={{scale:1.05}}
                        whileTap={{scale:0.95}}>Buy Tokens</motion.button>
                        <motion.button className='px-32 py-6 rounded-xl bg-gray-300 mx-10 mb-10 shadow-xl'
                        whileHover={{scale:1.05}}
                        whileTap={{scale:0.95}}>Sell Tokens</motion.button>
                    </div>
                </div>
                <div className='flex flex-col justify-evenly items-center w-full'>
                    <div className='shadow-xl bg-gray-300 h-40 w-48 rounded-xl flex flex-col justify-evenly items-center'>
                        <h1 className='text-2xl'>Tokens</h1>
                        <h1 className='text-xl'>{numberTokens}</h1>
                    </div>
                    <div className='shadow-xl bg-gray-300 h-40 w-48 rounded-xl flex flex-col justify-evenly items-center'>
                        <h1 className='text-2xl'>Votes</h1>
                        <h1 className='text-xl'>{numberVotes}</h1>
                    </div>
                    <motion.button className='shadow-xl bg-gray-300 px-16 py-6 rounded-xl'
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}>
                        Propose
                    </motion.button>
                </div>
            </div>
            <div className='flex flex-col h-full'>
                <h1 className='text-5xl'>Assets Breakdown</h1>
                <Stock name='name' price='price' numberTokens='100'/>
                <Stock name='name' price='price' numberTokens='100'/>
                <Stock name='name' price='price' numberTokens='100'/>
            </div>
        </div>
        <div className='flex flex-col h-full'>
            <h1 className='text-5xl mt-20'>Recommended Funds</h1>
            <SearchSection name='name' price='price' numberTokens='120,000' />
            <SearchSection name='name' price='price' numberTokens='120,000' />
            <SearchSection name='name' price='price' numberTokens='120,000' />
         </div>

    </div>
  )
}

export default ProfilePage