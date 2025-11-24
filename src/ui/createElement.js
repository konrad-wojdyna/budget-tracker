import { firstLetterUppercase } from "../utils/firstLetterUppercase.js";

const categoryEmoji = {
  jedzenie: "🍕",
  transport: "🚗",
  rozrywka: "🎬",
  inne: "📦",
};

export const createExpenseItem = (
  expenseUUID,
  expenseName,
  expenseCategory,
  expenseAmount,
  expenseDate,
  expenseList
) => {
  if (
    !expenseName |
    !expenseCategory |
    !expenseAmount |
    !expenseDate |
    !expenseList
  ) {
    throw new Error("Provide all required parameters!");
  }

  const liElement = createElement("li", "expenses-list__item");
  liElement.dataset.id = expenseUUID;

  const divElementCol1 = createElement("div", "expenses-list__col1");

  const categoryElement = createElement(
    "p",
    "expenses-list__col1--category",
    `${categoryEmoji[expenseCategory]} ${firstLetterUppercase(expenseCategory)}`
  );

  const nameElement = createElement(
    "p",
    "expenses-list__col1--name",
    expenseName
  );

  divElementCol1.appendChild(categoryElement);
  divElementCol1.appendChild(nameElement);

  const divElementCol2 = createElement("div", "expenses-list__col2");

  const amountElement = createElement(
    "p",
    "expenses-list__col2--amount",
    `-${expenseAmount}zł`
  );

  const dateElement = createElement(
    "p",
    "expenses-list__col2--date",
    expenseDate
  );

  divElementCol2.appendChild(amountElement);
  divElementCol2.appendChild(dateElement);

  const btnDeleteExpense = createElement("button", "btn_delete", "Usuń");

  liElement.appendChild(divElementCol1);
  liElement.appendChild(divElementCol2);
  liElement.appendChild(btnDeleteExpense);

  expenseList.appendChild(liElement);
};

const createElement = (element, className, text) => {
  if (!element) {
    throw new Error("Provide element name to create!");
  }

  const domElement = document.createElement(element);
  domElement.classList.add(className);

  if (text) {
    domElement.textContent = text;
  }

  return domElement;
};
