function frankenSplice(arr1, arr2, n) {
    let arr3 = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        arr3.splice(n + i, 0, arr1[i]);
    }
    return arr3;
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1));