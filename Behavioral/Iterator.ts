interface Iterator<T> {
      getNext(): T;

      getCurent(): T;

      restart(): void;

      curentPosition(): number;

      valid(): boolean;
}

interface Aggregator {
      getIterator(): Iterator<string>;
}

class alphaIterator implements Iterator<string> {
      private collection: dictinary;

      private reverse: boolean;

      private position: number = 0;

      constructor(collection: dictinary, reverse: boolean) {
            this.collection = collection;
            this.reverse = reverse;
            this.position = reverse ? collection.getCount() - 1 : 0;
      }

      public getCurent(): string {
            return this.collection.getWords()[this.position];
      }


      public curentPosition(): number {
            return this.position;
      }

      public restart(): void {
            this.position = this.reverse ? this.collection.getCount() - 1 : 0;
      }

      public getNext(): string {
            let item = this.getCurent();
            this.position += this.reverse ? -1 : 1;
            return item;
      }

      public valid(): boolean {
            if (this.reverse) {
                  return this.position >= 0;
            }

            return this.position < this.collection.getCount();
      }

      next;
}

class dictinary implements Aggregator {
      private words: string[] = [];


      public getIterator(): Iterator<string> {
            return new alphaIterator(this, false);
      }

      public getReverseIterator(): Iterator<string> {
            return new alphaIterator(this, true);
      }

      public setWords(arr: string[]) {
            this.words = arr;
      }

      public pushWord(push: string) {
            this.words.push(push);
      }

      public getCount(): number {
            return this.words.length;
      }

      public getWords(): string[] {
            return this.words;
      }
}

const words = new dictinary;

words.setWords(["First", "Second", "Third", "Fourth"]);

let app = words.getIterator();

while (app.valid()) {
      console.log(app.getNext());
}

console.log('');
console.log('Reverse:');
app = words.getReverseIterator();
while (app.valid()) {
      console.log(app.getNext());
}