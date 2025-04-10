class HttpClient {
    get(url: string) {}
    post() {}
    put() {}
    delete() {}
}

class UserService {
    client: HttpClient;
    constructor(client) {
        this.client = client;
    }
    getOneUser(id: number) {}
    getAllUsers() {}
}

class RequisitesService {
    createRequisites() {}
    getRequisites() {}
    updateRequisites(id: number) {}
}

class DataFetcher {
    client: HttpClient;
    constructor(client) {
        this.client = client;
    }

    getUser(id: number) {
        this.client.get('http://localhost:3000' + id);
    }

    getRequisites(id: number) {
        this.client.get('http://localhost:3000/requisites' + id);
    }

    getClients() {
        this.client.get('http://localhost:3000/clients');
    }
}