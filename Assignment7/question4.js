
//Q4 - 4. Write a program to implement a Promise-based rate limiter,
//  that limits the number of concurrent requests to a certain number


class ratelimiter{
   constructor(limit){
      this.limit=limit
      this.active=0
      this.queue =[]
   }

   schedule(task){
      return new Promise((resolve,reject)=>{
         
         const run = () =>{ 
            this.active++;
           task().then(resolve).catch(reject)
           .finally(()=>{
            this.active--;
            if(this.queue.length){
               let next = this.queue.shift()
               next();
            }
           })
         }

         if(this.active < this.limit) run()
         else this.queue.push(run)
      })
   }
}


const rl =new ratelimiter(2)

function fakereq(id,delay){
   return new Promise((resolve,reject)=>{
   console.log(`start ${id}`)
   setTimeout(()=>{
   
   console.log(`end ${id}`)
   resolve(id)

   },delay)
   })
}

for(let i=1;i<=5;i++){
   rl.schedule(()=>fakereq(i,1000))
}
