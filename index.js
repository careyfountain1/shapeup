let squareInput = document.getElementById('squareText');
let rectangleWidthInput = document.getElementById("rectangleWidthText");
let rectangleHeightInput = document.getElementById("rectangleHeightText");
let circleInput = document.getElementById("circleText");
let triangleInput = document.getElementById("triangleText");

let NameShape = document.getElementById("shapeName");
let WidthShape = document.getElementById("shapeWidth");
let HeightShape = document.getElementById("shapeHeight");
let RadiusShape = document.getElementById("shapeRadius");
let AreaShape = document.getElementById("shapeArea");
let PerimeterShape = document.getElementById("shapePerimeter");

let targetName;
let targetWidth;
let targetHeight;
let targetRadius;
let targetArea;
let targetPerimeter;

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Content Loaded");
})


let randomPos = (min = 0, max = 400) =>{  //change defaults for maintainability
    return(Math.floor((Math.random() * (max - min) + 1) + min))
 };

const canvas = document.getElementById("canvas");

class Shape {
    constructor(name) {
        this.name = name;
    }
    describeShape() {
        NameShape.innerText = `Shape Name: ${targetName}`;
        WidthShape.innerText = `Shape Width: ${targetWidth}`;
        HeightShape.innerText = `Shape Height: ${targetHeight}`;
        RadiusShape.innerText = `Shape Radius: ${targetRadius}`;
        AreaShape.innerText = `Shape Area: ${targetArea}`;
        PerimeterShape.innerText = `Shape Perimeter: ${targetPerimeter}`;
    }
}

class Square extends Shape {
    constructor(side) {
        super('square');
        this.width = side;
        this.height = side;
        this.render();
    }
    render () {
        let printSquare = document.createElement("div");
        canvas.appendChild(printSquare);
        printSquare.className = 'square';
        printSquare.style.width = `${this.width}px`;
        printSquare.style.height = `${this.height}px`;
        printSquare.style.top = randomPos() + "px"; 
        printSquare.style.left = randomPos() + "px";
        printSquare.addEventListener("dblclick", () => {
            printSquare.remove();
        }) 
        printSquare.addEventListener("click", () => {
            this.getSquareStats();
            this.describeShape();
        })   
    }
    getSquareStats () {
        targetName = this.name;
        targetHeight = this.height;
        targetWidth = this.width;
        targetPerimeter = this.width * 4;
        targetArea = this.width * this.width;
    }
}
const makeSquare = function () {
    new Square(squareInput.value);
}

class Rectangle extends Shape {
    constructor(height, length) {
        super('Rectangle');
        this.length = length;
        this.height = height;
        this.render();
    }
    render () {
        let printRectangle = document.createElement("div");
        canvas.appendChild(printRectangle);
        printRectangle.className = 'rectangle';
        printRectangle.style.width = `${this.length}px`;
        printRectangle.style.height = `${this.height}px`;
        printRectangle.style.top = randomPos() + "px"; 
        printRectangle.style.left = randomPos() + "px";
        printRectangle.addEventListener("dblclick", () => {
            printRectangle.remove();
        })
        printRectangle.addEventListener("click", () => {
            this.getRectangleStats();
            this.describeShape();
        })  
    }
    getRectangleStats () {
        targetName = this.name;
        targetHeight = this.height;
        targetWidth = this.length;
        targetPerimeter = (2 * this.height) + (2 * this.length);
        targetArea = this.length * this.height;
    }
}
const makeRectangle = function () {
    new Rectangle(rectangleHeightInput.value, rectangleWidthInput.value);
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
        this.width = radius * 2;
        this.height = radius * 2; 
        this.render();
    }
    render () {
        let printCircle = document.createElement("div");
        canvas.appendChild(printCircle);
        printCircle.className = 'circle';
        printCircle.style.width = `${this.width}px`;
        printCircle.style.height = `${this.height}px`;
        printCircle.style.top = randomPos() + "px"; 
        printCircle.style.left = randomPos() + "px";
        printCircle.addEventListener("dblclick", () => {
            printCircle.remove();
        })  
        printCircle.addEventListener("click", () => {
            this.getCircleStats();
            this.describeShape();
        }) 
    }
    getCircleStats () {
        targetName = this.name;
        targetHeight = this.radius * 2;
        targetWidth = this.radius *2;
        targetPerimeter = 2 * 3.14 * this.radius;
        targetArea = 3.14 * (this.radius ** 2);
        targetRadius = this.radius; 
    }
}

const makeCircle = function () {
    new Circle(circleInput.value);
}

class Triangle extends Shape {
    constructor(height) {
        super('Triangle');
        this.height = height;
        this.width = height; 
        this.render();
    }
    render () {
        let printTriangle = document.createElement("div");
        canvas.appendChild(printTriangle);
        printTriangle.className = 'triangle';
        printTriangle.style.borderBottom = `${this.height}px solid yellow`;
        printTriangle.style.borderLeft = `${this.width}px solid transparent`;
        printTriangle.style.top = randomPos() + "px"; 
        printTriangle.style.left = randomPos() + "px";
        printTriangle.addEventListener("dblclick", () => {
            printTriangle.remove();
        })
        printTriangle.addEventListener("click", () => {
            this.getTriangleStats();
            this.describeShape();
        })      
    }
    getTriangleStats () {
        targetName = this.name;
        targetHeight = this.height;
        targetWidth = this.width;
        targetPerimeter = 2 * this.height * Math.sqrt(2 * (this.height **2));
        targetArea = 0.5 * this.height * this.height;
        targetRadius = 0.5 * (2-Math.sqrt(2)) * this.height;
    }
}

const makeTriangle = function () {
    new Triangle(triangleInput.value);
}