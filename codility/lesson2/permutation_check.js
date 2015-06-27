function solution(A) {
    var size = A.length,
    	a_check = [];

    for(var i = 0; i < size; i++){
    	if(a_check[A[i]-1] === undefined){
    		if(A[i] > size){
    			//out of range
    			return 0;
    		}
    		a_check[A[i]-1] = A[i];
    	}
    	else{
    		//is duplicated
    		return 0;
    	}
    }

    return 1;
}

var a = [4,1,3,2],
	b = [4,1,3],
	c = [2,1,5];

console.log(solution(c));