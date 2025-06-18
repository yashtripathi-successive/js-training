//Q5 - Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
//  const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
//  };
//  Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }


const obj = {
    a:1,
    b: { 
      c: 2, 
      d: [3, 4] 
        
    }
}


function flatten(obj,res,keyname){
    for(let key in obj){
        
        var newkeyname = keyname ? `${keyname}.${key}` : key;
        
        if(typeof obj[key] == 'object' && obj[key]!=null){
            flatten(obj[key],res,newkeyname);
        }
        else{
            res[newkeyname] = obj[key];
        }
    }
    return res;
    
}

var res={}
var keyname = '';
var result = flatten(obj,res,keyname);
console.log(result);
