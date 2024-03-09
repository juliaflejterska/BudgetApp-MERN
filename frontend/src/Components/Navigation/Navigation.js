import React from "react";
import avatar from "../../img/avatar.png";
import styles from "./Navigation.module.css";
import { dashboard, expenses, trend } from "../../utils/Icons";

function Navigation({ active, setActive }) {
  const menuItems = [
    {
      id: 1,
      title: "Transakcje",
      icon: dashboard,
      link: "/dashboard",
    },
    {
      id: 2,
      title: "Przychody",
      icon: trend,
      link: "/dashboard",
    },
    {
      id: 3,
      title: "Wydatki",
      icon: expenses,
      link: "/dashboard",
    },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.userCon}>
        <img src={avatar} alt="" />
        <div className={styles.text}>
          <h2>Budget App</h2>
        </div>
      </div>
      <ul className={styles.menuItems}>
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? styles.active : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
