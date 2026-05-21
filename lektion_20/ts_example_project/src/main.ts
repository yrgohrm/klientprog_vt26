import "./style.css";
import typescriptLogo from "./assets/typescript.svg";
import { setupCounter } from "./counter.ts";
// @ts-ignore missing types since this is for education
import { getJsCount } from "./strjscount.js";
import { getTsCount } from "./strcount.ts";
import { type Person, sayHello } from "./person.ts";

type StrangeType = [1 | "hej" | "foo", 2 | "foo" | false];

const strange: StrangeType = [1, 2];
const strange2: StrangeType = ["foo", false];
console.log(strange);
console.log(strange2);

const jsCount = getJsCount("Monica", "Hej, hej Monica. Hej på dig Monica. Hej Monica!");
const tsCount = getTsCount("Monica", "Hej, hej Monica. Hej på dig Monica. Hej Monica!");

// getTsCount(5, "hahahahahaha");

class Thing {
  public name: string;
  public age: number;

  constructor() {
    this.name = "xxx";
    this.age = 5;
  }
}

const thing = new Thing();

interface Animal {
  name: string;
  age: number;
}

function meow(animal: Animal): void {
  console.log(animal.name + " " + animal.age);
}

const john: Person = {
  name: "John",
  age: 30,
};

sayHello(thing);
const hello = sayHello(john);
meow(john);
sayHello(john);

const elem = document.getElementById("foo");
if (elem != null) {
  elem.lang = "sv";
}

const foobar: number[] = [1, 2, 3, 4];
console.log(foobar);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<main>
    <img src="${typescriptLogo}" class="framework" alt="TypeScript logo"/>

    <p>JS Monica ${jsCount} == TS Monica ${tsCount}</p>
    <p>${hello}</p>
    <button id="counter"></button>
</main>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
