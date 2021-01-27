interface Subject {
      calculate(): number;
}

let cache = null;

class Real implements Subject {
      public calculate(): number {
            return Math.pow(2, 32);
      }
}

class ProxySubject implements Subject {
      private realSubject: Real;

      constructor(real: Real) {
            this.realSubject = real;
      }

      private check(): boolean {
            console.log("Proxy: Checking cache.");
            return (cache) ? true : false;
      }

      public calculate(): number {
            if (this.check()) {
                  console.log("Proxy: Found.");
                  return cache;
            } else {
                  console.log("Proxy: Not found.")
                  cache = this.realSubject.calculate();
                  return cache;
            }
      }
}

function client(subject: Subject) {
      console.log(subject.calculate() + "\n");
}

let realSubject = new Real;
client(realSubject);

let proxy = new ProxySubject(realSubject);

client(proxy);
client(proxy);