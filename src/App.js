// import logo from './logo.svg';
// import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toliet Paper",
    amount: "94.12",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "New Car",
    amount: "288",
    date: new Date(2022, 7, 14),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: "180",
    date: new Date(2022, 2, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
