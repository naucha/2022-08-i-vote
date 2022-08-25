import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

const ChartContainer = styled.div`
  display: flex;
  align-items: stretch;
  width: 20rem;
  height: 50vh;

  border: 1px solid #fff;
  border-radius: 10px;

  @media (max-width: 940px) {
    height: 60vh;
  }
`;

const config = {
  type: "Doughnut",
  options: {
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          padding: 10,
          color: "#fff",
          font: {
            size: "16px",
          },
        },
      },
    },
  },
};

export function CircleChart({ options }) {
  const chartData = {
    labels: options.map((data) => data.option),
    datasets: [
      {
        data: options.map((data) => data.votes.length),
        backgroundColor: ["#cb5252", "#7b45df", "#63c97a", "#e5e058"],
        hoverOffset: 12,
        rotation: 25,
        borderRadius: 6,
        cutout: 60,
      },
    ],
  };
  return (
    <ChartContainer>
      <Doughnut options={config.options} data={chartData} />
    </ChartContainer>
  );
}

export { ChartContainer };
