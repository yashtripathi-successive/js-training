//Q3 -  Convert a callback-based API to a Promise-based API 


// const getUserDetail = (url,callback) => {
//     fetch(url)
//     .then((res)=> res.json())
//     .then((data)=> callback(null,data))
//     .catch((error)=> callback(error,null))
   
// }

// const printDetails =  (error,data) => {
//     if(error){
//         console.log('error is : ',error);
//     }
//     else{
//         console.log('data is : ',data);
//     }
// }

// getUserDetail('https://api.github.com/users/yashtripathi-successive',printDetails)





const getUserDetail = (url) => {
   
    return new Promise((resolve,reject)=>{
           fetch(url)
           .then((res)=>res.json())
           .then((data)=> {
               resolve(data);
               console.log(`Login id is : ${data.login} and Node is : ${data.node_id}`)
               
           })
           .catch((error)=>{
               reject(error);
               console.error(error)
               })
    })
   
}

getUserDetail('https://api.github.com/users/yashtripathi-successive')
.then((data)=>{
   console.log('fetched successfully',data)
})
.catch((err)=>{
    console.log('error encountered',err)
});




