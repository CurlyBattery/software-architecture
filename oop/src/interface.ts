class User2 {
    username: string;
    age: number;
}

class Car {

}

interface Repository<T> { // Т - нечто общееб генерик
    create: (obj: T) => T;
    get: () => T;
    update: (obj: T) => T;
    delete: (Obj: T) => T;
}

class UserRepository implements Repository<User2> {
    create(user: User2): User2 {
        return undefined as any;
    }
    get: () => User2;
    update: (obj: User2) => User2;
    delete: (Obj: User2) => User2;
}

class CarRepository implements Repository<Car> {
    create: (obj: Car) => Car;
    get: () => Car;
    update: (obj: Car) => Car;
    delete: (Obj: Car) => Car;

}