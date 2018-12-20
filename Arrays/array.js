// Every this method creates a new array
//	concat — create a new array with adding to the end a new element (if newa element is array too, its take each element from their and past each in new array, besides arrays which is in pasted array)
const ander = {
	name:'Ander',
	age:18,
	sex:'Male'
};
const peyton = {
	name:'Peyton',
	age:20,
	sex:'Female'
};
const alex = {
	name:'Alex',
	age:17,
	sex:'Male'
};
const vel={
	name:'Vel',
	age:18,
	sex:'Female'
};

const female=[peyton,vel];
const male = [ander,alex];

// female.concat(male).forEach(user=>{
// 	console.log(user.name);
// });

//	join — create a string of array and between element past something
const arr =female.concat(male);
const newArr = arr.map(user=>{
	const data = [user.name];
	return `(${data.concat(user.age).concat(user.sex).join(' ')})`;
});
// console.log(newArr.join(' ==> '));

//	indexOf
const forIndexOf = arr.slice(1);
if(forIndexOf.indexOf(peyton)===-1){
	forIndexOf.push(peyton);
}
// console.log(forIndexOf);

//	slice — create a new array, which is copy of another array
const ihor={ // wrong
	name:'ihor-penkin',
	age:21,
	sex:'Male'
};
const filter = {
	replaceFilter: function(stringPls){
		return stringPls.replace('-',' ');
	},
	toUperCaseAndReplaceFilter: function(stringPls){
		let res = stringPls.split(' ');
		res = res.map(str=>str.charAt(0).toUpperCase()+str.slice(1));
		res = res.slice(0,1).join(' ');
		return res;
	}
};

function changedData(s){
	let data = filter.replaceFilter(s);
	data = filter.toUperCaseAndReplaceFilter(data);
	return data;
}
// console.log(changedData(ihor.name));

//	sort — create a new array with sorting 
const user = [
	{
		name:'Ander',
		subs:50
	},
	{
		name:'Alex',
		subs:0
	},
	{
		name:'Peyton',
		subs:14000000
	},
	{
		name:'Vel',
		subs:600
	}
];

const sortedUserForSubs=user.sort((a,b)=>b.subs-a.subs).map(x=>{
	return `	<li>${x.name} has got ${x.subs} subs</li>`;
}).join('\n');
const result = `<ul>\n${sortedUserForSubs}\n	Loser^\n</ul>`;
// console.log(result);

//	filter — create a new array with filtered element (past element in new array if return true)
const sex='Female';
const minAge=20;
const filteredData=arr.filter(user=>user.sex===sex).filter(x=>x.age<minAge).map(x=>{
	return `	<li>Nice girl: ${x.name}</li>`
}).join('\n');
const readyAndFilteredData = `<ul>\n${filteredData}\n</ul>`;

// console.log(readyAndFilteredData);

//	some — check data for existing the element (return true if exist and false if doesn't)
function changedAllData(obj){
	obj.name=changedData(obj.name);
	return obj;
}
const allArr=arr.concat(changedAllData(ihor));
if(!allArr.some(data=>data.name==='Ihor')){
	allArr.push({name:'Ihor',age:21,sex:'Male'});
}// else {
// 	console.log('Already exist!');
// }
// console.log(allArr);

//	push — add an element to the end of array (didn`t create a new array)
const array = ['Dog','Cat','Bear'];
array.push('Horse');
// console.log(array);

// map — create a new array with returned data 
const resArray2 = array.map(x=>x+'2');
const item = ['1','2','3','4','5'];
const item2 = item.map(x=>parseInt(x));
const strWithSpace = ['   Space','   X   '];
const strWithoutSpace = strWithSpace.map(x=>x.trim());
// console.log(strWithoutSpace);
// console.log(item2);
// console.log(resArray2);

// every — runs every element from array to the element which doesn't fit if every is fit its return true (return true or false)
const elements=['Ander',2000,'Peyton','Alex'];
// const check=elements.every(x=>{
// 	if(typeof x === 'string'){
// 		console.log(x + ': good!');
// 		return true;
// 	} else {
// 		console.log(x + ': bad!');
// 		return false;
// 	}
// });
// console.log(check);

//	reduce — can create a new array (its means that if you past an element from which you will beging and then return them) or return one element (if didn't past)
const number = [1,2,3,4,5];
const res = number.reduce((prev,item)=>prev+item);
// console.log(res);

const users=[
	{
		id:'01',
		name:'Ander'
	},
	{
		id:'02',
		name:'Peyton'
	}
];

const newUsers=users.reduce((myobj, item)=>{
	myobj[item.id]=item;
	return myobj;
},{});

// console.log(newUsers);
