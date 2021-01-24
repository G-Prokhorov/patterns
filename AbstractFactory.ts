//Abstract Factory
interface coupe {
      power(): number;
      class(): string;
      model(): string;
}

interface sedan {
      power(): number;
      class(): string;
      model(): string;
}

interface carFactory {
      buildCoupe(): coupe;
      buildSedan(): sedan;
}

class Subaru implements carFactory {
      public buildCoupe(): coupe {
            return new SubaruCoupe();
      };
      public buildSedan(): sedan {
            return new SubaruSedan();
      };
}

class SubaruCoupe implements coupe {
      public power(): number {
            return 190;
      }

      public class(): string {
            return "sport";
      }

      model(): string {
            return "BRZ";
      }
}

class SubaruSedan implements coupe {
      public power(): number {
            return 370;
      }

      public class(): string {
            return "comfort";
      }

      model(): string {
            return "Impreza";
      }
}

class Mercedes implements carFactory {
      public buildCoupe(): coupe {
            return new MercedesCoupe();
      };
      public buildSedan(): sedan {
            return new MercedesSedan();
      };
}

class MercedesCoupe implements coupe {
      public power(): number {
            return 300;
      }

      public class(): string {
            return "comfort";
      }

      model(): string {
            return "C-class 300";
      }
}

class MercedesSedan implements coupe {
      public power(): number {
            return 450;
      }

      public class(): string {
            return "business";
      }

      model(): string {
            return "S 450 4MATIC";
      }
}

function clientCode(factory: carFactory) {
      const coupe = factory.buildCoupe();
      const sedan = factory.buildSedan();

      console.log("Coupe");
      console.log(coupe.model());
      console.log(coupe.power());
      console.log(coupe.class());

      console.log('');

      console.log("Sedan");
      console.log(sedan.model());
      console.log(sedan.power());
      console.log(sedan.class());

      console.log('');
}

clientCode(new Subaru);
clientCode(new Mercedes);

