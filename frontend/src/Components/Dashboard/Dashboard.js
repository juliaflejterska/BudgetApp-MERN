import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import HistoricalTransactions from "../HistoricalTransactions/HistoricalTransactions";
import Chart from "../Chart/Chart";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const { totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses } =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <div className={styles.dashboard}>
      <h1>Wszystkie transakcje</h1>
      <div className={styles.transactions}>
        <div className={styles.balance}>
          <div className={styles.income}>
            <h2>Przychody</h2>
            <p>{totalIncome()}&nbsp;PLN</p>
          </div>
          <div className={styles.expense}>
            <h2>Wydatki</h2>
            <p>{totalExpenses()}&nbsp;PLN</p>
          </div>
          <div>
            <h2>Bilans</h2>
            <p>{totalBalance()}&nbsp;PLN</p>
          </div>
        </div>
        <div className={styles.chart}>
          <Chart />
        </div>
        <div className={styles.history}>
          <HistoricalTransactions />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
