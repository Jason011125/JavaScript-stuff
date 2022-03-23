function titleCase(str) {
    let strArr = str.split(' ');
    for (let index = 0; index < strArr.length; index++) {
        strArr[index] = strArr[index].toLowerCase();
        strArr[index] = strArr[index].charAt(0).toUpperCase() + strArr[index].slice(1);
    }
    return strArr.join(' ');
}

console.log(titleCase("sHoRt AnD sToUt"));