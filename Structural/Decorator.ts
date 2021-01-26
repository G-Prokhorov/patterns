//Decorator
interface carComponent {
      construct(): string;
}

class carcass implements carComponent {
      construct(): string {
            return "Carcass";
      }
}

class constructDecorator implements carComponent {
      protected carcass: carComponent;

      constructor(carcass: carComponent) {
            this.carcass = carcass;
      }

      construct(): string {
            return "Exmpl(" + this.carcass.construct() + ")";
      }
}

class trans extends constructDecorator {
      construct(): string {
            return "Transmission(" + this.carcass.construct() + ")";
      }
}

class bodyKit extends constructDecorator {
      construct(): string {
            return "Body kit(" + this.carcass.construct() + ")";
      }
}

let newCar = new carcass;

let newCar_stepTwo = new trans(newCar);
let newCar_stepThree = new bodyKit(newCar_stepTwo);

console.log(newCar_stepThree.construct());



