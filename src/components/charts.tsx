"use client";

import {
  PieChart,
  BarChart as RechartsBarChart,
  Bar,
  Cell,
  Pie,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

interface DonutChartProps {
  data: Array<{
    label: string;
    value: number;
  }>;
}

export function DonutChart({ data }: DonutChartProps) {
  const COLORS = ["#2c4a2c", "#88ab75", "#b4c7a9"];

  return (
    <div className="h-[200px] sm:h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius="50%"
            outerRadius="70%"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

interface BarChartProps {
  data: Array<{
    month: string;
    value: number;
  }>;
}

export function BarChart({ data }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data}>
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Bar dataKey="value" fill="#2c4a2c" />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
