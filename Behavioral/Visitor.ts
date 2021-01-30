interface Service {
      fix(visitor: Visitor): void;
}

interface Visitor {
      visitGarage(service: Service): void;
      visitOffService(service: Service): void;
}

class Garage implements Service {
      public fix(visitor: Visitor): void {
            visitor.visitGarage(this);
      }

      public getClass(): string {
            return "No original component";
      }
}

class offService implements Service {
      public fix(visitor: Visitor): void {
            visitor.visitOffService(this);
      }

      public getClass(): string {
            return "Only original component";
      }
}

class Porsche implements Visitor {
      visitGarage(service: Garage): void {
            if (!this.checkComp(service.getClass())) {
                  console.log("Porsche need only official component");
                  return;
            }
            console.log("Porsche will be fix");
      }

      visitOffService(service: offService): void {
            if (!this.checkComp(service.getClass())) {
                  console.log("Porsche need only official component");
                  return;
            }
            console.log("Porsche will be fix");
      }

      checkComp(cmp: string) {
            return (cmp == "Only original component");
      }
}

class Lada implements Visitor {
      visitGarage(service: Service): void {
            console.log("Lada can be fix anywhere");
      }
      visitOffService(service: Service): void {
            console.log("Lada can be fix anywhere");
      }
}

let service1 = new Garage;
let service2 = new offService;

let porsche = new Porsche;
let lada = new Lada;

service1.fix(porsche);
service2.fix(porsche);

console.log('');

service1.fix(lada);
service2.fix(lada);