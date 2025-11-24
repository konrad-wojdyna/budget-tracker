import { getElement } from "../utils/getElements.js";

import { updateExpenseListUI } from "./updateUI.js";

import { findByCategoryService } from "../service/expenseService.js";

const filterInput = getElement("#filter");

filterInput.addEventListener("change", (e) => {
  const selectedCategory = e.target.value;

  const expensesByCategory = findByCategoryService(selectedCategory);

  updateExpenseListUI(expensesByCategory);
});
