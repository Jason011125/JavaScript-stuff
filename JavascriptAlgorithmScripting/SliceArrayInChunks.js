function chunkArrayInGroups(arr, size) {
    let res = [];
    //return directly if size is greater than length, no need to slice
    if (size > arr.length) {
        return arr;
    }
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }


    return res;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));