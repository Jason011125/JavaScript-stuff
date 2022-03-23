function reverseString(str) {
    let strArr = str.split("");
    strArr = strArr.reverse();
    str = strArr.join('');
    return str;
}

