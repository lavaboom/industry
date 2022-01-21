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
        data: [14, 12, 10, 7, 15, 13, 16],
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
            max : 21,
            min: 0,
            ticks: {
                stepSize: 3,
                fontColor: [colors.green,colors.yellow,colors.red],
            
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
