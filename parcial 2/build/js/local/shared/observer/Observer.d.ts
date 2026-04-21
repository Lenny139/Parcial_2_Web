import type Subject from './Subject.js';
export default abstract class Observer {
    protected subjects: Subject;
    protected constructor(subjects: Subject);
    abstract readonly update: () => void;
}
