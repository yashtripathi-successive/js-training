//Q1 - Give an example of using a callback function to handle an asynchronous
//  operation in JavaScript (Use any open api to make a call)




const getUserDetail = (url,callback) => {
   
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> callback(null,data))
    .catch((error)=> callback(error,null))
   
}

const printDetails =  (error,data) => {
    if(error){
        console.log('error is : ',error);
    }
    else{
        console.log('data is : ',data);
    }
}

getUserDetail('https://api.github.com/users/yashtripathi-successive',printDetails)
