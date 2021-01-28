interface Handler {
      setNext(next: Handler): Handler;

      handle(user: string): string;
}

abstract class abstractHandler implements Handler {
      private children: Handler;

      setNext(next: Handler): Handler {
            this.children = next;

            return this.children;
      }

      handle(user: string): string {
            if (this.children) {
                  return this.children.handle(user);
            }

            return null;
      }
}

class isAdmin extends abstractHandler {
      handle(user: string): string {
            if (user === "Admin") {
                  return "Welcome to admin panel\n";
            } else {
                  return super.handle(user);
            }
      }
}

class isUser extends abstractHandler {
      handle(user: string): string {
            if (user === "User") {
                  return "Welcome\n";
            } else {
                  return super.handle(user);
            }
      }
}

class isPremiumUser extends abstractHandler {
      handle(user: string): string {
            if (user === "Premium") {
                  return "Welcome, you have access to premium content\n";
            } else {
                  return super.handle(user);
            }
      }
}

function clientHandler(handler: Handler) {
      let arr = ["Admin", "User", "Premium"];

      for (let role of arr) {
            let result = handler.handle(role);
            if (result) {
                  console.log(result);
            } else {
                  console.log("Log in to continue\n")
            }
      }
}

let testAdmin = new isAdmin;
let testPremium = new isPremiumUser;
let testUser = new isUser;

testUser.setNext(testPremium).setNext(testAdmin); // User -> Premium -> Admin

console.log("User -> Premium -> Admin");
clientHandler(testUser);

console.log("Premium -> Admin");
clientHandler(testPremium);



