import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import "./BarChart.scss";
Chart.register(...registerables);

const colors = {green:'rgba(13,210,13,.64)', yellow:'rgba(210, 210, 13,.64)',red:'rgba(210,13,13,.8)'};
const data = {
    labels: ['Fri', 'Sat', 'Sun',
             'Mon', 'Tue', 'Wed', 'Thu'],
    datasets: [
      {
        label: 'Recovery',
        backgroundColor: [colors.green, colors.yellow,colors.green,colors.green,colors.green,colors.green],
        borderWidth: 0,
        data: [80, 65, 70, 85, 90, 92, 89]
      }
    ]
  };
  const options = {
 
    plugins:{
      legend:{
        display: false,
            labels: {
                display: false
            }
      }},
      scales: {
        y: {
            max : 100,
            min: 0,
            ticks: {
                stepSize: 33,
                fontColor: [colors.green,colors.yellow,colors.red],
                callback: function(value, index, values) {
                    return Math.floor(value) + '%';
                }
            }
        },
    
   
    barThickness:2,
  }}

export default function BarChart() {
  return <div className="bar-chart">
      <div className='border'>
        <div className='border-green'></div>
        <div className='border-yellow'></div>
        <div className='border-red'></div>
      </div>
      <Bar
          data={data}
          options={options}
        />
  </div>;
}
