import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

import { Radar } from 'react-chartjs-2';
import { radarSkills } from '@/data/radarSkills';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export default function RadarSkillComp() {
    const chartData = {
        labels: radarSkills.map(radar => radar.name),
        datasets: [
            {
                label: 'Nivel de competencia',
                data: radarSkills.map(radar => radar.nivel),
                backgroundColor: 'rgba(0, 0, 0, 0.32)',
                borderColor: '#3D3D3D',
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        scales: {
            r: {
                ticks: {
                    display: false,
                    min: 1,
                    max: 100,
                    stepSize: 100,
                },
                pointLabels: {
                    font: {
                        size: 18, // Tamaño de la fuente de las etiquetas de los puntos
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return <Radar data={chartData} options={chartOptions} />;
};