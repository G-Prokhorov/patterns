//Facade
class Gun {
      public operation1(): string {
            return "Gun ready\n";
      }

      public operation2(): string {
            return "Fire!!!\n";
      }
}

class Transform {
      public operation1(): string {
            return "Transformer ready\n";
      }

      public operation2(): string {
            return "Transform\n";
      }
}

class transformerApp {
      protected gun: Gun;
      protected transform: Transform;

      constructor(gun: Gun = null, transform: Transform = null) {
            this.gun = gun || new Gun;
            this.transform = transform || new Transform;
      }

      public app(): string {
            let result = "App causes transformation\n";
            result += this.transform.operation1();
            result += this.transform.operation2();
            result += "App causes gun\n";
            result += this.gun.operation1();
            result += this.gun.operation2();

            return result;
      }
}

let transformerGun = new Gun;
let transformerAction = new Transform;

let app = new transformerApp(transformerGun, transformerAction);

console.log(app.app() + "\n");

app = new transformerApp();
console.log(app.app());