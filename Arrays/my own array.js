function myArray(){
	Object.defineProperty(this,'len',{
		value:0,
		enumerable:false,
		writable:true
	});

	for(let key in arguments){
		this[key]=arguments[key];
		this.len+=1;
	}
}

myArray.prototype.push=function(item){
	this[this.len]=item;
	this.len++;
};

myArray.prototype.pop=function(){
	if(this.len!==0){
		this.len--;
		const itemForRemove=this[this.len];
		delete this[this.len];
		console.log(itemForRemove);
	}
};

myArray.prototype.filter=function(cb){
	let result = new myArray();

	for(let index in this){
		if(this.hasOwnProperty(index)){
			const element=this[index];

			if(cb(element,index)){
				result.push(element);
			}
		}
	}

	return result;
};
