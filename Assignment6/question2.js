class shape{

constructor(height,width){
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

const rec = new Rectangle(2,2);
const tri = new Triangle(2,2);

const res_rec = rec.getArea();
console.log(res_rec);
const res_tri = tri.getArea();
console.log(res_tri);