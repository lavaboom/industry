import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import "./BarChartCognitive.scss";
Chart.register(...registerables);

const colors = {green:'rgba(13,210,13,.64)', yellow:'rgba(210, 210, 13,.64)',red:'rgba(210,13,13,.8)'};
const data = {
    labels: ['Fri', 'Sat', 'Sun',
             'Mon', 'Tue', 'Wed', 'Thu'],
    datasets: [
      {
        label: 'Recovery',
        backgroundColor: 'rgba(167,167,166,0.67)',
        borderWidth: 0,
        data: [7, 6, 8, 6, 5, 7, 8],
        barThickness: 12,
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
            max : 12,
            min: 0,
            ticks: {
                stepSize: 3,
            
            }
        },
    
   
  }}

export default function BarChart() {
  return <div className="bar-chart">
      <div className='border'>
        <div className='border-1'></div>
        <div className='border-2'></div>
        <div className='border-3'></div>
      </div>
      <Bar
          data={data}
          options={options}
        />
  </div>;
}
