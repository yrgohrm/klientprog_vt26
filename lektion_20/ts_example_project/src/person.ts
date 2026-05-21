export interface Person {
  name: string;
  age: number;
}

export type Person2 = {
  name: string;
  age: number;
};

export function sayHello(person: Person): string {
  return `Hello, my name is ${person.name} and 
          I am ${person.age} years old.`;
}
