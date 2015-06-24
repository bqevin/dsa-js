function solution(A) {
    // write your code in JavaScript (Node.js 0.12)
    var len = A.length,
    	sum = 0, array_sum = 0;

    for(var i=1; i<=len+1; i+=1){
    	sum += i;
    }

    A.forEach(function(n){
    	array_sum += n;
    });

    return sum - array_sum;
}