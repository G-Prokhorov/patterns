//Factory Method
interface newCar {
      giveNewCar(): string;
}

abstract class CarShowroom {

      public abstract Method(): newCar;

      public Buy(): string {
            const product = this.Method();

            return "You buy " + product.giveNewCar() + ", congratulation";
      }
}

class Audi extends CarShowroom {
      public Method(): newCar {
            return new AudiCar();
      }
}

class BMW extends CarShowroom {
      public Method(): newCar {
            return new BMWCar();
      }
}

class AudiCar implements newCar {
      public giveNewCar(): string {
            return "Audi, A7";
      }
}

class BMWCar implements newCar {
      public giveNewCar(): string {
            return "BMW, M2 competion";
      }
}

function code(showroom: CarShowroom) {
      console.log(showroom.Buy());
      console.log('');
}

code(new Audi);

code(new BMW);



