import type Observer from './Observer.js';
export default abstract class Subject {
    private observers;
    protected constructor();
    readonly attach: (observer: Observer) => void;
    readonly detach: (observer: Observer) => void;
    readonly notify: () => void;
}
