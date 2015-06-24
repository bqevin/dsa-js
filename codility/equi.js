
function solution(A) {
    // write your code in JavaScript (Node.js 0.12)
    var total = 0;
    A.forEach(function(i){
        total += i;
    });
    

    var sub_total = 0;
    
    var eq = -1;
    
    for(var i = 0, j = A.length; i < j; i += 1){
        sub_total += A[i];
        if(total-sub_total == sub_total-A[i]){
           eq = i;
           return eq;
        }
    }

    return eq;
    
}


var a = [-1,3,-4,5,1,-6,2,1];

console.log(solution(a));