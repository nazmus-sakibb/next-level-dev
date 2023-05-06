class Student {
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


class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string;

    constructor(name: string, age: number, address: string, designation: string){
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }

    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`;
    }

    takeClasses(NumberOfClass: number): string {
        return `This ${this.name} will take ${NumberOfClass}`
    }
}