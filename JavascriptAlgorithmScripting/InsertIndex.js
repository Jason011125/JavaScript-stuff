function CompareForSort(first, second) {
    if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1;
}
function getIndexToIns(arr, num) {
    arr.sort(CompareForSort);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return i;
        }
        if (arr[i] > num) {
            return i;
        }

    }
    return arr.length;
}