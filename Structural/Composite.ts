//Composite
class Box {
      protected children: Box[] = [];

      public add(children: Box): void {
            this.children.push(children);
      }

      public count(): number {
            let result = 0;
            for (let element of this.children) {
                  result += element.count();
            }

            return result;
      }
}

class lastBox extends Box {
      price: number;

      constructor(price: number) {
            super();
            this.price = price;
      }

      public count(): number {
            return this.price;
      }
}

let headBox = new Box;

let fbox1 = new Box;
let fbox2 = new Box;
let fbox3 = new Box;

let sbox1 = new Box;

let lastBox1 = new lastBox(10);
let lastBox2 = new lastBox(3);
let lastBox3 = new lastBox(6);

sbox1.add(lastBox1);
sbox1.add(lastBox2);

fbox1.add(sbox1);
fbox1.add(lastBox3);

fbox2.add(lastBox2);
fbox2.add(lastBox3);

fbox3.add(lastBox1);

headBox.add(fbox1);
headBox.add(fbox2);
headBox.add(fbox3);
headBox.add(lastBox1);

console.log(headBox.count());

