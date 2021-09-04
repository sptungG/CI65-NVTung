import BaseComponent from "../components/BaseComponent.js";

export function validateEmail(email) {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(String(email).toLowerCase());
}

/**
 * append component vào trong element, bổ trợ cho refresh()
 * @param {HTMLElement} $element
 * @param  {Array<BaseComponent>} components
 */
export function appendTo($element, ...components) {
  for (const component of components) {
    let child = component.refresh();

    $element.appendChild(child);
  }
}
