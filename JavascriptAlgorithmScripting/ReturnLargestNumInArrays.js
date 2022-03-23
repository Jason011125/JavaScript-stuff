function largestOfFour(arr) {
    let finalarr = [];
    for (let i = 0; i < arr.length; i++) {
        let largest = arr[i][0];
        for (let arrIndex = 0; arrIndex < arr[i].length; arrIndex++) {
            if (arr[i][arrIndex] > largest) {
                largest = arr[i][arrIndex];
            }
        }
        console.log(largest);
        finalarr.push(largest);

    }
    return finalarr;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])); 