import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import "./Charts.scss";
import { Chart, ArcElement } from 'chart.js'
import Button from "../Buttons/Button";
import temp from '../../assets/Icons/chevron-down.svg';
;

// import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ArcElement);
// Chart.register(ChartDataLabels);


export default function Charts({ metric, title, btnText }) {
    const plugins = [{
        id: '79%',
        beforeDraw: function (chart) {
            let width = chart.width,
                height = chart.height,
                ctx = chart.ctx;
            ctx.restore();
            let fontSize = (height / 160).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "top";
            let text = "",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;


            ctx.fillText(text, textX, textY);

            ctx.save();
        }
    }]
    const data = {
        datasets: [
            {
                data: [75, 25],
                borderColor: ['rgba(0,0,0,0)'],
                backgroundColor: ['#0072BC', '#2E3B45'],
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
        cutout: '80%',
    }

    return (
        <section className="doughnut__container">
            <div className='doughnut'>
                <Doughnut data={data} options={options} plugins={plugins} />
            </div>
            <div className="doughnut__info-container">
                <div>
                    <p className="doughnut__info-title">{title}</p>
                    <Button containerStyle="doughnut__icon-container" btnStyle="doughnut__icon" text="?" />
                </div>
                <p className="doughnut__info-metric">{metric}</p>
                <Button text={btnText} btnStyle={"inactive"} />
            </div>
        </section>
    );
}
