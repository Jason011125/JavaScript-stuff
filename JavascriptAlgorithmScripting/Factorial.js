function factorialize(num) {
    let res = 1;
    while (num >= 1) {
        res = res * num;
        num--;
    }
    return res;
}

factorialize(5);