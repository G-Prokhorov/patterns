abstract class BaseCar {

      public templateMethod() {
            this.setEngine();
            this.setSeat();
            this.setTrasmition();
      }

      public setTrasmition() {
            console.log("Standart transmition");
      }

      public setEngine() {
            console.log("Standart engine");
      }

      public setSeat() {
            console.log("Standart seats");
      }
}

class Comfort extends BaseCar {
      public setSeat() {
            console.log("Comfort seats");
      }
}

class ComfortPlus extends BaseCar {
      public setSeat() {
            console.log("Comfort+ seats");
      }

      public setTrasmition() {
            console.log("Comfort transmition");
      }
}


function clientCode(car: BaseCar) {
      car.templateMethod();
      console.log("");
}

clientCode(new Comfort);
clientCode(new ComfortPlus);