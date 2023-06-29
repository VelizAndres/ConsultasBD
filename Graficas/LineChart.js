import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var tiempo = [
  -50, -49, -48, -47, -46, -45, -44, -43, -42, -41, -40, -39, -38, -37, -36,
  -35, -34, -33, -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21,
  -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4,
  -3, -2, -1, 0,
];

var misoptions = {
  scales: {
    y: {
      min: 0,
      ticks: { color: "rgb(0, 255, 0)" },
      grid: {
        color: "rgb(255, 255, 0)",
      },
      title: {
        text: "Cantidad de datos",
        display: true,
        color: "rgb(255, 255, 255)",
      },
    },
    x: {
      ticks: { color: "rgb(0, 255, 0)" },
      grid: {
        color: "rgb(255, 255, 0)",
      },
      title: {
        text: "Segundos",
        display: true,
        color: "rgb(255, 255, 255)",
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        color: "rgb(255, 255, 0)",
      },
    },
  },
};

export default function LinesChart({ data }) {
  var midata = {
    labels: tiempo,
    datasets: [
      // Cada una de las líneas del gráfico
      {
        label: "Cantidad de datos respecto al tiempo",
        data: data,
        tension: 0,
        fill: true,
        borderColor: "rgb(0, 255, 150)",
        backgroundColor: "rgba(0, 255, 150, 0.5)",
        pointRadius: 2,
        pointBorderColor: "rgba(0, 255, 150)",
      },
    ],
  };

  return <Line data={midata} options={misoptions} />;
}
