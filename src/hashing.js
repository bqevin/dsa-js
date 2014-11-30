"use strict";

function HashTable(){
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.betterHash = betterHash;
	this.showDistro = showDistro;
	this.put = put;
	this.get = get;
}

function simpleHash(data){
	var total = 0;
	for(var i=0; i<data.length; ++i){
		total += data.charCodeAt(i);
	}
	return total % this.table.length;
}

function put(data){
	var pos = this.betterHash(data);
	//to handle collision -- linear probing method
	if(this.table[pos] == undefined){
		this.table[pos] = data;
	}
	else{
		while(this.table[pos] != undefined){
			this.table[pos] = data;
		}
	}
	return this; //for chaining
}

function get(key){
	// return this.table[this.betterHash(key)];
	var hash = -1;
	hash = this.betterHash(key);
	if(hash > -1){
		for(var i = hash; this.table[hash] != undefined; i++){
			if(this.table[hash] == key){
				return this.table[hash];
			}
		}
	}
}

function showDistro(){
	var n = 0;
	for(var i=0; i<this.table.length; ++i){
		if(this.table[i] != undefined){
			print(i + ": " + this.table[i]);
		}
	}
}

function betterHash(string){
	const H = 37;
	var total = 0;
	for(var i=0; i<string.length; ++i){
		total += H * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	if(total < 0){
		total += this.table.length - 1;
	}
	return parseInt(total);
}

//Example

var someNames = ["Wanjala","Nanjala","Nakhumicha","Wafula","Barasa","Njuguna",
					"Clayton","Raymond"];

var hTable = new HashTable();
for(var i=0; i<someNames.length; ++i){
	hTable.put(someNames[i]);
}

//'Clayton' and 'Raymond' will collude
//when simpleHash() is used for put()

hTable.showDistro();