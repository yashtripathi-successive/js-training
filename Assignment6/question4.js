//Q4 - Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. 
// The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.


class Person {
  constructor(first_name, last_name, age) {
    if (typeof first_name !== 'string' || first_name.trim() === '') {
      throw new Error("First name must be a string.");
    }
    if (typeof last_name !== 'string' || last_name.trim() === '') {
      throw new Error("Last name must be string.");
    }
    if (typeof age !== 'number' || isNaN(age) || age <= 0) {
      throw new Error("Age must be a positive number.");
    }

    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }

  fullName() {
    console.log(`${this.first_name} ${this.last_name}`);
  }

  static averageAge(persons) {
    if (!Array.isArray(persons) || persons.length === 0) {
      throw new Error("Input must be an array.");
    }

    const total = persons.reduce((sum, person) => sum + person.age, 0);
    return total / persons.length;
  }
}


const persons = [
new Person('aryan','thapak',21),
new Person('anany','more',41),
new Person('yash','yash',41)

]

const p1 = new Person('yash','tripathi',21);
p1.fullName();


const res = Person.averageAge(persons);
console.log(res);
