//Prototype

class money {
      public currency: string;
      public par: number;
      public giveInfo: object;
      public circularReference: ComponentWithBackReference;

      public clone(): this {
            let clone = Object.create(this);

            clone.giveInfo = Object.create(this.giveInfo);

            clone.circularReference = {
                  ...this.circularReference,
                  prototype: { ...this },
            };

            return clone;
      }


}

class ComponentWithBackReference {
      public prototype;

      constructor(prototype: money) {
            this.prototype = prototype;
      }
}

function compare() {
      const p1 = new money();
      p1.currency = "dolar";
      p1.par = 100;
      p1.giveInfo = new Date();
      p1.circularReference = new ComponentWithBackReference(p1);

      const p2 = p1.clone();
      if (p1.currency === p2.currency) {
            console.log('Primitive field values have been carried over to a clone. Yay!');
      } else {
            console.log('Primitive field values have not been copied. Booo!');
      }
      if (p1.par === p2.par) {
            console.log('Primitive field values have been carried over to a clone. Yay!');
      } else {
            console.log('Primitive field values have not been copied. Booo!');
      }

      if (p1.giveInfo === p2.giveInfo) {
            console.log('Simple component has not been cloned. Booo!');
      } else {
            console.log('Simple component has been cloned. Yay!');
      }

      if (p1.circularReference === p2.circularReference) {
            console.log('Component with back reference has not been cloned. Booo!');
      } else {
            console.log('Component with back reference has been cloned. Yay!');
      }

      if (p1.circularReference.prototype === p2.circularReference.prototype) {
            console.log('Component with back reference is linked to original object. Booo!');
      } else {
            console.log('Component with back reference is linked to the clone. Yay!');
      }
}

compare();