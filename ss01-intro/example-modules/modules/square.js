class Square {
  $shape;
  $area;
  constructor(listId, length, color) {
    this.name = "square";
    this.listId = listId;
    this.length = length;
    this.color = color;
  }
  draw() {
    this.$shape = document.createElement("div");
    let length = this.length+"px";
    this.$shape.style.width = length;
    this.$shape.style.height = length;
    this.$shape.style.backgroundColor = this.color;
  }

  reportArea() {
    this.$area = document.createElement("h4");
    this.$area.textContent = `${this.name} area is ${this.length * this.length}px squared.`;
  }
  render() {
    let reportElement = document.createElement("li");
    reportElement.appendChild(this.$shape);
    reportElement.appendChild(this.$area);
    document.getElementById(this.listId).appendChild(reportElement);
  }
}

export { Square };
