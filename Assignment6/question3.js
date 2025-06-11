
//Q3.1  - Create a class Person with properties name, age, gender, and interests. 
// Add a method greeting() that returns a string introducing the person. 
// Also add a method farewell() that returns a string saying goodbye to the person.

class Person{
constructor(name,age,gender,interest){
this.name=name;
this.age=age;
this.gender=gender;
this.interest=interest;
}

greeting(){
console.log(`${this.name} has age : ${this.age}, and his gender is : ${this.gender} and his intrests are : ${this.interest.join(',')}`)
}

}

const p1 = new Person('yash',21,'male',['english','hindi']);
p1.greeting();



//Q3.2 - Create a class Student that inherits from the Person class and has a property studies.
// Override the greeting() method to include information about what the student is studying.

class Person{
constructor(name,age,gender,interest){
this.name=name;
this.age=age;
this.gender=gender;
this.interest=interest;
}

greeting(){
console.log(`${this.name} has age : ${this.age}, and his gender is : ${this.gender} and his intrests are : ${this.interest.join(',')}`)
}

}

class Student extends Person{

constructor(name,age,gender,interest,studies){
super(name,age,gender,interest);
this.studies=studies;
}

greeting(){
console.log(`${this.name} has age : ${this.age}, and his gender is : ${this.gender} and his intrests are : ${this.interest.join(',')} and i studies : ${this.studies}`)
}
}



const p2 = new Student('yash',21,'male',['english','hindi'],'english');
p2.greeting();



//Q3.3 - Create a class Teacher that inherits from the Person class and has a property subjectsTaught. 
// Override the farewell() method to include information about what the teacher teaches.

class Person{
constructor(name,age,gender,interest){
this.name=name;
this.age=age;
this.gender=gender;
this.interest=interest;
}

greeting(){
console.log(`${this.name} has age : ${this.age}, and his gender is : ${this.gender} and his intrests are : ${this.interest.join(',')}`)
}

}

class Teacher extends Person{

constructor(name,age,gender,interest,subject_taught){
super(name,age,gender,interest);
this.subject_taught=subject_taught;
}

greeting(){
console.log(`${this.name} has age : ${this.age}, and his gender is : ${this.gender} and his intrests are : ${this.interest.join(',')} and i teaches : ${this.subject_taught}`)
}
}



const p3 = new Teacher('yash',21,'male',['english','hindi'],'hindi');
p3.greeting();
