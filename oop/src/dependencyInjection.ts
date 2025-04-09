class User3 {
    age: number | undefined;
    username!: string;
}

interface UserRepository2 {
    getUsers: () => User3[];
    // delete, create ...
}

class UserMongoRepository implements UserRepository2 {
    getUsers():User3[] {
        console.log('Используем подключение у монго');
        return [{age: 15, username: 'Пользователь'}]
    }
}

class UserPostgresRepository implements UserRepository2{
    getUsers(): User3[] {
        console.log('ИСпользуем подключение к постгрес');
        return [{age: 15, username: 'Пользователь'}];
    }
}

class UserService {
    userRepo: UserRepository2;

    // Aggregation
    constructor(userRepo: UserRepository2) {
        this.userRepo = userRepo;
    }

    filterUserByAge(age: number) {
        const users = this.userRepo.getUsers();
        console.log(users);
    }
}

const userService = new UserService(new UserPostgresRepository());
userService.filterUserByAge(15);