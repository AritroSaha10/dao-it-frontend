import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Stock from "./Stock";
import SearchSection from "./SearchSection";
import Head from "next/head";

const ProfilePage = ({ action, fundName, fundAmount, price, fundSymbol }) => {
  useEffect(() => {
    new TradingView.widget({
      autosize: true,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_accbe",
    });
  }, []);

  return (

    <>
    <Head>
    <script
            type="text/javascript"
            src="https://s3.tradingview.com/tv.js"
        ></script>
    </Head>
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col bg-gray-200 w-full p-10">
        <div className="px-10 pt-7 pb-16 bg-gray-300 rounded-xl shadow-xl">
          <h1 className="text-5xl mb-6">Proposal</h1>
          <h1 className="text-3xl">
            {action} {fundAmount} of {fundName} for {price}
          </h1>
        </div>
        <div className="shadow-xl my-16 rounded-xl p-8 bg-gray-300 flex items-center justify-center w-full">
          <div class="tradingview-widget-container w-full">
            <div id="tradingview_accbe"></div>
            <div class="tradingview-widget-copyright">
              <a
                href="https://www.tradingview.com/symbols/NASDAQ-AAPL/"
                rel="noreferrer"
                target="_blank"
              >
                <span class="blue-text">Chart</span>
              </a>{" "}
              by TradingView
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <motion.button
            className="shadow-xl bg-gray-300 px-28 py-6 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Yes
          </motion.button>
          <motion.button
            className="shadow-xl bg-gray-300 px-28 py-6 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Abstain
          </motion.button>
          <motion.button
            className="shadow-xl bg-gray-300 px-28 py-6 rounded-xl"
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
