class Rectangle {
    width;
    height;

    constructor(w:number, h:number) {
        this.width = w;
        this.height = h;
    }

    calcArea() {
        return this.width * this.height;
    }

    calcPerimeter() {
        return (this.height + this.width) / 2;
    }
}

const rect = new Rectangle(5, 10);
rect.calcArea();