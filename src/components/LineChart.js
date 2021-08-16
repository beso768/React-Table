import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import httpService from "../services/httpService";
const LineChart = () => {
  const [revenue, setRevenue] = useState("");
  const [months, setMonths] = useState("");

  // initialize data
  useEffect(async () => {
    const response = await httpService.getAllData();
    setRevenue(response.map((item) => item.data));
    setMonths(response.map((item) => item.month));
  }, []);

  return (
    <div className="line-chart">
      <h2>Line Chart</h2>
      <div>
        <Line
          data={{
            labels: [...months],

            datasets: [
              {
                label: "Purchase amount (USD)",
                data: [...revenue],
                borderColor: "#8e5ea2",
                fill: false,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            elements: {
              rectangle: {
                borderWidth: 2,
              },
            },
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
