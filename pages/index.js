import Head from 'next/head'
import Image from 'next/image'
import Home1 from '../public/Home1.png'
import Home2 from '../public/Home2.png'

import Navbar from "../components/Navbar"
import Link from "next/link";
import HomeSection from '../components/HomeSection'
import { classNames } from "../lib/cssTools";
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <section
      className={classNames(
        " md:items-center flex-col text-white w-full",
      )}
    >
    <div>
      <div className="object-fill bg-[url('https://media.discordapp.net/attachments/1017987380524884078/1020805903018115182/unknown.png?width=1594&height=1063')] bg-no-repeat bg-cover pb-20 w-full">
        <div className='flex flex-col justify-center items-center h-full'>
          <h1 className='mt-40 text-8xl w-2/5 p-5 border-y-4 border-slate-800 text-slate-800 text-center'>Just DAO It!</h1>
        </div>
        <div className='p-5 px-10 flex justify-center'>
          <Link href='/browse'>   
            <motion.button className="w-56 text-2xl text-white mt-32 rounded-3xl p-5 bg-sky-400 border-solid border-2"
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}>
              Start Investing
            </motion.button>
          </Link>
        </div>   
      </div>
      <HomeSection title="Decentralized" subheading="By the user, for the user" description="No profit margin, allows the user to completely reap the benefits of the mutual fund!" image={Home1} reversed={false}/>
      <HomeSection title="Low Risk" subheading="Avoid speculation" description="Provides stability in an otherwise turbulent crypto market" image={Home2} reversed={true}/>
    </div>
    </section>

  )
}

export default Home