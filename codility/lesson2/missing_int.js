function solution(A) {
    A.sort(function(i,j){
        if(i>j) return i;
    });

    var size = A.length,
    	count = 0;

    for(var i=0; i<size; i +=1){
    	if(A[i] > 0){
            if(A[i] != A[i-1]) count++;

    		if(A[i] != count){
    			return count;
    		}
    	}
    }
    return 1;
}

var a = [10,4,5,1,-3,-10,4,5];

// console.log(solution(a));

// a.sort(function(i,j){
//     if(i>j) return i;
// });

console.log(solution(a));