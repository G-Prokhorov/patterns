//Builder
interface Builder {
      door(num: number): void;
      enginePlus(): void;
      GPS(): void;
      projection(): void;
      transmissionType(type: string): void; //AWD || RWD || FWD
      seats(num: number): void;
}

interface Engine {
      power(): number;
      type(): string;
      volume(): number;
}

class sportEngine implements Engine {
      power(): number {
            return 500;
      }

      type(): string {
            return "V8";
      }

      volume(): number {
            return 4.0;
      }
}

class Constructor implements Builder {
      private Car: string[] = [];

      public reset() {
            this.Car = [];
      }

      public door(num: number): void {
            this.Car.push("door: " + num + ";");
      }
      public enginePlus(): void {
            const engn = new sportEngine();
            for (let tmp in engn) {
                  this.Car.push("engine" + tmp + ": " + engn[tmp]() + ";");
            }
      }
      public GPS(): void {
            this.Car.push("GPS: true;");
      }
      public projection(): void {
            this.Car.push("projection: true;");
      }
      public transmissionType(type: string): void {
            this.Car.push("transmission: " + type + ";"); //AWD || RWD || FWD
      }
      public seats(num: number): void {
            this.Car.push("seats: " + num + ";");
      }

      public getProduct(): string[] {
            const result = this.Car;
            this.reset();
            return result;
      }
}

class Director {
      private builder: Builder;

      public setBuilder(builder: Builder): void {
            this.builder = builder;
      }

      public createMin(): void {
            this.builder.door(4);
            this.builder.seats(4);
            this.builder.transmissionType("FWD");
      }

      public createMax(): void {
            this.builder.door(2);
            this.builder.seats(4);
            this.builder.transmissionType("AWD");
            this.builder.enginePlus();
            this.builder.projection();
            this.builder.GPS();
      }
}

function result(director: Director) {
      const newCar = new Constructor;
      director.setBuilder(newCar);

      director.createMin();
      console.log(`${newCar.getProduct().join('\n')}\n`);

      director.createMax();
      console.log(`${newCar.getProduct().join('\n')}\n`);
}

const director = new Director;

result(director);
