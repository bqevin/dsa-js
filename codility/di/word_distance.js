function solution(S, T) {
	var s = S.split(""),
		t = T.split(""),
		swap, ret = "IMPOSSIBLE",
		i=0;

	//for similar
    if(S == T){
    	return "NOTHING";
    }

    //if same length, check for possible swaps
    if(s.length == t.length){
    	for(i = 0, size = s.length; i < size; i +=1){
    		if(s[i] != t[i]){
    			swap = s[i];
    			s[i] = s[i+1];
    			s[i+1] = swap;

    			if(s.join("").toString() == T){
    				ret = "SWAP " + swap + " " + s[i];
    				return ret;
    			}
    		}
    	}
    }

    //for insertions
    if(t.length == (s.length + 1)){
    	for(i=0, size = t.length; i < size; i +=1){
    		if(s[i] != t[i]){
    			s.splice(i,0,t[i]);

    			if(s.join("").toString() == T){
    				return "INSERT "+t[i];
    			}
    		}
    	}
    }

    //for deletion
    if(t.length == (s.length - 1)){
    	for(i=0, size = t.length; i < size; i +=1){
    		if(s[i] != t[i]){
    			var del = s[i];
    			s.splice(i,1);

    			if(s.join("").toString() == T){
    				return "DELETE "+ del;
    			}
    		}
    	}
    }


    return ret;
}

var s = "nice", t="niece";

console.log(solution(s,t));