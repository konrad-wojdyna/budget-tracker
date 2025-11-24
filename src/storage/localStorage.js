const EXPENSES_KEY = "expenses";

export function saveToLocalStorage(expenses) {
  localStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
}

export function getFromLocalStorage() {
  try {
    const data = localStorage.getItem(EXPENSES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error loading from localStorage:`, error);
    return [];
  }
}
