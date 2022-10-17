import { makeAutoObservable } from "mobx";

export default class ActivityStore {
  title = "Hello from MobX!";

  constructor() {
    makeAutoObservable(this);
  }

  // by using an arrow function we don't have to bind the action in the constructor
  setTitle = () => {
    this.title = this.title + "!";
  };
}
