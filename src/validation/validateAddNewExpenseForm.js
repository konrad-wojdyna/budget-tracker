import { showErrorInputUI } from "../ui/updateUI.js";

export function validationAddNewExpenseForm(form) {
  if (!form) {
    throw new Error("Provide form!");
  }

  for (const [key, value] of form.entries()) {
    if (key === "amount" && value <= 0) {
      showErrorInputUI("amount", "Wprowadź poprawną cenę!");
      return false;
    } else if (key === "name" && value.trim() === "") {
      showErrorInputUI("name", "Wprowadź nazwę wydatku!");
      return false;
    } else if (key === "date" && value === "") {
      showErrorInputUI("date", "Wprowadź poprawną datę!");
      return false;
    }
  }

  return true;
}
