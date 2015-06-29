function solution(A) {
    var passing = 0,
    	i=0, j=0,
    	size = A.length;

    for(i=0; i < size; i+=1){
    	if(passing > 1000000000){
    		return -1;
    	}
    	if(A[i] === 0){
    		for(j=i+1; j<size; j+=1){
    			if(A[j]==1){
    				passing++;
    			}
    		}
    	}
    }
    return passing;
}