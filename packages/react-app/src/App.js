import React from "react";
import logo from "./ethereumLogo.png";
import { Contract } from "@ethersproject/contracts";
import { getDefaultProvider } from "@ethersproject/providers";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { MAINNET_ID, addresses, abis } from "@uniswap-insights/contracts";
import "./App.css";

// See more example queries on https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2
const GET_AGGREGATED_UNISWAP_DATA = gql`
  {
    uniswapFactories(first: 1) {
      pairCount
      totalVolumeUSD
      totalLiquidityUSD
    }
  }
`;

async function readOnChainData() {
  // Should replace with the end-user wallet, e.g. Metamask
  const defaultProvider = getDefaultProvider();
  // Create an instance of an ethers.js Contract
  // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
  const daiWethExchangeContract = new Contract(addresses[MAINNET_ID].pairs["DAI-WETH"], abis.pair, defaultProvider);
  // Reserves held in the DAI-WETH pair contract
  const reserves = await daiWethExchangeContract.getReserves();
  console.log({ reserves });
}

function App() {
  const { loading, error, data } = useQuery(GET_AGGREGATED_UNISWAP_DATA);

  React.useEffect(() => {
    if (!loading && !error && data && data.uniswapFactories) {
      console.log({ uniswapFactories: data.uniswapFactories });
    }
  }, [loading, error, data]);

  return (
    <div className="App">
      <header className="App-header">

        <h1 className="text-4xl">Tailwind Test</h1>

        <img src={logo} className="App-logo" alt="react-logo" />
        <p>
          Edit <code>packages/react-app/src/App.js</code> and save to reload.
        </p>
        {/* Remove the "display: none" style and open the JavaScript console in the browser to see what this function does */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => readOnChainData()} >
          Read On-Chain Reserves
        </button>
        <a
          className="App-link"
          href="https://ethereum.org/developers/#getting-started"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "0px" }}
        >
          Learn Ethereum
        </a>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <a className="App-link" href="https://uniswap.org/docs/v2/" target="_blank" rel="noopener noreferrer">
          Learn Uniswap v2
        </a>
      </header>
    </div>
  );
}

export default App;
