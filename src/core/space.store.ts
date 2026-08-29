import { makeAutoObservable } from "mobx";

export class SpaceStore {
  status = "System Idle";

  constructor() {
    makeAutoObservable(this);
  }

  launchSystem() {
    this.status = "Orbit Achieved 🚀";
  }
}

export const spaceStore = new SpaceStore();
