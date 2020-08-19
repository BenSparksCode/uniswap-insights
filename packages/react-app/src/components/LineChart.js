import React, { useState, useEffect } from 'react'
// import {useCanvas} from '../hooks/useCanvas'
import { Line } from 'react-chartjs-2'

const LineChart = () => {

    const [chartData, setChartData] = useState({})
    // const canvas = useCanvas()

    const getChartData = (canvas) => {
        let data = chartData

        if(data.datasets) {
            let colors =[
                "rgba(255,0,255,0.7)",
                "rgba(0,255,0,0.7)"
            ]

            var ctx = document.getElementById('canvas').getContext("2d")
            var gradient = ctx.createLinearGradient(0, 0, 0, 250)
            gradient.addColorStop(0, 'rgba(245,0,0,1)')
            gradient.addColorStop(1, 'rgba(255, 0, 208, 0.1)')
    
            data.datasets.forEach((set, i) => {
                set.backgroundColor = gradient
                set.borderColor = "rgba(245,0,0,1)"
                set.borderWidth = 2
            });
        }

        return data
    } 

    const chartOptions = {
        responsive: true,
        scales: {
            yAxes: [
                {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true
                    },
                    gridLines: {
                        display: false
                    }
                }
            ],
            xAxes: [
                {
                    gridLines: {
                        display: false
                    }
                }
            ]
        },

    }

    const chart = () => {
        setChartData({
            labels: ["Mon", "Tues", "Wed", "Thurs", "Fri"],
            datasets: [
                {
                    label: "Thiccness Level",
                    data: [32, 45, 12, 76, 69],
                    backgroundColor: ["rgba(0, 214, 196)"],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return <Line
        id='canvas'
        data={getChartData}
        options={chartOptions}
    />
}

export default LineChart