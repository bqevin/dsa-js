"use strict";

//building a graph

function Graph(v){
	this.vertices = v;
	this.vertexList = [];
	this.edges = 0;
	this.addEdge = addEdge;
	// this.toString = toString;
	this.showGraph = showGraph;
	this.showGraph1 = showGraph1;
	this.dfs = dfs;
	this.bfs = bfs;
	this.edgeTo = [];
	this.hasPathTo = hasPathTo;
	this.pathTo = pathTo;
	this.topSortHelper = topSortHelper;
	this.topSort = topSort;
	this.adj = [];
	for(var i=0; i<this.vertices; ++i){
		this.adj[i] = [];
		this.adj[i].push("");
	}
	this.marked = [];
	for(var i=0; i<this.vertices; ++i){
		this.marked[i] = false;
	}
	this.clearMarks = clearMarks;
}

/*
The class keeps track of how many edges are represented
in a graph, as well as the number of vertices, by utilizing
an array whose length is equal to the numebr of vertices
in the graph. In each element of the array, the for loop
adds a subarray to store all the adjacent vertices, and it
initializes each to the empty string.
*/

function addEdge(v,w){
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
	return this; //to enable chaining
}

//displays the graphy by showing a list of all vertices and
//the vertices that are adjacent to them

function showGraph1(){
	for(var i=0; i<this.vertices; ++i){
		putstr(i + " => ");
		for(var j=0; j<this.vertices; ++j){
			if(this.adj[i][j] != undefined)
				putstr(this.adj[i][j] + " ");
		}
		print();
	}
}

//A new function to allow symbolic names instead of numbers

function showGraph(){
	var visited = [];
	for(var i=0; i<this.vertices; ++i){
		putstr(this.vertexList[i] + " => ");
		visited.push(this.vertexList[i]);
		for(var j=0; j<this.vertices; ++j){
			if(this.adj[i][j] != undefined){
				if(visited.indexOf(this.vertexList[j] < 0)){
					putstr(this.vertexList[j] + " ");
				}
			}
		}
		print();
		visited.pop();
	}
}

//Searching a Graph

//Depth First Search (DFS)
function dfs(v){
	this.marked[v] = true;
	if(this.adj[v] != undefined){
		print("Visited vertex: " + v);
	}
	for each(var w in this.adj[v]){
		if(!this.marked[w]){
			this.dfs(w);
		}
	}
}

//Breadth First Search (BFS)
function bfs(s){
	var queue = [];
	this.marked[s] = true;
	queue.unshift(s); //add to back of queue
	while(queue.length > 0){
		var v = queue.shift(); //remove from from of queue
		if(typeof(v) != "string"){
			print("Visited vertex: ", v);
		}
		for each(var w in this.adj[v]){
			if(!this.marked[w]){
				this.edgeTo[w] = v;
				this.marked[w] = true;
				queue.push(w);
			}
		}
	}
}

function hasPathTo(v){
	return this.marked[v];
}

function pathTo(v){
	var source = 0;
	if(!this.hasPathTo(v)){
		return undefined;
	}
	var path = [];
	for(var i=v; i!=source; i=this.edgeTo[i]){
		path.push(i);
	}
	path.push(s);
	return path;
}

function topSort(){
	var stack = [];
	var visited = [];
	for(var i=0; i<this.vertices; i++){
		visited[i] = false;
	}
	for(var i=0; i<this.vertices; i++){
		if(visited[i] == false){
			this.topSortHelper(i,visited,stack);
		}
	}
	for(var i=0; i<stack.length; i++){
		if(stack[i] != undefined && stack != false){
			print(this.vertexList[stack[i]]);
		}
	}
}

function topSortHelper(v,visited,stack){
	visited[v]  = true;
	for each(var w in this.adj[v]){
		if(!visited[w]){
			this.topSortHelper(visited[w],visited,stack);
		}
	}
	stack.push(v);
}

//added to enable re-traversing, for the sake of testing
function clearMarks(){
	this.marked = [];
}


//Example

var g = new Graph(5);

g.addEdge(0,1).addEdge(0,2).addEdge(1,3).addEdge(2,4);
g.showGraph1();

print("DFS:");
g.dfs(0);

g.clearMarks();
print("BFS:");
g.bfs(0);