class transmission {
      body: carBody;

      constructor(body: carBody) {
            this.body = body;
      }

      public ride(): boolean {
            return true;
      }

      public type(): string {
            return "AWD";
      }
}

interface carBody {
      color: string;
      type: string;
}

class Coupe implements carBody {
      color: string;

      constructor(color: string) {
            this.color = color;
      }

      type: string = "Coupe";
}

class Hatchback implements carBody {
      color: string;

      constructor(color: string) {
            this.color = color;
      }

      type: string = "Hatchback";
}

function carInfo(car: transmission) {
      console.log(car.body.type);
      console.log(car.body.color);
      console.log(car.ride());
      console.log(car.type() + "\n");
}

let body = new Coupe("green");
let car = new transmission(body);
carInfo(car);

body = new Hatchback("red");
car = new transmission(body);
carInfo(car);