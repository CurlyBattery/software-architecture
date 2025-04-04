import {SortField, SortOrder, UsersModel} from "./usersModel";

export class UsersController {
    model: UsersModel;

    constructor(model: UsersModel) {
        this.model = model;
    }

    public handleCreate(username: string, age: number) {
        if(!username || !age) {
            throw Error('Укажите username и age');
        }
        return this.model.createUser(username, age);
    }

    public handleSort(field: SortField, order: SortOrder){
        if(!field) {
            throw Error('Укажите поле сортировки');
        }
        return this.model.sortUsers(field, order);
    }
}