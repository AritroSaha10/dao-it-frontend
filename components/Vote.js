import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Stock from "./Stock";
import SearchSection from "./SearchSection";
import Head from "next/head";
import Graph from "../public/graph-btc.png";
import Image from "next/image";

const ProfilePage = ({ action, fundName, fundAmount, price, fundSymbol }) => {
  return (

    <>
    <Head>
    <script
            type="text/javascript"
            src="https://s3.tradingview.com/tv.js"
        ></script>
    </Head>
    <div className="w-full flex flex-col items-cente text-cyan-50">
      <div className="flex flex-col bg-slate-800 w-full p-10">
        <div className="px-10 pt-7 pb-16 bg-sky-400/[0.8] rounded-xl shadow-xl">
          <h1 className="text-5xl mb-6">Proposal</h1>
          <h1 className="text-3xl">
            {action} {fundAmount} of {fundName} for {price}
          </h1>
        </div>
        <div className="shadow-xl my-16 rounded-xl p-8 bg-sky-400/[0.8] flex items-center justify-center w-full">
          <Image src={Graph} />
        </div>
        <div className="flex w-full justify-between">
          <motion.button
            className="shadow-xl bg-sky-400/[0.8] px-28 py-6 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Yes
          </motion.button>
          <motion.button
            className="shadow-xl bg-sky-400/[0.8] px-28 py-6 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Abstain
          </motion.button>
          <motion.button
            className="shadow-xl bg-sky-400/[0.8] px-28 py-6 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            No
          </motion.button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfilePage;
