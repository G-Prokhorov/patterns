interface Mediator {
      notify(sender: object, event: string): void;
}

//select
class Menu implements Mediator {
      private textArea: TextArea;
      private checkBox: CheckBox;
      private select: Select; //for example: lines 1 to 10;

      constructor(textArea: TextArea, checkBox: CheckBox, select: Select) {
            this.textArea = textArea;
            this.checkBox = checkBox;
            this.select = select;

            this.textArea.setMediator(this);
            this.checkBox.setMediator(this);
            this.select.setMediator(this);
      }

      notify(sender: object, event: string): void {
            switch (event) {
                  case "check":
                        // console.log(sender);
                        this.select.turnON();

                        break;

                  case "select":
                        this.textArea.turnON();
                        this.checkBox.allReady();
                        break;
                  default:
                        break;
            }
      }

}

class Component {
      protected mediator: Mediator;

      setMediator(mediator: Mediator): void {
            this.mediator = mediator;
      }
}

class TextArea extends Component {
      public turnON(): void {
            console.log("Textarea is available");
      }
}

class CheckBox extends Component {
      public turnON(): void {
            console.log("The checkbox was turn on");
            this.mediator.notify(this, "check");
      }

      public allReady(): void {
            console.log("All is available");
      }
}

class Select extends Component {
      public turnON(): void {
            console.log("Select is available");
            this.mediator.notify(this, "select");
      }
}

let textArea = new TextArea;
let checkBox = new CheckBox;
let select = new Select;

let menu = new Menu(textArea, checkBox, select);

checkBox.turnON();