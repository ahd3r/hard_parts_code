// Challenge 1

function sayHello() {
	setTimeout(function(){
    console.log('Hello!');
  },1000);
}

// Uncomment the line below when ready
// sayHello(); // should log "Hello" after 1000ms


// Challenge 2
const promise1 = new Promise(function(resolve, reject) {
  const err=false;
  if(err===false){
    setTimeout(function(){
      resolve("Resolved!");
    },1000);
  } else {
    reject("Error is true!");
  }
});

// Should print out "Resolved!"
// promise1.then(function(data){
//   console.log(data);
// }).catch(function(error){
//   console.log(error);
// });



// Challenge 3

const promise2 = new Promise(function(resolve, reject) {
  const err=true;
  if(err===false){
    setTimeout(function(){
      resolve("Resolved!");
    },1000);
  } else {
    reject("Error is true!");
  }
});

// Should print out "Reject!"
// promise2.then(function(data){
//   console.log(data);
// }).catch(function(error){
//   console.log(error);
// });


// Challenge 4

const promise3 = new Promise(function(resolve, reject) {
  resolve();
  reject();
});



// promise3.then(function(){
//   console.log(1)
// }).catch();
// console.log("I'm not the promise!1");

const promise4=new Promise(function(resolve,reject){
  resolve();
  reject();
});

// promise4.then(function(){
//   console.log(2)
// }).catch(function(err){
//   console.log(err);
// });
// console.log("I'm not the promise!2");


// Challenge 5
function delay(){
 return new Promise(function(resolve){
   setTimeout(function(){
     resolve();
   },1000);
 });
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
// delay().then(function(){
//   console.log('Hello');
// });


// Challenge 6
const secondPromise =new Promise((resolve)=>{
  resolve('Second!');
});
const firstPromise =new Promise((resolve)=>{
  resolve(secondPromise.then((data)=>data));
});

// firstPromise.then((data)=>{
//   console.log(data);
// });


// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  return new Promise((resolve)=>{
    let res=[];
    fakePeople.forEach((item)=>{
      res.push(item);
    });
    setTimeout(()=>{
      resolve(res);
    },1000);
  });
}

// getAllData().then(data=>console.log(data));
