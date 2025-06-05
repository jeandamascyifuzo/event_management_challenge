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
import { IoPersonOutline } from "react-icons/io5";
import { GiSupersonicArrow } from "react-icons/gi";
import { SiPersonio } from "react-icons/si";
import {
  PiPersonArmsSpreadLight,
  PiPersonSimpleCircleThin,
  PiPersonSimpleSwimLight,
} from "react-icons/pi";

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
    <div className="flex w-full gap-x-6">
      <div className="flex-1 w-full">
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
      <div className="w-[20%] bg-primary-darkBg px-4 space-y-6">
        <div>
          <h1 className="text-xl font-openSans font-bold mb-4">
            Notifications
          </h1>
          <div className="flex space-x-4 mb-1">
            <div className="w-7 h-7 rounded-full flex items-center justify-center border border-gray-200">
              <IoPersonOutline />
            </div>
            <div>
              <h1 className="text-sm font-openSans font-bold">Payment made</h1>
              <p className="text-gray-300 text-xs">Just now</p>
            </div>
          </div>
          <div className="flex space-x-4 mb-1">
            <div className="w-7 h-7 rounded-full flex items-center justify-center border border-gray-200">
              <GiSupersonicArrow />
            </div>
            <div>
              <h1 className="text-sm font-openSans font-bold">Event Booked</h1>
              <p className="text-gray-300 text-xs">50 minutes ago</p>
            </div>
          </div>
          <div className="flex space-x-4 mb-1">
            <div className="w-7 h-7 rounded-full flex items-center justify-center border border-gray-200">
              <SiPersonio />
            </div>
            <div>
              <h1 className="text-sm font-openSans font-bold">Event Booked</h1>
              <p className="text-gray-300 text-xs">12 hours ago</p>
            </div>
          </div>
          <div className="flex space-x-4 mb-1">
            <div className="w-7 h-7 rounded-full flex items-center justify-center border border-gray-200">
              <PiPersonSimpleCircleThin />
            </div>
            <div>
              <h1 className="text-sm font-openSans font-bold">Payment made</h1>
              <p className="text-gray-300 text-xs">Today, 11:59 AM</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-openSans font-bold mb-4">Activities</h1>
          <div className="flex space-x-4 mb-1">
            <div className="w-7 h-7 rounded-full flex items-center justify-center border border-gray-200">
              <IoPersonOutline />
            </div>
            <div>
              <h1 className="text-sm font-openSans font-bold">
                New event added
              </h1>
              <p className="text-gray-300 text-xs">Just now</p>
            </div>
          </div>
          <div className="flex space-x-4 mb-1">
            <div className="w-7 h-7 rounded-full flex items-center justify-center border border-gray-200">
              <PiPersonArmsSpreadLight />
            </div>
            <div>
              <h1 className="text-sm font-openSans font-bold">
                New user joined
              </h1>
              <p className="text-gray-300 text-xs">10 minutes ago</p>
            </div>
          </div>
          <div className="flex space-x-4 mb-1">
            <div className="w-7 h-7 rounded-full flex items-center justify-center border border-gray-200">
              <PiPersonSimpleSwimLight />
            </div>
            <div>
              <h1 className="text-sm font-openSans font-bold">User updated</h1>
              <p className="text-gray-300 text-xs">20 hours ago</p>
            </div>
          </div>
          <div className="flex space-x-4 mb-1">
            <div className="w-7 h-7 rounded-full flex items-center justify-center border border-gray-200">
              <IoPersonOutline />
            </div>
            <div>
              <h1 className="text-sm font-openSans font-bold">
                Event published
              </h1>
              <p className="text-gray-300 text-xs">Today, 10:59 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboadMainIndex;
