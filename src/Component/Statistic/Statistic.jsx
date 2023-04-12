import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Assignment 1",
    A: 60,
    fullMark: 60,
  },
  {
    name: "Assignment 2",
    A: 60,
    fullMark: 60,
  },
  {
    name: "Assignment 3",
    A: 50,
    fullMark: 60,
  },
  {
    name: "Assignment 4",
    A: 58,
    fullMark: 60,
  },
  {
    name: "Assignment 5",
    A: 32,
    fullMark: 60,
  },
  {
    name: "Assignment 6",
    A: 30,
    fullMark: 60,
  },
  {
    name: "Assignment 7",
    A: 60,
    fullMark: 60,
  },
  {
    name: "Assignment 8",
    A: 60,
    fullMark: 60,
  },
];

export default function App() {
  return (
    <>
      <div className="my-container text-center pic mt-7 mb-10">
        <h1 className="text-3xl font-bold">Statistic Analysis</h1>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <div className="flex justify-center item-center lg:py-5 lg:mb-24">
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar
              name="Marks"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.4}
            />
            <Tooltip />
            <Legend />
          </RadarChart>
        </div>
      </ResponsiveContainer>
    </>
  );
}
