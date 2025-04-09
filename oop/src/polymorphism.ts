class Person2 {
    private _firstName;
    private _lastName;
    private _age;


    constructor(firstName:string, lastName:string, age:number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    public greeting(){
        console.log(`Привет я человек и меня зовут ${this._firstName}`)
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

class Employee2 extends Person2 {
    private inn;
    private number;
    private snils;

    constructor(firstName: string, lastName:string, age:number, inn:number, number:number, snils:number) {
        super(firstName, lastName, age);
        this.inn = inn;
        this.number = number;
        this.snils = snils;
    }

    greeting() {
        console.log(`Привет я работник и меня зовут ${this.firstName}`)
    }
}

class Developer3 extends Employee2 {
    private level;


    constructor(firstName: string, lastName: string, age: number, inn: number, number: number, snils: number, level:string) {
        super(firstName, lastName, age, inn, number, snils);
        this.level = level;
    }

    greeting() {
        console.log(`Привет я разраб и меня зовут ${this.firstName}`)
    }
}

const dev2 = new Developer3('Artem', 'Kosyrev', 16, 5, 6, 4, 'junior');
const employee3 = new Employee2('Max', 'Kos', 16, 4, 5, 6);
const person = new Person2('Egor', 'Vor', 23);

// dev2.greeting();
// employee3.greeting();
// person.greeting();

const personList: Person2[] = [dev2, employee3, person];

function massGreeting(persons: Person2[]) {
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        person.greeting();
    }
}

massGreeting(personList);