class Engine {
    drive() {
        console.log('Двигатель работает');
    }
}

class Freshener {

}

class Flat {
    freshener: Freshener;

    constructor(freshener: Freshener) {
        // Aggregation
        this.freshener = freshener;
    }
}

class Wheel {
    drive() {
        console.log('Колесо едет');
    }
}

class Car {
    engine: Engine;
    wheels: Wheel[] = [];
    freshener: Freshener;

    constructor(freshener) {
        //Aggregation
        this.freshener = freshener;
        // Composition
        this.engine = new Engine();
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
    }

    // делегирование
    drive() {
        this.engine.drive();
        for (let i = 0; i < this.wheels.length; i++) {
            this.wheels[i].drive();
        }
    }
}

const bmw = new Car();
bmw.drive();