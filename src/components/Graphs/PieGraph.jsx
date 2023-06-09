import React from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import { Pie } from 'react-chartjs-2';
import './PieGraph.css';
import { Container } from 'react-bootstrap';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
);

const PieGraph = ({ chartData }) => {

    const data = {
        labels: ['A', 'B', 'C', 'D', 'F'],
        datasets: [
            {
                label: 'Grade Distribution',
                data: [chartData.A, chartData.B, chartData.C, chartData.D, chartData.F],
                backgroundColor: ['rgba(0, 128, 0, 0.7)', 'rgba(0, 0, 255, 0.7)', 'rgba(255, 165, 0, 0.7)', 'rgba(255, 255, 0, 0.7)', 'rgba(255, 0, 0, 0.7)']
            }
        ]
    };

    const options = {

        plugins: {
            title: {
                display: true,
                text: 'Grade Distribution Pie Graph',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            }
        }

    };


    return(
        <>
        <Container className="pie-graph-container">
            <Pie className="pie-graph" data={data} options={options}></Pie>
        </Container>
        </>
    )
}

export default PieGraph;