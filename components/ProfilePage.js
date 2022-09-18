import React from 'react'
import { motion } from 'framer-motion'
import Stock from './Stock'
import SearchSection from './SearchSection'
import Graph from '../public/graph-btc.png'
import Image from "next/image";

const ProfilePage = ({ fundName, fundSymbol, numberTokens, numberVotes }) => {
   

  return (
    <div>
        <div className='flex flex-col bg-slate-700 p-10 text-cyan-50'>
            <h1 className='text-center w-full text-5xl mb-12'>{fundName}</h1>
            <div className='flex flex-col xl:flex-row w-full justify-between h-full'>
                <div className='flex flex-col justify-evenly items-center'>

                    <Image
                        src={Graph}
                        width={1000}
                        height={500}
                        className="max-w-[500px] shadow-2xl rounded-lg bg-sky-400/[0.8]"
                    />
                    
                    <div className='flex w-full justify-between mt-10'>
                        <motion.button className='px-32 py-6 rounded-xl bg-sky-400/[0.8] mx-10 mb-10 shadow-xl'
                        whileHover={{scale:1.05}}
                        whileTap={{scale:0.95}}>Buy Tokens</motion.button>
                        <motion.button className='px-32 py-6 rounded-xl bg-sky-400/[0.8] mx-10 mb-10 shadow-xl'
                        whileHover={{scale:1.05}}
                        whileTap={{scale:0.95}}>Sell Tokens</motion.button>
                    </div>
                </div>
                <div className='flex flex-col justify-evenly items-center w-full'>
                    <div className='shadow-xl bg-sky-400/[0.8] h-40 w-48 rounded-xl flex flex-col justify-evenly items-center'>
                        <h1 className='text-2xl'>Tokens</h1>
                        <h1 className='text-4xl'>{numberTokens}</h1>
                    </div>
                    <div className='shadow-xl bg-sky-400/[0.8] h-40 w-48 rounded-xl flex flex-col justify-evenly items-center'>
                        <h1 className='text-2xl'>Votes</h1>
                        <h1 className='text-xl'>{numberVotes}</h1>
                    </div>
                    <motion.button className='shadow-xl bg-sky-400/[0.8] px-16 py-6 rounded-xl'
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}>
                        Propose
                    </motion.button>
                </div>
            </div>
            <div className='flex flex-col h-full'>
                <h1 className='text-5xl'>Assets Breakdown</h1>
                <Stock name='MATIC' price='US$18.04' numberTokens='4,312.00'/>
                <Stock name='AVAX' price='US$0.814' numberTokens='23,183.00'/>
                <Stock name='ETH' price='US$1431.68' numberTokens='3,293.00'/>
            </div>
        </div>
        <div className='flex flex-col h-full'>
            <h1 className='text-5xl mt-20'>Recommended Funds</h1>
            <SearchSection name='BNB' price='US$276.88' numberTokens='20,000.00' />
            <SearchSection name='SOL' price='US$33.83' numberTokens='130,590.00' />
            <SearchSection name='BTC' price='US$19,991.80' numberTokens='12.09' />
         </div>

    </div>
  )
}

export default ProfilePage