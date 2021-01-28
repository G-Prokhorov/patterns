//Command


interface securitySystems {
      do(): void;
}

class airBag implements securitySystems {
      do(): void {
            console.log("Airbags inflated");
      }
}

class safetyBelt implements securitySystems {
      do(): void {
            console.log("The seat belt is tightened");
      }
}

class openAll implements securitySystems {
      openDoor() {
            console.log("Door opened");
      }

      openWindow() {
            console.log("Windows opened");
      }

      do() {
            this.openDoor();
            this.openWindow();
      }
}

class callTo911 implements securitySystems {
      do() {
            console.log("Calling to 911...\n");
      }
}

class emergencySituation {
      private commands: securitySystems[] = [];

      public setCommands(arr: securitySystems[]) {
            this.commands = arr;
      }

      public pushCommands(push: securitySystems) {
            this.commands.push(push);
      }

      public takeAction() {
            this.commands.forEach((element) => {
                  if (this.isCommand(element)) {
                        element.do();
                  }
            })
      }


      private isCommand(object): object is securitySystems {
            return object.do !== undefined;
      }
}

let accident = new emergencySituation;

let commands = [new airBag, new safetyBelt, new openAll];

accident.setCommands(commands);
accident.takeAction();

console.log('');

accident.pushCommands(new callTo911);
accident.takeAction();