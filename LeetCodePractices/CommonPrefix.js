/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    strs.sort();
    let l = 0;
    let str1 = strs[0];
    let str2 = strs[strs.length-1];
    let res = [];
    if(str1.length>str2.length){
        l = str2.length;
    }else{
        l = str1.length;
    }
    for(let i = 0; i < l; i++){
        if(str1[i] == str2[i]){
            res.push(str1[i]);
        }else{
            break;
        }
    }
    return res.join("");
    
};