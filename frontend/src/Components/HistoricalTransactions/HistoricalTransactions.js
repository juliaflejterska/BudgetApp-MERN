import React from "react";
import { useGlobalContext } from "../../context/globalContext";
import styles from "./HistoricalTransactions.module.css";

function HistoricalTransactions() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <div className={styles.history}>
      <h2>Ostatnie transakcje</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div
            key={_id}
            className={styles.transaction}
            style={{
              background: type === "expense" ? "#ff1e00" : "#59ce8f",
            }}
          >
            <p>
              <strong>{title}</strong>
            </p>

            <h3>
              {type === "expense"
                ? `-${amount <= 0 ? 0 : amount} PLN`
                : `+${amount <= 0 ? 0 : amount} PLN`}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default HistoricalTransactions;
