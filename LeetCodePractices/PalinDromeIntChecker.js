/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const arrOfDigits = Array.from(String(x), Number);
    for(i = 0; i < arrOfDigits.length; i++){
        if(i == arrOfDigits.length/2 + 1){
            break;
        }
        if(arrOfDigits[i] != arrOfDigits[arrOfDigits.length-i-1]){
            return false;
        }
    }
    return true;
    
};