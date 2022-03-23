function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return '';
    }
    let newStr = [];
    while (num >= 1) {
        newStr.push(str);
        num--;
    }
    return newStr.join('');
}

console.log(repeatStringNumTimes("abc", 3))