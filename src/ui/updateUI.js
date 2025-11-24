import { getElement, getElements } from "../utils/getElements.js";
import { createExpenseItem } from "./createElement.js";
import {
  calculateStatisticsService,
  deleteExpenseByIdService,
  getAllExpensesService,
} from "../service/expenseService.js";

const errorsInputs = getElements(".error-validation");
const expenseList = getElement(".expenses-list");

export function updateFooterYearUI() {
  const yearDOM = getElement(".year");
  yearDOM.textContent = new Date().getFullYear().toString();
}

export function updateStatisticsUI() {
  const statisticsCards = getElements(".statistics-card");
  const { expenseByCategory, total } = calculateStatisticsService();

  statisticsCards.forEach((statisticCard) => {
    const dataId = statisticCard.dataset.id;

    if (dataId === "total") {
      statisticCard.querySelector(".amount").textContent = `${total.toFixed(
        2
      )} zł`;
    } else if (expenseByCategory[dataId]) {
      statisticCard.querySelector(".amount").textContent = `${expenseByCategory[
        dataId
      ].toFixed(2)} zł`;
    } else if (!expenseByCategory[dataId]) {
      statisticCard.querySelector(".amount").textContent = "0zł";
    }
  });
}

export function updateExpenseListUI(expenses) {
  if (!expenses) {
    throw new Error("Provide expenses array!");
  }

  clearUpdateExpenseListUI(expenseList);

  const expensesLengthDOM = getElement(".amount-expenses");
  expensesLengthDOM.textContent = `(${expenses.length}) wydatki`;

  if (expenses.length <= 0) {
    const nothingToShowText = document.createElement("p");
    nothingToShowText.textContent = "Nothing to show!";
    expenseList.appendChild(nothingToShowText);
    return;
  }

  expenses.forEach((expense) => {
    createExpenseItem(
      expense.uuid,
      expense.name,
      expense.category,
      expense.amount,
      expense.date,
      expenseList
    );
  });
}

function clearUpdateExpenseListUI(expenseList) {
  while (expenseList.lastChild) {
    expenseList.removeChild(expenseList.lastChild);
  }
}

export function showSuccessBannerUI() {
  const successBannerUI = getElement(".success");
  successBannerUI.classList.toggle("show");
  toggleBanner(successBannerUI);
}

export function showErrorInputUI(errorInputName, errorText) {
  errorsInputs.forEach((input) => {
    const keyError = input.dataset.error;
    if (keyError === errorInputName) {
      input.classList.toggle("show");
      input.textContent = errorText;
      toggleBanner(input);
    }
  });
}

export function addEventListenerToExpensesList() {
  expenseList.addEventListener("click", function (e) {
    const btnDelete = e.target.closest("button.btn_delete");

    if (btnDelete) {
      const expenseID = btnDelete.parentElement.dataset.id;

      const expenses = deleteExpenseByIdService(expenseID);
      // const expenses = getAllExpensesService();
      updateExpenseListUI(expenses);
      updateStatisticsUI();
    }
  });
}

function toggleBanner(input) {
  if (!input) {
    throw new Error("Provide input!");
  }

  setTimeout(() => {
    input.classList.toggle("show");
  }, 3000);
}
