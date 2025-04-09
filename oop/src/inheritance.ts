class Person {
    private _firstName;
    private _lastName;
    private _age;


    constructor(firstName:string, lastName:string, age:number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    public get fullName() {
        return `Фамилия - ${this._lastName} Имя - ${this._firstName}`;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if(value < 0) {
            this._age = 0;
        } else {
            this._age = value;
        }
    }
}

class Employee extends Person {
    private inn;
    private number;
    private snils;

    constructor(firstName: string, lastName:string, age:number, inn:number, number:number, snils:number) {
        super(firstName, lastName, age);
        this.inn = inn;
        this.number = number;
        this.snils = snils;
    }
}

const employee1 = new Employee('Artem', 'Kos', 16, 4, 5, 6);
console.log(employee1);

class Developer extends Employee {
    private level;


    constructor(firstName: string, lastName: string, age: number, inn: number, number: number, snils: number, level:string) {
        super(firstName, lastName, age, inn, number, snils);
        this.level = level;
    }
}

const dev = new Developer('Artem', 'Kosyrev', 16, 5, 6, 4, 'junior');
console.log(dev.fullName);