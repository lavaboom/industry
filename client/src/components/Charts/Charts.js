import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import "./Charts.scss";
import {Chart, ArcElement } from 'chart.js'
// import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ArcElement);
// Chart.register(ChartDataLabels);


// Chart.register({beforeDraw: function(chart) {
//       var width = chart.chart.width,
//           height = chart.chart.height,
//           ctx = chart.chart.ctx;
//       ctx.restore();
//       var fontSize = (height / 114).toFixed(2);
//       ctx.font = fontSize + "em sans-serif";
//       ctx.textBaseline = "middle";
//       var text = "75%",
//           textX = Math.round((width - ctx.measureText(text).width) / 2),
//           textY = height / 2;
//       ctx.fillText(text, textX, textY);
//       ctx.save();
//     }
//   });

const data = {
    // labels: ['day strain'],
    datasets: [
        {
            data: [75,25],
            borderColor: ['rgba(255,206,86,0.2)'],
            backgroundColor: ['rgba(82,157,242,1)','rgba(75, 78, 83,1)'],
        }
        ],
    text: 'day strain',
};
const options = {
    plugins: {
        title: {
            display: true,
            text: 'Custom Chart Title'
        }
    },
    cutout:'80%',
}
export default class Charts extends Component {
    render(){
  return <div className='doughnut'>
      <Doughnut data={data}  options={options}/>
  </div>;
}
}