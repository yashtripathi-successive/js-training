//Q1 - Write a program to iterate over object.

const obj = {
    first_name: "yash",
    last_name: "tripathi"
};


if (obj && typeof obj === 'object') {
        for (let key in obj) {
                console.log(`${key} -> ${obj[key]}`);
            
        }
    }  else {
    console.log("Invalid input");
}

