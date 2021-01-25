//Adapter
//Fit square peg to round hole

class round {
      private radius: number;

      public setRadius(radius: number): void {
            this.radius = radius;
      }

      public getRadius(): number {
            return this.radius;
      }
}

class roundHole extends round {
      public fits(peg: roundPeg): boolean {
            return this.getRadius() >= peg.getRadius();
      }
}

class roundPeg extends round { }

class square {
      private width: number;

      public setWidth(width: number): void {
            this.width = width;
      }

      public getWith(): number {
            return this.width;
      }
}

class squarePeg extends square { }
//roundHole.fits(squarePeg) will cause segmentation fault and i need adapter
class squareAdapter extends round {
      private peg: squarePeg;

      public setPeg(peg: squarePeg): void {
            this.peg = peg;
      }

      public getRadius(): number {
            return this.peg.getWith() * Math.sqrt(2) / 2; //Pythagorean theorem
      }
}

function client() {
      let rpeg = new roundPeg;
      let rhole = new roundHole;

      rpeg.setRadius(6);
      rhole.setRadius(6);

      console.log(rhole.fits(rpeg) + "\n");

      let speg = new squarePeg;
      speg.setWidth(8);

      let sAdapter = new squareAdapter;
      sAdapter.setPeg(speg);

      console.log(rhole.fits(sAdapter) + "\n");
}

client();
