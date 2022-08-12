import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function CircleChart({ chartData }) {
  return <Doughnut data={chartData} />;
}

export default CircleChart;
