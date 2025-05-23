import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { labels } from "../../utils/constantData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Event and Tickets Line Chart",
    },
  },
};

export const lineChatData = {
  labels,
  datasets: [
    {
      label: "Events",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "rgb(168, 197, 218)",
    },
    {
      label: "Tickets",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(168, 197, 218)",
    },
  ],
};

export const barChatData = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "rgb(161, 227, 203)",
      barThickness: 30,
    },
  ],
};

export const LineChart = () => {
  return (
    <div className="p-6 bg-primary-contentBg rounded-md shadow-md mt-6">
      <div className="h-[15rem] w-full">
        <Line options={options} data={lineChatData} />
      </div>
    </div>
  );
};

export const BarChart = () => {
  return (
    <div className="p-6 bg-primary-contentBg rounded-md shadow-md mt-6">
      <div className="h-[18rem] w-full">
        <Bar options={options} data={barChatData} />
      </div>
    </div>
  );
};
