import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';
import './Graph.css'; // Import the CSS file

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title
} from 'chart.js';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title
);

const Graph = ({ chartData }) => {
    const data = {
        labels: ['A', 'B', 'C', 'D', 'F'],
        datasets: [
            {
                label: 'Grade Distribution',
                data: [chartData.A, chartData.B, chartData.C, chartData.D, chartData.F],
                backgroundColor: ['rgba(0, 128, 0, 0.7)', 'rgba(0, 0, 255, 0.7)', 'rgba(255, 165, 0, 0.7)', 'rgba(255, 255, 0, 0.7)', 'rgba(255, 0, 0, 0.7)'],
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Student Count',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Grades',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Grade Distribution Bar Chart',
                font: {
                    size: 16,
                    weight: 'bold'
                }
            },
            legend: {
                display: false
            }
        }
    };

    return (
        <>
            <Container className="graph-container">
                <Bar className='graph-bar' data={data} options={options} />
            </Container>
        </>
    );
};

export default Graph;
