import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";

import styles from "./Expenses.module.css";

function ExpenseForm() {
  const { addExpense, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <form className={styles.incomeForm} onSubmit={handleSubmit}>
      <h2>Dodaj wydatek</h2>
      {error && <p>{error}</p>}
      <div>
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Tytuł"
          onChange={handleInput("title")}
        />
      </div>
      <div>
        <input
          value={amount}
          type="text"
          name={"amount"}
          placeholder={"Kwota"}
          onChange={handleInput("amount")}
        />
      </div>
      <div>
        <DatePicker
          id="date"
          placeholderText="Data"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>
      <div>
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Kategoria
          </option>
          <option value="studia">Studia</option>
          <option value="spożywcze">Spożywcze</option>
          <option value="zdrowie">Zdrowie</option>
          <option value="subskrypcje">Subskrypcje</option>
          <option value="jedzenie na mieście">Jedzenie na mieście</option>
          <option value="ubrania">Ubrania</option>
          <option value="podróże">Podróże</option>
          <option value="inne">Inne</option>
        </select>
      </div>
      <div>
        <textarea
          name="description"
          value={description}
          placeholder="Opis"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
        ></textarea>
      </div>
      <div>
        <Button name={"DODAJ"} color={"#27374D"} />
      </div>
    </form>
  );
}

export default ExpenseForm;
