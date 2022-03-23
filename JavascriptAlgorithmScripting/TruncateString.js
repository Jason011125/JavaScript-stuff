function truncateString(str, num) {
    let Strarr = str.split('');
    let resarr = Strarr.slice(0, num);
    if (num < Strarr.length) {
        resarr.push("...");
    }
    return resarr.join('');
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));