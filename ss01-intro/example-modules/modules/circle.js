class Circle {
  $shape;
  $area;
  $perimeter;
  constructor(listId, radius, color) {
    this.name = "circle";
    this.listId = listId;
    this.radius = radius;
    this.color = color;
  }
  draw() {
    this.$shape = document.createElement("div");
    let radius = this.radius * 2 + "px";
    this.$shape.style.width = radius;
    this.$shape.style.height = radius;
    this.$shape.style.backgroundColor = this.color;
    this.$shape.style.borderRadius = "50%";
    document.getElementById(this.listId).appendChild(this.$shape);
  }

  reportArea() {
    this.$area = document.createElement("li");
    this.$area.textContent = `${this.name} area is ${Math.round(Math.PI * (this.radius * this.radius))}px squared.`;

    document.getElementById(this.listId).appendChild(this.$area);
  }

  reportPerimeter() {
    this.$perimeter = document.createElement("li");
    this.$perimeter.textContent = `${this.name} circumference is ${Math.round(2 * Math.PI * this.radius)}px.`;

    document.getElementById(this.listId).appendChild(this.$perimeter);
  }
}

export { Circle };
