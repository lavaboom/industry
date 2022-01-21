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
 
    plugins:{legend: {
      display: false,
          labels: {
              display: false
          }
      }},
      scales: {
        y: {
            ticks: {
                callback: function(value, index, values) {
                    return value + '%';
                }
            }
        },
    
   
    barThickness:2,
  }}

export default function BarChart() {
  return <div className="bar-chart">
      <Bar
          data={data}
          options={options}
        />
  </div>;
}
