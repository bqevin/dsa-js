function solution(A) {
    var passing = 0,
    	i=0, ones=0,
    	size = A.length;

    for(i=size-1; i >= 0; i-=1){
    	if(passing > 1000000000){
    		return -1;
    	}
    	if(A[i]==1) ones++;
    	if(A[i]===0){
    		passing += ones;
    	}
    }
    return passing;
}