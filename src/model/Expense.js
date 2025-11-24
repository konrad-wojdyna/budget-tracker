export class Expense {
  #uuid;
  #name;
  #amount;
  #category;
  #date;

  constructor(uuid, name, amount, category, date) {
    this.#uuid = uuid;
    this.#name = name;
    this.#amount = amount;
    this.#category = category;
    this.#date = date;
  }

  get uuid() {
    return this.#uuid;
  }

  get name() {
    return this.#name;
  }

  get amount() {
    return this.#amount;
  }

  get category() {
    return this.#category;
  }

  get date() {
    return this.#date;
  }

  toJSON() {
    return {
      uuid: this.#uuid,
      name: this.#name,
      amount: this.#amount,
      category: this.#category,
      date: this.#date,
    };
  }
}
