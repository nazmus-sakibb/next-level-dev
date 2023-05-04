// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 5);

const addArrow = (num1: number, num2: number): number => num1 + num2;

addArrow(5, 4);

const arr = [4, 5, 6, 9];
const newArray = arr.map((elem: number) => elem * elem);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Abedin",
  balance: 5,
  addBalance(money: number) {
    console.log(`My new balance is ${this.balance + money}`);
  },
};
