interface Strategy {
      execute(a: number, b: number): number;
}

class sum implements Strategy {
      execute(a: number, b: number): number {
            return a + b;
      }
}

class subtract implements Strategy {
      execute(a: number, b: number): number {
            return a - b;
      }
}

class multiply implements Strategy {
      execute(a: number, b: number): number {
            return a * b;
      }
}

class division implements Strategy {
      execute(a: number, b: number): number {
            return a / b;
      }
}

class percentageDivision implements Strategy {
      execute(a: number, b: number): number {
            return a % b;
      }
}

class Calculator {
      private method: Strategy;

      public setMethod(method: Strategy): void {
            this.method = method;
      }

      public calculate(a: number, b: number): void {
            console.log("Result: " + this.method.execute(a, b));
      }
}

let calculator = new Calculator;

calculator.setMethod(new sum);
calculator.calculate(12, 13);

calculator.setMethod(new subtract);
calculator.calculate(17, 13);

calculator.setMethod(new multiply);
calculator.calculate(12, 2);

calculator.setMethod(new division);
calculator.calculate(125, 5);

calculator.setMethod(new percentageDivision);
calculator.calculate(20, 14);

