import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { scaleTime } from 'd3-scale'
import { utcDay } from 'd3-time'
import { ChartCanvas, Chart, series } from 'react-stockcharts'
import { CandlestickSeries } from 'react-stockcharts/lib/series'
import { fitWidth } from 'react-stockcharts/lib/helper'
import { timeIntervalBarWidth, last } from 'react-stockcharts/lib/utils'
import { XAxis, YAxis } from 'react-stockcharts/lib/axes'
//DOCUMENTATION: https://github.com/rrag/react-stockcharts


//FOR TESTING
import { PriceData } from '../DummyData'

// TUTORIAL:
// https://www.youtube.com/watch?v=EozoDYp4DQY

let CandleChart = (props) => {
    const { type, width, ratio } = props
    const data = PriceData
    const xAccessor = (d) => { return d.date }

    return (
        <div className="CandleChart">
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

CandleChart.propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    ratio: PropTypes.number.isRequired,
    type: PropTypes.oneOf(["svg","hybrid"]).isRequired
}

CandleChart.defaultProps = {
    type: "svg"
}

CandleChart = fitWidth(CandleChart)
export default CandleChart