//Q6 - Implement a function that 
// returns a resolved Promise after a specified delay using async/await.

function fn(url){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>resolve(data))
        .catch((error)=>reject(error));
        },5000)
       
    })
}

const url = 'https://api.github.com/users/yashtripathi-successive';

async function newFn(url){
    try{
    let res = await fn(url);
    console.log(res.id)
    }
    catch(error){
        console.error(error);
    }
    
}

newFn(url);
