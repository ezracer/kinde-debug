import React from "react";
import { Icon, Badge } from "@virtuslab/tetrisly-react";

const DashboardAverageCard = ({ header, content, footer }: { header: React.ReactNode, content: React.ReactNode, footer: React.ReactNode }) => (
  <div className="bg-white p-4 rounded-lg shadow-md w-96">
    <div className="mb-4">{header}</div>
    <div className="mb-4">{content}</div>
    <div>{footer}</div>
  </div>
);

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <DashboardAverageCard
        header={
          <div className="flex items-center justify-between mb-4">
            <button>
              <Icon name="20-time-clock" />
            </button>
            <a className="cursor-pointer">
              <Icon name="20-more-horizontal" />
            </a>
          </div>
        }
        content={
          <div>
            <p>Average Daily Fleet Flight Time</p>
            <h1 className="text-2xl font-bold">35.89 hours</h1>
            <Badge
              beforeIcon="16-dot"
              emphasis="medium"
              intent="positive"
              label="On Track"
            />
          </div>
        }
        footer={
          <div className="flex mt-4 items-center gap-2 text-sm text-gray-600">
            <Icon name="20-trend-up" color="#1D7C4D" />
            <p>
              <span className="text-green-600">+24%</span> last seven days
            </p>
          </div>
        }
      />
    </div>
  );
};

export default Home;
