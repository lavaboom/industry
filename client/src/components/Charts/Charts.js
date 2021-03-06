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


export default function Charts({ precentage, metric, title, btnText, chartColor }) {
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
                data: [metric, 25],
                borderColor: ['rgba(0,0,0,0)'],
                backgroundColor: [chartColor, '#2E3B45'],
            }
        ],
        text: 'day strain',
    };
    const options = {
        plugins: {
            title: {
                display: true,
            }
        },
        cutout: '89%',
    }

    return (
        <section className="doughnut__container">
            <div className='doughnut'>
                <Doughnut data={data} options={options} plugins={plugins} />
            </div>
            <div className="doughnut__info-container">
                <div className="doughnut__title-container">
                    <p className="doughnut__info-title">{title}</p>
                    <Button containerStyle="doughnut__icon-container" btnStyle="doughnut__icon" text="?" />
                </div>
                <p className="doughnut__info-metric">{metric}<span className="doughnut__info-precent">{precentage ? "%" : ""}</span></p>
                {btnText ? <Button containerStyle="doughnut__button" text={btnText} btnStyle={"inactive"} /> : ""}
            </div>
        </section>
    );
}
