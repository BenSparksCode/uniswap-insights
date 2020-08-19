import React, { useEffect, useState, useRef } from "react";
import { Contract } from "@ethersproject/contracts";
import { getDefaultProvider } from "@ethersproject/providers";
import { useQuery } from "@apollo/react-hooks";
import { MAINNET_ID, addresses, abis } from "@uniswap-insights/contracts";

import CandleChart from './components/CandleChart'
import LineChart from './components/LineChart'

import { LAST_USDC_ETH_SWAP, ETH_USDC_DAY_DATA } from './data/GraphQueries'

// FOR TESTING
import { PriceData } from './DummyData'

function App() {
  // to get Canvas
  const canvasRef = useRef(null)

  // const { loading2, error2, data2 } = useQuery(ETH_USDC_DAY_DATA);
  const { loading, error, data } = useQuery(LAST_USDC_ETH_SWAP);
  const [price, setPrice] = useState(0)

  useEffect(() => {
    
    if(error) console.log({error});
    if (!loading && !error && data && data.swaps) {
      console.log(data.swaps[999]);
      console.log(data.swaps.length);
      calcPrice(data.swaps[0])
    }
  }, [loading, error, data]);

  // useEffect(() => {
  //   console.log("NEW Q:",data2);
  //   if (!loading2 && !error2 && data2) {
  //     console.log("NEW Q:",data2);
  //   }
  // }, [loading2, error2, data2]);

  const calcPrice = (lastSwap) => {
    if (lastSwap) {
      let usdc, eth // amount0 = USDC, amount1 = ETH

      eth = lastSwap.amount0In !== "0" ? parseFloat(lastSwap.amount1Out) : parseFloat(lastSwap.amount1In)
      usdc = lastSwap.amount0In !== "0" ? parseFloat(lastSwap.amount0In) : parseFloat(lastSwap.amount0Out)

      setPrice(usdc / eth)
    } else {
      setPrice(0)
    }
  }


  return (
    <div className="App h-full w-full bg-gray-500">
      {/* Website Navbar */}
      <div class="shadow-xl py-3 align-middle text-center mb-4 bg-gray-400 w-full h-16">
        <h1 class='text-xl inline-block align-middle font-bold mx-auto'>Uniswap Insights</h1>
      </div>

      {/* Page heading bar */}
      <div class="container shadow-xl text-center flex p-2 h-auto w-1/6 mb-4 bg-gray-400 mx-auto rounded">
        <div class="container mx-auto">
          <h1 class='text-lg font-bold mx-auto'>ETH / USDC</h1>
          <h2 class="text-lg my-2 font-semibold mx-auto">1 ETH = {price.toFixed(2)} USDC</h2>
          <button class="bg-white my-2 shadow-md active:shadow-none active:bg-red-700 hover:bg-red-500 hover:text-white text-red-600 font-semibold rounded py-2 px-4 border-2 border-red-500 hover:border-transparent">
            Trade on Uniswap
          </button>
        </div>
      </div>

      {/* Volume Liquidity Transactions */}
      <div class="container shadow-xl flex mb-4 bg-gray-400 mx-auto">
        <div class="w-1/3 text-center bg-gray-400 h-12">
          <h2 class="text-md font-bold mx-auto">Volume (24hrs)</h2>
          <p class="font-bold mx-auto">100</p>
        </div>
        <div class="w-1/3 text-center bg-gray-400 h-12">
          <h2 class="text-md font-bold mx-auto">Liquidity</h2>
          <p class="font-bold mx-auto">100</p>
        </div>
        <div class="w-1/3 text-center bg-gray-400 h-12">
          <h2 class="text-md font-bold mx-auto">Transactions (24hrs)</h2>
          <p class="font-bold mx-auto">100</p>
        </div>
      </div>

      {/* Chart Line-Candlestick Toggle Buttons */}
      <div class="container shadow-xl flex mb-4 bg-gray-400 mx-auto w-1/4">
        <button class="bg-transparent mx-auto hover:bg-blue-500 hover:text-white text-blue-700 font-semibold rounded py-2 px-4 border border-blue-500 hover:border-transparent">
          Candlestick
        </button>
        <button class="bg-transparent mx-auto hover:bg-blue-500 hover:text-white text-blue-700 font-semibold rounded py-2 px-4 border border-blue-500 hover:border-transparent">
          Line Chart
        </button>
      </div>

      {/* Chart area */}
      <div class="container my-5 text-center shadow-xl bg-gray-400 max-w-xl rounded overflow-hidden mx-auto">
        <h2 class="text-md font-bold mx-auto">ETH-USDC graph</h2>

        <div class="container border-solid border-4 border-red-500 h-auto rounded mx-auto">
          {/* <CandleChart key={1} data={PriceData} />  */}
          <LineChart />
        </div>
      </div>

      {/* Fees area */}
      <div class="container my-5 text-center shadow-xl bg-gray-400 max-w-xl rounded overflow-hidden mx-auto">
        <h2 class="text-md font-bold mx-auto">Ethereum Network Fees</h2>

        <div class="container border-solid border-4 border-red-500 h-64 rounded mx-auto">
          Fee stuff goes here
        </div>
      </div>
    </div>
  );
}

export default App;