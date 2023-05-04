// normal function
// default parameter
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
add(30, 50);


// spread operator
const friends=['chandler', 'joe', 'ross']; 
const newFriends = ['monica', 'racel', 'pheobe'];  

const myBestFriend = {
  fullName: 'abul basar',
  age: 24
}

const [bestFriend] = friends;
const {fullName} = myBestFriend;
console.log(fullName);

friends.push(...newFriends);
// console.log(friends);


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



// rest operator

const greetFriends = (...friends:string[])
: void =>  friends.forEach((friend) => console.log(`Hi ${friend}`))


greetFriends('kashem', 'hasem', 'gasem', 'jobbar', 'rahim', 'karim', 'hero vai'); 


// array and object destructuring 