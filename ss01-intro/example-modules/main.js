import { ShapeReport } from './modules/shape.js';

import { Square } from './modules/square.js';
import { Circle } from './modules/circle.js';

let myShape = new ShapeReport('myShape', document.body , 400, 400);
myShape.createReportList();

let square1 = new Square(myShape.listId, "100", 'blue');
square1.draw();
square1.reportArea();
square1.render();

let square2 = new Square(myShape.listId, "100", 'orange');
square2.draw();
square2.reportArea();
square2.render();

let circle1 = new Circle(myShape.listId, "100", 'red');
circle1.draw();
circle1.reportArea();
circle1.reportPerimeter();
circle1.render();