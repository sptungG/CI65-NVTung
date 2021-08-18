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
    document.getElementById(this.listId).appendChild(this.$shape);
  }

  reportArea() {
    this.$area = document.createElement("li");
    this.$area.textContent = `${this.name} area is ${this.length * this.length}px squared.`;
    document.getElementById(this.listId).appendChild(this.$area);
  }
}

export { Square };
