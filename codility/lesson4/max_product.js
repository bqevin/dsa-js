function solution(A) {
	var size = A.length;

    A.sort(function(i,j){
        if(i>j) return i;
    });

    return A[size-1] * A[size-2] * A[size-3];
}

var test = [-3,1,2,-2,5,6];

console.log(solution(test));