//Shape 원본
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

let square = new Shape(3, 4);
console.log(square);
console.log(square.getArea());

//Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getCrossline() {
    return Math.round(Math.sqrt(this.width ** 2 + this.height ** 2));
  }
}

let rec = new Rectangle(5, 6);
console.log(rec.getArea());
console.log(rec.getCrossline());

//Triangle
class Triangle extends Shape {
  getArea() {
    return Math.round((this.width * this.height) / 2);
  }
}

let tri = new Triangle(4, 5);
console.log(tri.width);
console.log(tri.getArea());

//Circle
class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    return Math.round((this.width / 2) ** 2 * Math.PI);
  }
}

let ball = new Circle(4, 4);
console.log(ball.getArea());
