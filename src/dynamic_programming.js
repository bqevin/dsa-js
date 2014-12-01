"use strict";

//Dynamic programming example: Computing Fibonacci Numbers

//recursive equivalent

function recurFib(n){
	if(n < 2){
		return n;
	}else{
		return recurFib(n-1) + recurFib(n-2);
	}
}

/*
An algorithm designed using dynamic programming starts by solving
the simplest sub-problem it can solve, then using that solution
to sove more complex sub-problems until the entire problem is solved.
*/

function dynFib(n){
	var val = [];
	for(var i=0; i<=n; ++i){
		val[i] = 0;
	}
	if(n==1 || n==2){
		return 1;
	}else{
		val[1] = 1;
		val[2] = 2;
		for(var i=3; i<=n; ++i){
			val[i] = val[i-1] + val[i-2];
		}
		return val[n-1];
	}
}

print("Fib(100), dynamic: ", dynFib(100)); //almost instant

print("Be ready to wait for the recursive :) ");
print("Fib(50): ", recurFib(50)); //takes awefully loooong! (had to just stop it)
