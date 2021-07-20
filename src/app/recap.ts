const username: string = 'Nicolas';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,2);

class Person {

  constructor(private age: number, public lastName: string) {}
}

const nico = new Person(15, 'Molina');
