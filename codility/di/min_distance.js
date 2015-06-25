function solution(A) {
    // write your code in JavaScript (Node.js 0.12)
    var min, new_min;
    	i = 0,
    	size = A.length,
    	j = 0;

    for(i=0; i < size; i +=1){
    	for(j=i+1; j < size; j +=1){
    		new_min = Math.abs(A[j] - A[i]);
    		if(j == 1) min = new_min; //initial
    		if(new_min < min){
    			min = new_min;
    		}
    	}
    }

    return min;
}

var test = [8,24,3,20,1,17];
var test2 = [7,21,3,42,3,7];

console.log(solution(test));
console.log(solution(test2));