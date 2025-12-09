function fibrs(n) {
    if (n === 0){
        return [0];
    } 
    if (n === 1){
        return [0, 1];
    } 

    let prev = fibrs(n - 1);
    prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
    return prev;
}

console.log(fibrs(8));
