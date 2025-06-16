//Q2 - Give an example of using multiple callback functions in a single function in JavaScript


const getUserDetail = (url,printDetails, moreInfo) => {
   
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> printDetails(null,moreInfo,data))
    .catch((error)=> printDetails(error,null,data))
   
}


const printDetails =  (error,moreInfo,data) => {
    if(error){
        console.log('error is : ',error);
    }
    else{
        moreInfo(data);
    }
}

const moreInfo = (data) => {
    const main_data = {
        'login id' : data.login,
        'id' : data.id,
        'node_id' : data.node_id,
        'type' : data.type
    }
    for(let key in main_data){
        console.log(`${key} -> ${main_data[key]}`);
    }
}

getUserDetail('https://api.github.com/users/yashtripathi-successive',printDetails,moreInfo)
