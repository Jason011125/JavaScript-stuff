//check for 0^n1^n, n >= 0
//remember to add for 0.
function checkLanguage(targetString) {
    let stack = [];
    let targetArray = targetString.split("");
    //inserted $ to bottom of the stack
    stack.push("$")
        // if n = 0, return true. Stack doesn't matter in this case since the string is empty.
    if (targetArray.length == 0) {
        return true;
    }
    //read the first char into nextChar, pop it from the string
    let nextChar = targetArray.shift();

    //since we're checking whether the string match the pattern 0^n1^n, if start with 1, then reject
    if (nextChar == "0") {
        //read 0, for each 0 read, pop it from the string we're reading from, hence it's processed.
        while (true) {
            //reading 0s, for each 0 read, push a "0" to the stack.
            //since we already read 0 in the first char, we need to first push a "0" to the stack before reading next.
            stack.push("0");
            //read next char
            nextChar = targetArray.shift();
            //if reading a 1, then break out of this loop and go to next one.
            if (nextChar == "1") {
                break;
            }
        }
        //loop for popping "0" from the stack. if we have equal amount of 1s, then return true.
        while (true) {
            //since a 1 is read, pop a "0" from the stack.
            stack.pop("0");
            //if there are still more characters on the string array, keep reading. 
            if (targetArray.length != 0) {
                nextChar = targetArray.shift();
            } else {
                break;
            }
            //if there are 0's following 1's, then it doesn't match the pattern, reject.
            if (nextChar != "1") {
                return false;
            }
        }
        //if we come out of the loop of 1's, it means there are no more to read on the string
        //check if we pop all 0's on the stack. If we did, this mean there are equal amount of 1's and 0's. Otherwise, reject.
        if (stack.length == 1 && stack.pop() == "$") {
            return true;
        }



    }
    return false;



}
//first 2 are non-valid
console.log(checkLanguage("10000"));
console.log(checkLanguage("00011"));
console.log(checkLanguage("00001111"));
console.log(checkLanguage("0011"));
console.log(checkLanguage(""));