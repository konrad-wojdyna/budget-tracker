import "./ui/formAddNewExpense.js";
import "./ui/filterExpenses.js";

import {
  updateExpenseListUI,
  updateFooterYearUI,
  updateStatisticsUI,
} from "./ui/updateUI.js";

import { getAllExpensesService } from "./service/expenseService.js";

import { addEventListenerToExpensesList } from "./ui/updateUI.js";

window.addEventListener("load", () => {
  const expenses = getAllExpensesService();

  updateExpenseListUI(expenses);
  updateStatisticsUI();
  updateFooterYearUI();

  addEventListenerToExpensesList();
});
