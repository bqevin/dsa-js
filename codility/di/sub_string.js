function solution(S) {
    // write your code in JavaScript (Node.js 0.12)
    //force stoping condition
    S += "8";
    var A = S.split(""),
    	min = 0, max = 0, 
    	valid = false, 
    	longest=-1, 
    	size;


    for(var i=0,j=A.length; i<j; i +=1){
    	if(A[i] == A[i].toUpperCase() &&
    		!(parseInt(A[i])>=0)){
    		valid = true;
    	}

    	if((parseInt(A[i]) >= 0 && valid) ||
    		(i == j-1 && valid)){
    		valid = false;
    		max = i;
    		size = max-min;
    		if(size > longest){
    			longest = size;
    		}
    		min = i+1;
    	}

    	if(parseInt(A[i]) >= 0) min = i+1;
    }

    return longest;
}

var s = "a0Basssss89anksjskjkskjsjksS";

console.log(solution(s));