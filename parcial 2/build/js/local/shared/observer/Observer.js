export default class Observer {
    subjects;
    constructor(subjects) {
        this.subjects = subjects;
        this.subjects.attach(this);
    }
}
//# sourceMappingURL=Observer.js.map