/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

// console.log('I am at the beginning of the code');
// setTimeout(function(){
//   console.log('I am in the setTimeout callback function');
// },3000);
// console.log('I am at the end of the code');

/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
let c = 0;
// setInterval(function(){
//   c++;
//   console.log('Interval Hello!');
//   if(c===5){
//     clearAllIntervals();
//   }
// },2000);
// setTimeout(function(){
//   clearAllIntervals();
// },10000);

/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
function everyXsecsForYsecs(callback, interval, total) {
  setInterval(callback,interval*1000);
  setTimeout(function(){
    clearAllIntervals();
  },total*1000);
}
// everyXsecsForYsecs(function(){
//   console.log(1);
// },5,20);

/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

function cloneForEach(arr,cb){
  for(let i=0;i<arr.length;i++){
    cb(arr[i],i);
  }
}
let delays =[2000,5000,0,3500];
function delayLog(delayTime,i){
  setTimeout(function(){
    console.log('printing element ' + i);
  },delayTime);
}
// cloneForEach(delays,delayLog);

/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

document.querySelector('#activate').addEventListener('click', changeColor);
document.querySelector('#color').addEventListener('click', changeColor);
function changeColor(){
  if(document.body.style.background==='rgb(255, 238, 221)'){
    document.body.style.background='rgb(221, 238, 255)';
    console.log('clicked #2');
  }else{
    document.body.style.background='rgb(255, 238, 221)';
    console.log('clicked #1');
  }
}
document.body.style.background = '#def';

/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////

let dataReceived;

function ajaxSimulate(id, callback) {
  const database = ['Aaron', 'Barbara', 'Chris'];
  for(let i=0;i<database.length;i++){
    if(id===i){
      setTimeout(callback(database[id]),0);
    }
  }
}
function storeData(data){
  dataReceived=data;
}

ajaxSimulate(1,storeData);
console.log(dataReceived);

/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////



/////////////////
//             //
// CHALLENGE 8 //
//             //
/////////////////



/////////////////
//             //
// CHALLENGE 9 //
//             //
/////////////////


