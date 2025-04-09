class Database {
    url: number | undefined;
    private static instance: Database; // можно обращаться без создания экземпляра класса.

    constructor() {
        if(Database.instance) {
            return Database.instance;
        }
        this.url = Math.random();
        Database.instance = this;
    }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1.url)
console.log(db2.url)
