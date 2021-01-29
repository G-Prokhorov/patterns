interface User {
      update(news: string): void;
}

class concreteUser implements User {
      private newMail: string[] = [];

      private readedMail: string[] = [];

      public getNew(): string[] {
            const mail = this.newMail;
            this.newMail = [];
            this.readedMail.push(...mail);
            return mail;
      }

      public getReaded(): string[] {
            return this.readedMail;
      }

      public update(news: string): void {
            this.newMail.push(news);
      }
}

interface Subject {
      attach(observer: User): void;

      detach(observer: User): void;

      notify(news: string): void;
}

class Magazine implements Subject {
      private subscribers: User[] = [];

      private lastNews: string;
      private allNews: string[] = [];

      public attach(observer: User): void {
            this.subscribers.push(observer);

      }

      public detach(observer: User): void {
            const observerIndex = this.subscribers.indexOf(observer);
            if (observerIndex >= 0) {
                  this.subscribers.splice(observerIndex, 1);
            }
      }

      public notify(news: string): void {
            console.log("Script notify all subscribers...");
            for (let user of this.subscribers) {
                  user.update(news);
            }
            console.log("Done!");
      }

      public newNews(news: string) {
            this.lastNews = news;
            this.allNews.push(news);

            this.notify(news);
      }
}

let magazine = new Magazine;

let user1 = new concreteUser;
let user2 = new concreteUser;
let user3 = new concreteUser;

magazine.attach(user1);
magazine.attach(user2);
magazine.attach(user3);

magazine.newNews("printf('Hello, word');");
magazine.newNews("I don`t like anime");

console.log(user1.getNew());
console.log(user2.getNew());
console.log(user3.getNew());
console.log("");
console.log(user2.getNew());
console.log(user2.getReaded());