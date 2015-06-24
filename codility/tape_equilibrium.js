function solution(A) {
    // write your code in JavaScript (Node.js 0.12)
    var total = 0, minimum, new_min;

    A.forEach(function(num){
    	total += num;
    });

    sub_total = 0;

    for(var i=0, j=A.length; i < j; i +=1){
    	if(i > 0){
    		new_min = Math.abs(sub_total-(total-sub_total));
    		if(new_min < minimum || minimum == undefined){
    			minimum = new_min;
    		}
    	}
    	sub_total += A[i];
    }

    return minimum;
}