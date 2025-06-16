//Q5 - Write a program to implement a Promise-based task queue, 
// that processes tasks in a specified order, with a specified concurrency limit


class taskQueue {
  constructor(limit) {
    this.limit = limit;
    this.active = 0;
    this.queue = [];
  }

  add(task) {
    return new Promise((resolve, reject) => {
      const run = () => {
        this.active++;
        task()
          .then(resolve)
          .catch(reject)
          .finally(() => {
            this.active--;
            this.next(); 
          });
      };

      this.queue.push(run);
      this.next(); 
    });
  }

  next() {
    if (this.active >= this.limit) return;
    if (this.queue.length === 0) return;

    const taskToRun = this.queue.shift();
    taskToRun();
  }
}


function fakereq(id, delay) {
  return () => new Promise((resolve) => {
    console.log(`Start ${id}`);
    setTimeout(() => {
      console.log(`End ${id}`);
      resolve(id);
    }, delay);
  });
}

const tq = new taskQueue(2);

for (let i = 1; i <= 5; i++) {
  tq.add(fakereq(i, 1000));
}
