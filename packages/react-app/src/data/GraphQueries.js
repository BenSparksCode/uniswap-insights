import { gql } from "apollo-boost";

export const USDC_ETH = gql`
{
    pair(id:"0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc") {
        token0Price 
        token1Price
        volumeUSD
        volumeToken0
        volumeToken1
        txCount
        reserve0
        reserve1
    }
}
`;

// Get last 100 swap txs for a pair
export const USDC_ETH_SWAPS = gql`
{
    swaps(orderBy: timestamp, orderDirection: desc, where:
     { pair: "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc" }
    ) {
         pair {
           token0 {
             symbol
           }
           token1 {
             symbol
           }
         }
         amount0In
         amount0Out
         amount1In
         amount1Out
         amountUSD
         to
          timestamp
     }
    }
`;

// Get last swap for a pair - can get up to last 1000
export const LAST_USDC_ETH_SWAP = gql`
{
    swaps(first: 1, orderBy: timestamp, orderDirection: desc, where:
     { pair: "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc" }
    ) {
         pair {
           token0 {
             symbol
           }
           token1 {
             symbol
           }
         }
         amount0In
         amount0Out
         amount1In
         amount1Out
         timestamp
     }
}
`;

//only gives us volumes - need trade prices
export const ETH_USDC_DAY_DATA = gql`
{
  pairDayDatas(first: 10, orderBy: date, orderDirection: asc,
    where: {
      pairAddress: "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
      date_gt: 1592505859
    }
  ) {
      date
      dailyVolumeToken0
      dailyVolumeToken1
      dailyVolumeUSD
      reserveUSD
  }
 }
`;