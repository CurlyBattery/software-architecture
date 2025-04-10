import {HttpRequest} from "./httpServer";

enum Route {
    ABOUT='about_page',
    HOME='home_page'
}


interface IRouter {
    parseUrl: (url) => void;
    addQueryParams: (params: Record<string, string>) => void;
}

interface IClientRouter extends IRouter {
    navigate: (route: Route) => void;
    attachEventListener: () => void;
}

interface IServerRouter extends IRouter {
    prepareUrlForClient: (url: string) => void;
}

class ServerRouter implements IServerRouter {
    parseUrl(url): void {}
    addQueryParams(params: Record<string, string>): void {}
    prepareUrlForClient (url: string): void {}
}

class ClientRouter implements IClientRouter {
    parseUrl(url): void {}
    addQueryParams(params: Record<string, string>): void {}
    navigate(route: Route): void {}
    attachEventListener(): void{}
}



const renderHtmlPage = (store: any, url: any) => {
    const router = new Router();
}

const client  = () => {
    const store = createStore(initialData);
    const router = new ClientRouter();

    const di = createDependencyContainer(router, store)
}

const server = (req, res) => {
    const store = createStore(initialData);
    const router = new ServerRouter();

    const htmlPage = renderHtmlPage(store, req.url)
    const di = createDependencyContainer(router, store);
}

const createDependencyContainer = (router: IRouter, store, httpRequest: HttpRequest) => {
    return {
        getRouter: () => router,
        getStore: () => store,
        getRequest: () => httpRequest,
    }
}