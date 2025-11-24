import { Expense } from "../model/Expense.js";
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../storage/localStorage.js";

export function addNewExpenseService(
  uuid,
  name,
  amount,
  category,
  formatedDate
) {
  if (!uuid || !name || !amount || !category || !formatedDate) {
    throw new Error("Provide all required fields!");
  }

  const newExpense = new Expense(uuid, name, amount, category, formatedDate);

  const expenses = getFromLocalStorage();
  expenses.push(newExpense);

  saveToLocalStorage(expenses);
}

export function getAllExpensesService() {
  return getFromLocalStorage();
}

export function deleteExpenseByIdService(id) {
  const expenses = getAllExpensesService();

  const filteredExpenses = expenses.filter((expense) => expense.uuid !== id);
  saveToLocalStorage(filteredExpenses);

  return filteredExpenses;
}

export function findByCategoryService(category) {
  const expenses = getFromLocalStorage();

  if (category === "all") {
    return expenses;
  }

  return expenses.filter((expense) => expense.category === category);
}

export function calculateStatisticsService() {
  const expenses = getFromLocalStorage();

  const total = expenses.reduce((acc, item) => {
    return acc + Number(item.amount);
  }, 0);

  const expenseByCategory = expenses.reduce((acc, item) => {
    const category = item.category;
    const amount = Number(item.amount);

    if (acc[category]) {
      acc[category] += amount;
    } else {
      acc[category] = amount;
    }

    return acc;
  }, {});

  return { total, expenseByCategory };
}
