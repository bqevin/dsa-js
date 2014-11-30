"use strict";

function Set(){
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show = show;
	this.contains = contains;
}

function add(data){
	if(this.dataStore.indexOf(data)<0){
		this.dataStore.push(data);
		return true;
	}
	return false;
}

function remove(data){
	var pos = this.dataStore.indexOf(data);
	if(pos > -1){
		this.dataStore.splice(pos,1);
		return true;
	}
	return false;
}

function show(){
	return this.dataStore;
}

function contains(data){
	if(this.dataStore.indexOf(data) > -1){
		return true;
	}
	return false;
}

function union(set){
	var tempSet = new Set();
	for(var i=0; i<this.dataStore.length; ++i){
		tempSet.add(this.dataStore[i]);
	}
	for(var i=0; i<set.dataStore.length; ++i){
		// if(!tempSet.contains(set.dataStore[i])){
		// 	tempSet.dataStore.push(set.dataStore[i]);
		// }

		//simpler way >
		tempSet.add(set.dataStore[i]);
	}
	return tempSet;
}

function intersect(set){
	var tempSet = new Set();
	for(var i=0; i<this.dataStore.length; ++i){
		if(set.contains(this.dataStore[i])){
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

function difference(){

}

function subset(set){
	if(this.size() > set.size()){
		return false;
	}
	else{
		//can use for instead too
		for each(var member in this.dataStore){ 
			if(!set.contains(member)){
				return false;
			}
		}
	}
	return true;
}

function size(){
	return this.dataStore.length;
}

//Use

var names = new Set();
names.add("David");
names.add("James");
names.add("Jane");
names.add("David");

print("names: ", names.show());

var names2 = new Set();
names2.add("David");
names2.add("Anthony");
names2.add("Ben");
names2.add("James");
names2.add("Jane");

print("names2: ", names2.show());

print("names U names2: ", names.union(names2).show());

print("names x names2: ", names.intersect(names2).show());

print("is names subset of names2? : ", names.subset(names2));