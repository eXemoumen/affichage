import React from "react";
import { Header } from "@/components/header";
import Image from "next/image";

// Custom DonutChart component with legend
interface DonutChartData {
  label: string;
  value: number;
}

const DonutChart = ({
  data,
  colors,
}: {
  data: DonutChartData[];
  colors: string[];
}) => {
  const total = data.reduce(
    (sum: number, item: DonutChartData) => sum + item.value,
    0
  );
  let currentAngle = 0;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64">
        <svg viewBox="0 0 100 100" className="transform -rotate-90">
          {data.map((item: DonutChartData, i: number) => {
            const percentage = (item.value / total) * 100;
            const angle = (percentage / 100) * 360;
            const x1 = 50 + 40 * Math.cos((currentAngle * Math.PI) / 180);
            const y1 = 50 + 40 * Math.sin((currentAngle * Math.PI) / 180);
            const x2 =
              50 + 40 * Math.cos(((currentAngle + angle) * Math.PI) / 180);
            const y2 =
              50 + 40 * Math.sin(((currentAngle + angle) * Math.PI) / 180);
            const largeArc = angle > 180 ? 1 : 0;

            const pathData = `
              M 50 50
              L ${x1} ${y1}
              A 40 40 0 ${largeArc} 1 ${x2} ${y2}
              Z
            `;

            currentAngle += angle;

            return (
              <path
                key={i}
                d={pathData}
                fill={colors[i]}
                className="transition-colors duration-200 hover:opacity-80"
              />
            );
          })}
          <circle cx="50" cy="50" r="25" fill="white" />
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {data.map((item: DonutChartData, i: number) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: colors[i] }}
            />
            <span className="text-sm">
              {item.label} ({item.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const chartColors = {
  gender: ["#FF69B4", "#4169E1"], // Pink, Blue
  frequency: ["#22C55E", "#EAB308", "#EC4899"], // Green, Yellow, Pink
  activity: ["#3B82F6", "#8B5CF6", "#F97316"], // Blue, Purple, Orange
};

export default function AnalyseSociologique() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={2} />

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Analyses sociologiques
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Genre</h3>
              <DonutChart
                data={[
                  { label: "Femme", value: 75.8 },
                  { label: "Homme", value: 24.2 },
                ]}
                colors={chartColors.gender}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Fréquentation</h3>
              <DonutChart
                data={[
                  { label: "Quotidien", value: 29.7 },
                  { label: "1 a 3 fois par semaine", value: 29.7 },
                  { label: "rarement", value: 33 },
                  { label: "jamais", value: 6.6 },
                  { label: "autre", value: 1.1 },
                ]}
                colors={chartColors.frequency}
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Activités</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <DonutChart
              data={[
                { label: "reposer", value: 64.8 },
                { label: "manger", value: 70.3 },
                { label: "Autre", value: 30 },
              ]}
              colors={chartColors.activity}
            />
            <div className="space-y-4">
              <h3 className="text-lg font-medium">cart d&apos;usage</h3>
              <div className="relative h-64 md:h-80 lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/sco.png"
                  alt="Zone map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">
            Suggestions d&apos;Amélioration
          </h2>
          <ul className="space-y-3 list-disc pl-6">
            <li>Ajout de tables et chaises pour plus de confort</li>
            <li>Installation de bancs et de tables de pique-nique</li>
            <li>Rendre l&apos;espace plus vert et renouveler le gazon</li>
            <li>
              Améliorer l&apos;entretien pour conserver la verdure en permanence
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
