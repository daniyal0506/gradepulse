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

const MiscGraph = ({ chartData }) => {
    const data = {
        labels: ['ADV', 'CR', 'DFR', 'I', 'NG', 'NR', 'O', 'PR', 'S', 'U', 'W'],
        datasets: [
            {
                label: 'Grade Distribution',
                data: [
                    chartData.ADV,
                    chartData.CR,
                    chartData.DFR,
                    chartData.I,
                    chartData.NG,
                    chartData.NR,
                    chartData.O,
                    chartData.PR,
                    chartData.S,
                    chartData.U,
                    chartData.W,
                ],
                borderColor: 'black',
                borderWidth: 1,
            },
        ],
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
                        weight: 'bold',
                    },
                },
                ticks: {
                    precision: 0, // Display whole numbers only
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Grade Definition',
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
            },
        },
        plugins: {
            title: {
                display: true,
                text: 'Misc Data Bar Chart',
                font: {
                    size: 16,
                    weight: 'bold',
                },
            },
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    title: (tooltipItem) => {
                        const label = tooltipItem[0].label;
                        // Add your descriptions based on the label
                        switch (label) {
                            case 'ADV':
                                return 'Advanced';
                            case 'CR':
                                return 'Credit';
                            case 'DFR':
                                return 'Deferred';
                            case 'I':
                                return 'Incomplete';
                            case 'NG':
                                return 'No Grade';
                            case 'NR':
                                return 'Not Reported';
                            case 'O':
                                return 'Outstanding';
                            case 'PR':
                                return 'Pass/No Pass';
                            case 'S':
                                return 'Satisfactory';
                            case 'U':
                                return 'Unsatisfactory';
                            case 'W':
                                return 'Withdrawn';
                            default:
                                return '';
                        }
                    },
                    label: (tooltipItem) => {
                        const value = tooltipItem.formattedValue;
                        return `Student Count: ${value}`;
                    },
                },
            },
        },
    };

    return (
        <>
            <Container className="graph-container">
                <Bar className="graph-bar" data={data} options={options} />
            </Container>
        </>
    );
};

export default MiscGraph;
