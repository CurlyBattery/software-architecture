import {CounterModel} from "./CounterModel";

export class CounterController {
    model: CounterModel;

    constructor(model: CounterModel) {
        this.model = model;
    }

    handleIncrement() {
        this.model.increment();
    }

    handleDecrement() {
        this.model.decrement();
    }

    handleMultiple() {
        this.model.multipleAndDivide();
    }
}