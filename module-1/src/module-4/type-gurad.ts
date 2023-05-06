// keyof guard
type Alphaneumeric = string|number;
function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
    if(typeof param1 == 'number' && param2 == 'nuumber'){
        return param1+param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}

add('1', '2');
add(1, 2);


// in guard

type NormalUserType = {
    name: string
}

type AdminUserType = {
    name: string;
    role: 'admin';
}

function getUser(user: NormalUserType|AdminUserType): string{
    if('role' in user){
        return `I'm an admin and my role is ${user.role}`
    }
    else {
        return `I'm a normal user`
    }
}

const normalUser1: NormalUserType = {name: 'Mr. Allu'};
const adminUser1: AdminUserType = {name: 'Mr. Gallu', role: 'admin'};

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));



// instanceof type guard

class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string){
        this.name = name;
        this.species = species;
    }

    makeSound(){
        console.log('I am making sound');
    }
}


class Dog extends Animal {
    constructor(name: string, species: string){
        super(name, species);
    }
    makeBark(){
        console.log('I am barking');
    }
}

class Cat extends Animal {
    constructor(name: string, species: string){
        super(name, species);
    }
    makeMeow(){
        console.log('I am meowing');
    }
}


function isDog(animal: Animal): animal is Dog{
    return animal instanceof Dog;
}

function isCat(animal: Animal): animal is Cat{
    return animal instanceof Cat;
}

function getAnimal(animal: Animal){
    if(isDog(animal)){
        animal.makeBark();
    }
    else if(isCat(animal)){
        animal.makeMeow();
    }
    else{
        animal.makeSound();
    }
}


const animal1 = new Dog('German bahi', 'dog') //instance dog
const animal2 = new Cat('Persian bhai', 'cat') //instance cat


getAnimal(animal2)