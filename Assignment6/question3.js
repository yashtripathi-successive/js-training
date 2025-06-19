
// Q 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
// Q 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
// Q 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Person {
  constructor(name, age, gender, interest) {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error("Name must be  string.");
    }
    if (typeof age !== 'number' || isNaN(age) || age <= 0) {
      throw new Error("Age must be a positive number.");
    }
    if (typeof gender !== 'string' || gender.trim() === '') {
      throw new Error("Gender must be  string.");
    }
    if (!Array.isArray(interest) || !interest.every(i => typeof i === 'string')) {
      throw new Error("Interests must be an array of strings.");
    }

    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interest = interest;
  }

  greeting() {
    console.log(`${this.name} is ${this.age} years old,his gender is: ${this.gender}, and his interests are : ${this.interest.join(', ')}`);
  }

  farewell() {
    console.log(`Goodbye ${this.name}.`);
  }
}

// Q3.2 - Student
class Student extends Person {
  constructor(name, age, gender, interest, studies) {
    super(name, age, gender, interest);
    if (typeof studies !== 'string' || studies.trim() === '') {
      throw new Error("Studies must be string.");
    }
    this.studies = studies;
  }

  greeting() {
    console.log(`${this.name} is ${this.age} years old, his gender is : ${this.gender}, his interests are: ${this.interest.join(', ')}, and he studies: ${this.studies}`);
  }
  
  farewell() {
    console.log(`Goodbye ${this.name}.`);
  }
}

// Q3.3 - Teacher
class Teacher extends Person {
  constructor(name, age, gender, interest, subjectsTaught) {
    super(name, age, gender, interest);
    if (typeof subjectsTaught !== 'string' || subjectsTaught.trim() === '') {
      throw new Error("Subjects taught must be  string.");
    }
    this.subjectsTaught = subjectsTaught;
  }

  greeting() {
    console.log(`${this.name} is ${this.age} years old,his gender is: ${this.gender}, his interests are: ${this.interest.join(', ')}, and he teaches: ${this.subjectsTaught}`);
  }

  farewell() {
    console.log(`Goodbye ${this.name}`);
  }
}


try {
  const p1 = new Person('Yash', 21, 'male', ['English', 'Hindi']);
  p1.greeting();
  p1.farewell();

  const s1 = new Student('Anu', 20, 'female', ['Math', 'Reading'], 'Computer Science');
  s1.greeting();
  s1.farewell();

  const t1 = new Teacher('Mr. Singh', 45, 'male', ['Teaching', 'Debating'], 'History');
  t1.greeting();
  t1.farewell();


} catch (error) {
  console.log('error');
}

