"use strict";

//Binary Search Tree (BST)

function Node(data, left, right){
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show(){
	return this.data;
}

function BST(){
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.preOrder = preOrder;
	this.postOrder = postOrder;
	this.getMin = getMin;
	this.getMax = getMax;
	this.find = find;
	this.remove = remove;
}

function insert(data){
	var n = new Node(data,null,null);
	if(this.root == null){
		this.root = n;
	}
	else{
		var current = this.root;
		var parent;
		while(true){
			parent = current;
			if(data < current.data){
				current = current.left;
				if(current == null){
					parent.left = n;
					break;
				}
			}
			else{
				current = current.right;
				if(current == null){
					parent.right = n;
					break;
				}
			}
		}
	}

	return this; //to enable chaining
}

//traversing a binary tree

function inOrder(node){
	if(!(node == null)){
		inOrder(node.left);
		putstr(node.show() + " ");
		inOrder(node.right);
	}
}

function preOrder(node){
	if(!(node == null)){
		putstr(node.show() + " ");
		inOrder(node.left);
		inOrder(node.right);
	}
}

function postOrder(node){
	if(!(node == null)){
		inOrder(node.left);
		inOrder(node.right);
		putstr(node.show() + " ");
	}
}

//BST Searches
function getMin(){
	var current = this.root;
	while(!(current.left == null)){
		current = current.left;
	}
	return current.data;
}

function getMax(){
	var current = this.root;
	while(!(current.right == null)){
		current = current.right;
	}
	return current.data;
}

function find(data){
	var current = this.root;
	while(current.data !== data){
		if(data < current.data){
			current = current.left;
		}
		else{
			current = current.right;
		}
		if(current == null){
			return null;
		}
	}
	return current;
}

//Removing nodes from BST

function remove(data){
	root = removeNode(this.root, data);
}

function removeNode(node,data){
	if(node == null){
		return null;
	}

	if(data == node.data){
		//node has no child
		if(node.left == null && node.right == null){
			return null;
		}

		//node has no left child
		if(node.left == null){
			return node.right;
		}

		//node has no right child
		if(node.right == null){
			return node.left;
		}

		//node has two children
		var tempNode = getSmallest(node.right);
		node.data = tempNode.data;
		node.right = removeNode(node.right, tempNode.data);
		return node;
	}
	else if(data < node.data){
		node.left = removeNode(node.left, data);
		return node;
	}
	else{
		node.right = removeNode(node.right, data);
		return node;
	}
}


//Example

var nums = new BST();
nums.insert(23).insert(45).insert(16).insert(37)
	.insert(3).insert(99).insert(22);

print("InOrder traversal: ");
inOrder(nums.root);

print("\nPreOrder traversal: ");
preOrder(nums.root);

print("\nPostOrder traversal: ");
postOrder(nums.root);

print("Minumum: ", nums.getMin());
print("Maximum: ", nums.getMax());

putstr("\nEnter a value to search for: ");
var value = parseInt(readline());
var found = nums.find(value);
if(found != null){
	print("Found " + value + " in the BST");
}else{
	print(value + " was not foundin the BST");
}

