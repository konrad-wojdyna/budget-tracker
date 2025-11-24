import { getElement } from "../utils/getElements.js";
import { generateUUID } from "../utils/generateUUID.js";
import { formatDate } from "../utils/date.js";

import { validationAddNewExpenseForm } from "../validation/validateAddNewExpenseForm.js";

import {
  updateExpenseListUI,
  updateStatisticsUI,
  showSuccessBannerUI,
} from "./updateUI.js";

import {
  addNewExpenseService,
  getAllExpensesService,
} from "../service/expenseService.js";

const formExpense = getElement(".expense-form");
const btnSubmitExpense = getElement(".expense-form__btn--submit");

btnSubmitExpense.addEventListener("click", (e) => {
  e.preventDefault();

  const form = new FormData(formExpense);

  const name = form.get("name");
  const amount = form.get("amount");
  const category = form.get("category");
  const dateValue = form.get("date");
  const date = new Date(dateValue);
  const formatedDate = formatDate(date);

  if (!validationAddNewExpenseForm(form)) {
    return;
  }

  //service add new expense
  const uuid = generateUUID();
  addNewExpenseService(uuid, name, amount, category, formatedDate);

  const expenses = getAllExpensesService();

  showSuccessBannerUI();
  updateExpenseListUI(expenses);
  updateStatisticsUI();

  formExpense.reset();
});
