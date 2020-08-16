import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { scaleTime } from 'd3-scale'
import { utcDay } from 'd3-time'
import { ChartCanvas, Chart } from 'react-stockcharts'
import { CandlestickSeries } from 'react-stockcharts/lib/series'
import { fitWidth } from 'react-stockcharts/lib/helper'
import { timeIntervalBarWidth } from 'react-stockcharts/lib/utils'
import { XAxis, YAxis } from 'react-stockcharts/lib/axes'
//DOCUMENTATION: https://github.com/rrag/react-stockcharts


//FOR TESTING
import { PriceData } from '../DummyData'

// TUTORIAL:
// https://www.youtube.com/watch?v=EozoDYp4DQY

let PriceGraph = (props) => {
    const { type, width, ratio } = props
    const data = PriceData
    const xAccessor = (d) => { return d.date }

    const [candles, setCandles] = useState([])

    //FOR TESTING
    // setCandles()



    return (
        <div className="PriceGraph">
            <ChartCanvas
                height={400}
                ratio={ratio}
                width={width}
                margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
                type={type}
                data={data}
                seriesName="MSFT"
                xAccessor={xAccessor}
                xScale={scaleTime()}
                xExtents={[new Date(2020, 0, 30), new Date(2020, 1, 16)]}
            >
                <Chart
                    id={1}
                    yExtents={(d) => [d.high, d.low]}
                >
                    <XAxis axisAt="bottom" orient="bottom" ticks={6}/>
                    <YAxis axisAt="left" orient="left" ticks={5}/>
                    <CandlestickSeries width={timeIntervalBarWidth(utcDay)}/>

                </Chart>
            </ChartCanvas>
        </div>
    )
}

PriceGraph.propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    ratio: PropTypes.number.isRequired,
    type: PropTypes.oneOf(["svg","hybrid"]).isRequired
}

PriceGraph.defaultProps = {
    type: "svg"
}

PriceGraph = fitWidth(PriceGraph)

export default PriceGraph


// Pair(id: 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc){
//     token0
//     token1
//   }

// USDC Graph info
// id: 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48
