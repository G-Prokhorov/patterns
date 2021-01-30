class Car {
      private state: State;

      public setState(state: State) {
            console.log("New state")
            this.state = state;
            state.setCar(this);
      }

      public ride() {
            this.state.ride();
            console.log("");
      }

      public parking() {
            this.state.parking();
            console.log("");
      }

      public brake() {
            this.state.brake();
            console.log("");
      }
}

abstract class State {
      protected car: Car;

      private bPedal: boolean;
      private gPedal: boolean;
      private hBrake: boolean;
      private gear: string; //P, D, R

      public setCar(car: Car): void {
            this.car = car;
      }

      protected brakePedal(state: boolean): void {
            console.log("Brake pedal: " + state);
            this.bPedal = state;
      }

      protected gasPedal(state: boolean): void {
            console.log("Gas pedal: " + state);
            this.gPedal = state;
      }

      protected handBrake(state: boolean): void {
            console.log("Hand brake: " + state);
            this.hBrake = state;
      }

      protected setGear(state: string): void {
            console.log("Gear: " + state);
            this.gear = state;
      }

      public parking(): void {
            console.log("Nothing");
      }

      public ride(): void {
            console.log("Nothing");
      }

      public brake(): void {
            console.log("Nothing");
      }
}

class parking extends State {
      public ride(): void {
            this.brakePedal(false);
            this.handBrake(false);
            this.setGear("D");
            this.gasPedal(true);
            this.car.setState(new ride);
      }
}

class ride extends State {
      public parking(): void {
            this.brakePedal(true);
            this.handBrake(true);
            this.setGear("P");
            this.gasPedal(false);
            this.car.setState(new parking);
      }

      public ride(): void {
            this.handBrake(false);
            this.gasPedal(true);
      }

      public brake(): void {
            this.handBrake(true);
            this.gasPedal(false);
      }
}

let car = new Car;
car.setState(new parking);

car.brake();
car.parking();
car.ride();

car.brake();
car.ride();
car.parking();


