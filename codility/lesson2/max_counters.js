function solution(N, A) {
    var max = 0,
    	size = A.length,
    	counters = [],
    	j = 0,
    	i = 0;

    for(i=0; i<N; i+=1){
    	counters[i] = 0;
    }

    for(i=0; i<size; i +=1){
    	if(A[i] <= N && A[i] >= 0){
    		counters[A[i]-1] +=1;
    		if(counters[A[i]-1] > max) max = counters[A[i]-1];
    	}
    	if(A[i] == N+1){
    		for(j=0; j<N; j+=1){
    			counters[j] = max;
    		}
    	}
    }

    return counters;
}

var a = [3,4,4,6,1,4,4], n = 5;

console.log(solution(n,a));