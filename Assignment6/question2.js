//Q2 - Create a class Shape with properties width and height and methods getArea().
// Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() 
// method for their respective shapes.


class shape{

constructor(height,width){

  if ( typeof height !== 'number' || isNaN(height) || height <= 0 || typeof width !== 'number' || isNaN(width) || width <= 0) {
      throw new Error("Height and width must be positive numbers.");
    }
  
this.height=height;
this.width=width;
}

getArea(){
return 0;
}

}


class Rectangle extends shape{

getArea(){
return this.height * this.width;
}

}

class Triangle extends shape{

getArea(){
return 0.5 * this.height * this.width;
}

}


try{
const rec = new Rectangle(2,2);
const tri = new Triangle(2,2);

const res_rec = rec.getArea();
console.log(res_rec);
const res_tri = tri.getArea();
console.log(res_tri);
}
catch(err){
  console.log('error encountered');
}
