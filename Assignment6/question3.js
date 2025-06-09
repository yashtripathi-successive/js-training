
//Q3.1

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



//Q3.2

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



//Q3.3

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
