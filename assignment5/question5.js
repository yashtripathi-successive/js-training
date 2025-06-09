
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