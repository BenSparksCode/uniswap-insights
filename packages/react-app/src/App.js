import React, { useEffect, useState } from "react";

import Button from "./components/Button";
import PriceGraph from './components/PriceGraph'

// FOR TESTING
import { PriceData } from './DummyData'


function App() {

  // For PriceGraph
  const [chartsToDisplay, setChartsToDisplay] = useState([])

  const getData = async () => {
    const charts = []
    charts.push(<PriceGraph key={1} data={PriceData} />)
    setChartsToDisplay(charts)
  }

  // Calls getData onComponentDidMount
  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App h-full w-full bg-gray-500">
      {/* Website Navbar */}
      <div class="shadow-xl py-3 align-middle text-center mb-4 bg-gray-400 w-full h-16">
        <h1 class='text-xl inline-block align-middle font-bold mx-auto'>Uniswap Insights</h1>
      </div>

      {/* Page heading bar */}
      <div class="container shadow-xl flex mb-4 bg-gray-400 mx-auto">
        <div class="container flex mx-auto w-1/2">
          <h1 class='text-lg font-bold mx-auto'>ETH-USDC Pair</h1>
        </div>
        <div class="container flex mx-auto w-1/2">
          <button class="bg-transparent mx-auto hover:bg-red-500 hover:text-white text-red-700 font-semibold rounded py-2 px-4 border border-red-500 hover:border-transparent">
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
        <div class="w-1/3 text-center bg-gray-500 h-12">
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
          <PriceGraph key={1} data={PriceData} />
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