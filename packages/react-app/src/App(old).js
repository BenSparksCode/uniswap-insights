import React from "react";
import logo from "./ethereumLogo.png";
// import { Contract } from "@ethersproject/contracts";
// import { getDefaultProvider } from "@ethersproject/providers";
// import { gql } from "apollo-boost";
// import { useQuery } from "@apollo/react-hooks";
// import { MAINNET_ID, addresses, abis } from "@uniswap-insights/contracts";

import Button from "./components/Button";

// See more example queries on https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2
// const GET_AGGREGATED_UNISWAP_DATA = gql`
//   {
//     uniswapFactories(first: 1) {
//       pairCount
//       totalVolumeUSD
//       totalLiquidityUSD
//     }
//   }
// `;

// async function readOnChainData() {
//   // Should replace with the end-user wallet, e.g. Metamask
//   const defaultProvider = getDefaultProvider();
//   // Create an instance of an ethers.js Contract
//   // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
//   const daiWethExchangeContract = new Contract(addresses[MAINNET_ID].pairs["DAI-WETH"], abis.pair, defaultProvider);
//   // Reserves held in the DAI-WETH pair contract
//   const reserves = await daiWethExchangeContract.getReserves();
//   console.log({ reserves });
// }

function App() {
  // const { loading, error, data } = useQuery(GET_AGGREGATED_UNISWAP_DATA);

  // React.useEffect(() => {
  //   if (!loading && !error && data && data.uniswapFactories) {
  //     console.log({ uniswapFactories: data.uniswapFactories });
  //   }
  // }, [loading, error, data]);

  return (
    <div className="App">
      <header className="App-header">

        <h1 className="text-4xl">Tailwind Test</h1>

        <Button />

       
      </header>
    </div>
  );
}

export default App;
