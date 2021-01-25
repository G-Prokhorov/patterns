class Singleton {
      private static instence: object;

      public static getInstence(data: object): object {
            if (!Singleton.instence) {
                  return Singleton.instence = data;
            }

            return Singleton.instence;
      }
}

function check() {
      let obj1 = Singleton.getInstence({
            name: "Gregory",
            secondName: "Prokhorov",
      });
      let obj2 = Singleton.getInstence({
            name: "Travis",
            secondName: "Scott",
      });

      if (obj1 === obj2) {
            console.log(true);
      } else {
            console.log(false);
      }

      console.log(obj1);
      console.log(obj2);
}

check();