class User2 {
    private _username;
    private _password;
    private _id;


    constructor(username, password) {
        this._username = username;
        this._password = password;
        this._id = 123;
    }


    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get id() {
        return this._id;
    }
}

const user = new User2('Artem', '2314');
user.username = 5;

class Database {
    private _url;
    private _port;
    private _username;
    private _password;
    private _tables: any[];

    constructor(url:number, port:number, username:number, password:number) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = [];
    }

    public createNewTable(table: {name: string}) {
        this._tables.push(table);
    }

    public clearTables() {
        this._tables = [];
    }

    get url() {
        return this._url;
    }

    get port() {
        return this._port;
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

    get tables() {
        return this._tables;
    }
}

const db = new Database(1, 2, 3, 4);
db.createNewTable({name: 'Artem'});
console.info(db.tables);
db.clearTables();
console.warn(db.tables);