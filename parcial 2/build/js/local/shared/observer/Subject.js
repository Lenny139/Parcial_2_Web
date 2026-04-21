export default class Subject {
    observers;
    constructor() {
        this.observers = [];
    }
    attach = (observer) => {
        this.observers.push(observer);
    };
    detach = (observer) => {
        this.observers = this.observers.filter((currentObserver) => currentObserver !== observer);
    };
    notify = () => {
        this.observers.forEach((observer) => observer.update());
    };
}
//# sourceMappingURL=Subject.js.map