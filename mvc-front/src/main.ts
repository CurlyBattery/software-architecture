import {CounterTwoView} from "./modules/counterTwo/CounterTwoView";
import {CounterView} from "./modules/counter/CounterView";
import {UsersModel} from "./modules/users/usersModel";
import {UsersController} from "./modules/users/usersController";
import {UsersView} from "./modules/users/usersView";

// const counterTwoView = new CounterTwoView(document.getElementById('counter1')!);
// const counterView = new CounterView(document.getElementById('counter2')!);

// counterView.render();

const usersModel = new UsersModel();
const usersController = new UsersController(usersModel);
const usersView = new UsersView(
    document.getElementById("users")!,
    usersController
);

usersView.mount()


