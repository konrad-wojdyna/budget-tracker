export function getElement(selectorName) {
  if (!selectorName) {
    throw new Error("Provide selector name!");
  }

  const element = document.querySelector(selectorName);

  if (!element) {
    throw new Error(`No such element with selector: ${selectorName}`);
  }

  return element;
}

export function getElements(selectorName) {
  if (!selectorName) {
    throw new Error("Provide selector name!");
  }

  const elements = document.querySelectorAll(selectorName);

  if (!elements || elements.length <= 0) {
    throw new Error(`No such elements with selector: ${selectorName}`);
  }

  return [...elements];
}
