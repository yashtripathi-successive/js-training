//Q8 - Create a function that fetches data from multiple APIs in parallel and then
//  performs some operation on the combined data, using async/await.


const obj = {
        url1 : 'https://api.github.com/users/yashtripathi-successive',
        url2 : 'https://api.github.com/feeds'
    }


const fn = async (obj) => {
    
    
    
        const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch(obj.url1)
            .then((res)=>res.json())
            .then((data)=>resolve(data))
            .catch((error)=> reject(error))
        },3000)
    })
    
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch(obj.url2)
            .then((res)=>res.json())
            .then((data)=>resolve(data))
            .catch((error)=> reject(error))
        },3000)
    })
    
    
    
    let temp_res = await Promise.all([p1,p2]);
    let ans1 = temp_res[0];
    let ans2 = temp_res[1];
    
    
    let combined = {
        login : ans1.login,
        id : ans1.id,
        timeline_url : ans2.timeline_url,
        user_url : ans2.user_url
    }
    
    return printDetails(combined);
}

function printDetails(newobj){
    
    for(let key in newobj){
        console.log(`${key} -> ${newobj[key]}`)
    }
    return;
}

async function newFn(obj){
    try{
       let res = await fn(obj);
       console.log(res);
    }
    catch(error){
        console.log(error);
    }
}


newFn(obj);