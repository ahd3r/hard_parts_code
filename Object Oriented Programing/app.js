// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');


/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  let person={};
  person.name=name;
  person.age=age;
  return person;
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
  greet:function(){
    console.log('hello');
  }
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  let personeStore={
    name:name,
    age:age,
    greet:function(){
      console.log('Hello ' + this.name);
    }
  };
  return personeStore;
}

const sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/

function ps(name, age){
  let person = {
    name:name,
    age:age,
    introduce:function(){
    	console.log('Hello, my name is ' + name + '!');
    }
  };
  return person;
}

const bob = ps('bob', 21);

// bob.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  this.greet=function(){
    console.log('hello');
  };
}


// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
	this.name=name;
  this.age=age;
  this.greet=function(){
    console.log('Hello '+this.name);
  };
  this.introduce=function(){
    console.log('Hi, my name is '+this.name);
  };
}

const mike = new personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/

// mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 2 ***/

class PersonClass {
	constructor(name, age) {
    this.name=name;
    this.age=age;
	}
  greet(){
  	console.log('Hi ' + this.name);
	}
}


// /********* Uncomment this line to test your work! *********/
const george = new PersonClass('george',7);
// george.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 2 ***/

class DeveloperClass extends PersonClass{
  constructor(name,age,level){
    super(name,age);
    this.level=level;
  }
  status(){
  	console.log('You are ' + this.level);
	}
}

// /********* Uncomment these lines to test your work! *********/
const thai = new DeveloperClass('Thai', 32, 'Senior');
// console.log(thai.name); // -> Logs 'Thai'
// thai.greet(); // Logs 'Hi Thai', this method take from PersonClass
// thai.status(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
  sayType: function(){
    console.log("I am a " + this.type);
  }
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

const adminFunctionStore=Object.create(userFactory);
adminFunctionStore.type = "Admin";
adminFunctionStore.sharePublicMessage=function(){
  console.log('Welcome users!');
};
adminFunctionStore.sayType=function(){
  console.log("I am an " + this.type);
};

function adminFactory(name, score) {
  let admin = Object.create(adminFunctionStore);
  return admin;
}

/* Put code here for a method called sharePublicMessage*/

const adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType(); // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage(); // -> Logs "Welcome users!"
