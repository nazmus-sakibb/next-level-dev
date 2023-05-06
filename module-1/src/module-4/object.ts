class Animal {
//   public name: string;
//   public species: string;
//   public sound: string;

  // parameter properties
  constructor(public name: string, public species: string, public sound: string) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }
  public makeSound(){
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal('German Shephard', 'dog', 'Ghew Ghew');
const cat = new Animal('Persian', 'cat', 'meow meow');
dog.makeSound();
cat.makeSound();

cat.name = 'special cat';
