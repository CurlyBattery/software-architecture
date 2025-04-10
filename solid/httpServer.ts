export interface HttpRequest {
    get: () => void;
    post: () => void;
    put: () => void;
    delete: () => void;
}

interface TokenStorage {
    addToken: () => void;
    getToken: () => void;
}

export class ServerHttp implements HttpRequest {
    delete(): void {}
    get(): void {}
    post(): void {}
    put (): void {}
}


export class ClientHttp implements HttpRequest, TokenStorage {
    delete(): void {}
    get(): void {}
    post(): void {}
    put (): void {}

    addToken(): void {
        return localStorage.get('token')
    }

    getToken (): void {}
}
