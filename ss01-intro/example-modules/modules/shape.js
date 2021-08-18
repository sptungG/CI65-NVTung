class ShapeReport {
  constructor(id, parent, width, height) {
    this.id = id;
    this.parent = parent;
    this.width = width;
    this.height = height;
  }

  createReportList() {
    let list = document.createElement("ul");
    list.id = this.id + "-reporter";

    this.parent.appendChild(list);
    this.listId = list.id;
  }
}

export { ShapeReport };
