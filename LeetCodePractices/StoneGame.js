/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    var x = 0; 
    var y = 0;
    while(stones.length > 1){
        for(let i = 0; i < stones.length; i++){
            if(stones[i] > x ){
                y = x;
                x = stones[i];

            
            }else{
                if(stones[i] > y){
                    y = stones[i];
                }
            }
        
        }
    
        console.log(x-y);
        stones.splice(stones.indexOf(x),1);
        stones.splice(stones.indexOf(y),1);
        if(x != y){
            stones.push(x-y);
    
        }
        x = 0;
        y = 0;
    }
    return stones;
    
};
console.log(lastStoneWeight([3,7,2]));