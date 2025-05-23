import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  BarElement,
} from "chart.js";
import TopCardSection from "./TopCardSection";
import { dashboardCardData } from "../../utils/constantData";
import { faker } from "@faker-js/faker";
import { BarChart, LineChart } from "../../components/chats";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Revenue Bar Chart",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
export const data = {
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

const DashboadMainIndex = () => {
  return (
    <div>
      <div className="w-full rounded-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold font-sans">Today</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {dashboardCardData?.map((data) => (
            <TopCardSection
              key={data.id}
              name={data.name}
              amount={`$${data.amount}`}
              bgColor={data.bgColor}
            />
          ))}
        </div>
      </div>
      <BarChart />
      <LineChart />
    </div>
  );
};
export default DashboadMainIndex;
