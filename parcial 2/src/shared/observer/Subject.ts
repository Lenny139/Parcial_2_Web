import type Observer from './Observer.js';

export default abstract class Subject {
  private observers: Observer[];

  protected constructor() {
    this.observers = [];
  }

  public readonly attach = (observer: Observer): void => {
    this.observers.push(observer);
  };

  public readonly detach = (observer: Observer): void => {
    this.observers = this.observers.filter((currentObserver) => currentObserver !== observer);
  };

  public readonly notify = (): void => {
    this.observers.forEach((observer) => observer.update());
  };
}
