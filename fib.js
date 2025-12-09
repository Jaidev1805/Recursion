function fibs(num) {
    let arr = [];

    if (num === 0){
        return [0];
    } 
    if (num === 1){
        return [0, 1];

    }
    arr = [0, 1];

    for (let i = 2; i < num; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    } 
    return arr;
}

console.log(fibs(8));