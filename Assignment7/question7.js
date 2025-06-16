

// Q7 - Create a function that performs multiple asynchronous operations in parallel 
// using async/await and waits for all of them to complete before returning the results.



const fn = async (url) => {
    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>resolve(data))
            .catch((error)=> reject(error))
        },1000)
    })
    
    
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>resolve(data))
            .catch((error)=> reject(error))
        },2000)
    })
    
    
    const p3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>resolve(data))
            .catch((error)=> reject(error))
        },3000)
    })
    
    
    
    let temp_res = await Promise.all([p1,p2,p3]);
    return temp_res;
}


const url = 'https://api.github.com/users/yashtripathi-successive';



async function newFn(url){
    try{
       let res = await fn(url);
       console.log(res.map((data)=>data.login));
    }
    catch(error){
        console.log(error);
    }
}


newFn(url);