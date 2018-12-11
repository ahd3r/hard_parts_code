// CHALLENGE 1

function sumFunc(arr) {
	let res = 0;
  for(let i in arr){
    res+=arr[i];
  }
  return res;
}

// Uncomment the lines below to test your work
// const array = [1, 2, 3, 4];
// console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr){
  let c=-1;
  function some(){
    c++;
    return arr[c];
  }
  return some;
}

// Uncomment the lines below to test your work
const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'

// CHALLENGE 2

function nextIterator(arr) {
  let c=-1;
  return {
    next:function(){
      c++;
      return arr[c];
    }
  };
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(arr) {
  let res=0;
  const current = nextIterator(arr);
  for(let i=0;i<arr.length;i++){
		res+=current.next();
  }
  return res;
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10

// CHALLENGE 4

function setIterator(set) {
  const nextItem = set.values();
  return {
    next:function(){
      return nextItem.next().value;
    }
  };
}

// Uncomment the lines below to test your work
const mySet = new Set('hey');
const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'

// CHALLENGE 5

function indexIterator(arr) {
	let c=-1;
  return {
    next:function(){
      c++;
      return [c,arr[c]];
    }
  }
}

// Uncomment the lines below to test your work
const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']

// CHALLENGE 6

function Words(string) {
  this.strArr = string.split(' ');
}

// Uncomment the lines below to test your work
const helloWorld = new Words('Hello World');
// for (word of helloWorld.strArr) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(array){
  let c=-1;
	return {
    sentence:function(){
      c++;
      if(c==0){
        return array[c] +' is the first';
      } else {
        let indexPrevious = c-1;
        return array[c] + ' found after ' + indexPrevious;
      }
    }
  }
}

const returnedSentence = valueAndPrevIndex([4,5,6])
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());

//CHALLENGE 8

function* createConversation(string) {
  for(let i=0;i<string.length;i++){
    yield string[i];
  }
}

const word=createConversation('english');
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);
// console.log(word.next().value);

//CHALLENGE 9
function waitForVerb(noun,resolve) {
  setTimeout(function(){
		resolve(noun);
	},3000);
	return noun;
}

async function f(noun) {
	const data = new Promise((resolve,reject)=>{
		waitForVerb(noun,resolve);
	});
	const result = await data;
	return result;
}

// f("dog").then(data=>console.log(data));
