function create(type = "div", id, style, parent, text = "") {
  let divWrapper = document.createElement(type);
  parent === document.body ? parent.appendChild(divWrapper) : document.getElementById(parent).appendChild(divWrapper);

  divWrapper.id = id;
  divWrapper.className = style;
  divWrapper.innerHTML = text;

  return divWrapper;
}

export default create;
