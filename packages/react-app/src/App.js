import React from "react";

import Button from "./components/Button";


function App() {

  return (
    <div className="App h-screen w-screen bg-gray-600">
      {/* Heading bar */}
      <div class="container flex mb-4 bg-gray-400 mx-auto">
        <h1 class='text-lg font-bold mx-auto'>Uniswap Insights</h1>
      </div>

      {/* Volume Liquidity Transactions */}
      <div class="container flex mb-4 bg-gray-400 mx-auto">
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
      <div class="container flex mb-4 bg-gray-400 mx-auto w-1/4">
        <button class="bg-transparent mx-auto hover:bg-blue-500 hover:text-white text-blue-700 font-semibold rounded py-2 px-4 border border-blue-500 hover:border-transparent">
          Candlestick
        </button>
        <button class="bg-transparent mx-auto hover:bg-blue-500 hover:text-white text-blue-700 font-semibold rounded py-2 px-4 border border-blue-500 hover:border-transparent">
          Line Chart
        </button>
      </div>

      {/* Chart area */}
      <div class="container my-5 text-center shadow-lg bg-gray-400 max-w-xl rounded overflow-hidden mx-auto">
        <h2 class="text-md font-bold mx-auto">ETH-USDC graph</h2>

        <div class="container border-solid border-4 border-red-500 h-64 rounded mx-auto">
          hello
          this is a graph
        </div>
      </div>

      {/* Fees area */}
      <div class="container my-5 text-center shadow-lg bg-gray-400 max-w-xl rounded overflow-hidden mx-auto">
        <h2 class="text-md font-bold mx-auto">Ethereum Network Fees</h2>

        <div class="container border-solid border-4 border-red-500 h-64 rounded mx-auto">
          Fee stuff goes here
        </div>
      </div>


    </div>
  );
}

export default App;








// potential color scheme
