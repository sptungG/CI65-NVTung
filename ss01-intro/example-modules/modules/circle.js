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
  }

  reportArea() {
    this.$area = document.createElement("h4");
    this.$area.textContent = `${this.name} area is ${Math.round(Math.PI * (this.radius * this.radius))}px squared.`;
  }

  reportPerimeter() {
    this.$perimeter = document.createElement("h4");
    this.$perimeter.textContent = `${this.name} circumference is ${Math.round(2 * Math.PI * this.radius)}px.`;
  }

  render() {
    let reportElement = document.createElement("li");
    reportElement.appendChild(this.$shape);
    reportElement.appendChild(this.$area);
    reportElement.appendChild(this.$perimeter);
    document.getElementById(this.listId).appendChild(reportElement);
  }
}

export { Circle };
