/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
	let persone={};
  persone.name=name;
  persone.age=age;
  return persone;  
}

const vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24



/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

const personStore = {
  greet:function(){console.log('hello')},
  introduce:function(){console.log('hi, I am '+this.name)}
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  let persone=Object.create(personStore);
  persone.name=name;
  persone.age=age;
  return persone;
}

const sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  this.greet=()=>{console.log('hello')},
  this.introduce=()=>{console.log('Hi, my name is '+this.name)}
}

/********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
	let person=new PersonConstructor;
  person.name=name;
  person.age=age;
  return person;
}

const mike = personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
// add code here


// mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 2 ***/

class PersonClass{
  constructor(name){
    this.name=name
  }
  greet(){
    console.log('hello');
  }
}

/********* Uncomment this line to test your work! *********/
const george = new PersonClass('George');
// george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 2 ***/

class DeveloperClass extends PersonClass{
  constructor(name,age,level){
    super(name, age);
    this.level=level;
  }
  introduce(){
    console.log('Hello World, my name is '+this.name+' and I am '+this.level);
  }
}

// /********* Uncomment these lines to test your work! *********/
const thai = new DeveloperClass('Thai', 32,'Senior))) in future or now');
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
  sayType: function() {
    console.log("I am an " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

const adminFunctionStore=Object.create(userFunctionStore);
adminFunctionStore.sharePublicMessage=function(){
  console.log('Welcome Users!')
};

function adminFactory(name, score){
  let admin=Object.create(adminFunctionStore);
// 	admin=userFactory.call(this,name,score);
  admin.name=name;
  admin.score=score;
  admin.type='Admin';
  return admin;
}

Object.setPrototypeOf(adminFactory,adminFunctionStore);
const adminFromFactory = adminFactory("Eva", 5);
/********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am an Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"

