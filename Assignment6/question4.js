//Q4 - Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. 
// The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.



class Person{
constructor(first_name,last_name,age){
this.first_name=first_name;
this.last_name=last_name;
this.age=age;
}

fullName(){
console.log(this.first_name.concat(' ',this.last_name))
}



static averageAge(persons){
const total = persons.reduce((sum,person)=>person.age+sum,0);
if(persons.length > 0){
let avgAge = total/persons.length;
return avgAge;
}
}

}

const persons = [
new Person('aryan','thapak',21),
new Person('anany','more',41)

]

const p1 = new Person('yash','tripathi',21);
p1.fullName();


const res = Person.averageAge(persons);
console.log(res);
