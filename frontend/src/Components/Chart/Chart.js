import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { useGlobalContext } from "../../context/globalContext";
import { dateFormat } from "../../utils/dateFormat";
import styles from "./Chart.module.css";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Chart() {
  const { incomes, expenses } = useGlobalContext();

  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: "Przychody",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "#59CE8F",
        tension: 0.2,
      },
      {
        label: "Wydatki",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: "#FF1E00",
        tension: 0.2,
      },
    ],
  };

  return <Line className={styles.chart} data={data} />;
}

export default Chart;
