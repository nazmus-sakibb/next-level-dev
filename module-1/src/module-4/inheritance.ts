class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student('Mr. Rakib', 17, 'Uganda');


class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address)
    this.designation = designation;
  }

  takeClasses(NumberOfClass: number): string {

    return `This ${this.name} will take ${NumberOfClass}`;
  }
}

const teacher1 = new Teacher('Mr. Arafat', 78, 'USA', 'Professor')

teacher1.
