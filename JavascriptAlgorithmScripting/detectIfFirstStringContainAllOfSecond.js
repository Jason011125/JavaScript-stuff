function mutation(arr) {
    let str1 = arr[0];
    let str2 = arr[1];
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for (let i = 0; i < arr[1].length; i++) {
        if (str1.indexOf(str2[i]) < 0) {
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);