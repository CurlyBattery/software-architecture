const generatedId = () => Date.now() + Math.random();

class User {
    id: number;
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.id = generatedId();
        this.username = username;
        this.password = password;
    }

    saveToDatabase() {

    }

    log() {
        console.log(this);
    }

    send( ) {
    }
}

class UserRepository {
    save(user: User) {

    }
}

class UserLogger {
    log(user: User) {
        console.log(user);
    }
}

class UserController {
    send() {

    }
}